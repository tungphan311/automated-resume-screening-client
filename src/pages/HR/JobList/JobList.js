import { EditFilled, FileTextOutlined, DeleteFilled } from "@ant-design/icons";
import { Table } from "antd";
import JobMenu from "components/JobMenu/JobMenu";
import OutsideClickWrapper from "components/OutsideClickWrapper/OutsideClickWrapper";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import history from "state/history";
import "./JobList.scss";

const POSTS = [
  {
    id: 1,
    position: {
      id: 1,
      title: "Senior Python Developer",
      salary: "Thoả thuận"
    },
    postedDate: "13/12/2020",
    deadline: "31/12/2020",
    totalApply: 10,
    newApply: 2,
    viewed: 100,
    action: {
      id: 1
    }
  }
];

function HRJobList() {
  const { search } = history.location;
  const [dropdown, toggleDropdown] = useState(false);

  const closeDropdown = () => toggleDropdown(false);

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
            <p>Mức TTD: {id}</p>
          </div>
        </>
      )
    },
    {
      title: "Ngày đăng tin",
      dataIndex: "postedDate",
      align: "center"
    },
    {
      title: "Hạn nhận hồ sơ",
      dataIndex: "deadline",
      align: "center"
    },
    {
      title: "Tổng CV apply",
      dataIndex: "totalApply",
      align: "center"
    },
    {
      title: "CV apply mới",
      dataIndex: "newApply",
      align: "center"
    },
    {
      title: "Lượt xem",
      dataIndex: "viewed",
      align: "center"
    },
    {
      title: "",
      dataIndex: "action",
      render: () => (
        <OutsideClickWrapper
          isShowing={dropdown}
          onClickOutside={closeDropdown}
        >
          <div
            className={`btn-group btn-group-action ${dropdown ? "open" : ""}`}
          >
            <button
              className="btn btn-sm btn-default dropdown-toggle btn-action outline btn-hover-no-effect"
              onClick={() => toggleDropdown(!dropdown)}
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

  return (
    <>
      <JobMenu />
      <div id="page-jobs">
        <div className="container">
          <div id="job-tabs">
            <ul>
              <Tab
                label="Tin đang hiển thị"
                href="/recruitment/jobs?status=showing"
                amount={1}
                active={search === "" || search === "?status=showing"}
                className="job-showing-tab"
              />
              <Tab
                label="Tin hết hạn/ đã đóng"
                href="/recruitment/jobs?status=closed"
                amount={1}
                active={search === "?status=closed"}
              />
            </ul>
          </div>
          <div id="box-jobs">
            <div className="jobs">
              {!POSTS.length ? (
                <EmptyJob />
              ) : (
                <Table dataSource={POSTS} columns={columns} />
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
        <Link to="/recruitment/jobs/new-job" className="text-primary">
          Đăng tin tuyển dụng
        </Link>
        {" mới hoặc xem tin đã đăng tại mục "}
        <Link>Tin hết hạn/ đã đóng</Link>
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
