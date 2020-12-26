import { EditFilled, FileTextOutlined, DeleteFilled } from "@ant-design/icons";
import { Table } from "antd";
import JobMenu from "components/JobMenu/JobMenu";
import OutsideClickWrapper from "components/OutsideClickWrapper/OutsideClickWrapper";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hrGetJobs } from "services/hrJobServices";
import history from "state/history";
import { toastErr } from "utils/index";
import "./JobList.scss";

function HRJobList() {
  const { search } = history.location;
  const [dropdown, toggleDropdown] = useState(undefined);

  // redux
  const { token } = useSelector((state) => state.auth);

  const [posts, setPosts] = useState([]);

  const closeDropdown = () => toggleDropdown(undefined);

  const columns = [
    {
      title: "Vị trí tuyển dụng",
      dataIndex: "position",
      render: ({ id, title, salary }) => (
        <>
          <div className="job-item-title-wrapper">
            <p>
              <Link to="#" target="_blank" className="job-item-title">
                <strong>{title}</strong>
              </Link>
            </p>
            <p>Mức lương: {salary}</p>
            <p>Mã TTD: #{id}</p>
          </div>
        </>
      ),
      width: "30%"
    },
    {
      title: "Ngày đăng tin",
      dataIndex: "postedDate",
      align: "center",
      sorter: (a, b) => a - b,
      render: (postedDate) => <>{postedDate.toLocaleDateString()}</>
    },
    {
      title: "Hạn nhận hồ sơ",
      dataIndex: "deadline",
      align: "center",
      sorter: (a, b) => a - b,
      render: (deadline) => <>{deadline.toLocaleDateString()}</>
    },
    {
      title: "Tổng CV apply",
      dataIndex: "totalApply",
      align: "center",
      sorter: (a, b) => a - b
    },
    {
      title: "Tổng lượt lưu",
      dataIndex: "totalSave",
      align: "center",
      sorter: (a, b) => a - b
    },
    {
      title: "Lượt xem",
      dataIndex: "viewed",
      align: "center",
      sorter: (a, b) => a - b
    },
    {
      title: "",
      dataIndex: "action",
      render: ({ id }) => (
        <OutsideClickWrapper
          isShowing={dropdown}
          onClickOutside={closeDropdown}
        >
          <div
            className={`btn-group btn-group-action ${
              dropdown === id ? "open" : ""
            }`}
          >
            <button
              className="btn btn-sm btn-default dropdown-toggle btn-action outline btn-hover-no-effect"
              onClick={() =>
                dropdown === id ? toggleDropdown(undefined) : toggleDropdown(id)
              }
            >
              <strong>Thao tác &nbsp;</strong>
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right" role="menu">
              <li>
                <Link to="#">
                  <FileTextOutlined />
                  {" Xem CV ứng tuyển"}
                </Link>
              </li>
              <li>
                <Link to="#">
                  <EditFilled />
                  {" Chỉnh sửa tin"}
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className="text-danger">
                    <DeleteFilled />
                    {" Xoá"}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </OutsideClickWrapper>
      ),
      align: "center"
    }
  ];

  const mapResponseToPost = (jobs) =>
    jobs.map(
      ({
        id,
        job_title,
        salary,
        posted_in,
        deadline,
        total_view,
        total_save,
        total_apply
      }) => ({
        id,
        position: { id, title: job_title, salary },
        postedDate: new Date(posted_in.substring(1, posted_in.length - 1)),
        deadline: new Date(deadline.substring(1, deadline.length - 1)),
        totalApply: total_apply,
        totalSave: total_save,
        viewed: total_view,
        action: { id }
      })
    );

  useEffect(() => {
    const fetchJobs = async () => {
      let jobs = [];
      await hrGetJobs({}, token)
        .then((result) => {
          jobs = result.data.data;
        })
        .catch((err) => {
          toastErr(err);
        });

      jobs = mapResponseToPost(jobs);
      setPosts(jobs);
    };

    fetchJobs();
  }, []);

  return (
    <>
      <JobMenu />
      <div id="page-jobs">
        <div className="container">
          <div id="job-tabs">
            <ul>
              <Tab
                label="Tin đang hiển thị"
                href="/recruiter/jobs?status=showing"
                amount={1}
                active={search === "" || search === "?status=showing"}
                className="job-showing-tab"
              />
              <Tab
                label="Tin hết hạn/ đã đóng"
                href="/recruiter/jobs?status=closed"
                amount={1}
                active={search === "?status=closed"}
              />
            </ul>
          </div>
          <div id="box-jobs">
            <div className="jobs">
              {!posts.length ? (
                <EmptyJob />
              ) : (
                <Table
                  rowKey={(record) => record.id}
                  dataSource={posts}
                  columns={columns}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRJobList;

const Tab = ({ href, label, amount, active, className = "" }) => (
  <li>
    <Link className={`${className} ${active ? "active" : ""}`} to={href}>
      <span>{label}</span>
      <label className="jobs-number-label">{amount}</label>
    </Link>
  </li>
);

const EmptyJob = () => (
  <>
    <div className="text-center">
      <p style={{ padding: "20px", fontWeight: "bold", color: "#555" }}>
        {"Vui lòng "}
        <Link to="/recruiter/jobs/new-job" className="text-primary">
          Đăng tin tuyển dụng
        </Link>
        {" mới hoặc xem tin đã đăng tại mục "}
        <Link to="/recruiter/jobs?status=closed">Tin hết hạn/ đã đóng</Link>
        {"."}
      </p>
    </div>
    <div className="text-center">
      <img
        src="/assets/svg/Empty.svg"
        alt="empty icon"
        style={{ width: "380px", height: "160px", margin: "50px auto" }}
      />
      <p style={{ paddingBottom: "80px" }}>Không có tin tuyển dụng nào!</p>
    </div>
  </>
);
