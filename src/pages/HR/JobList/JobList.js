import { EditFilled, FileTextOutlined, DeleteFilled } from "@ant-design/icons";
import { Table } from "antd";
import JobMenu from "components/JobMenu/JobMenu";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  deleteJobPost,
  hrGetJobCount,
  hrGetJobs
} from "services/hrJobServices";
import history from "state/history";
import { toast, toastErr } from "utils/index";
import "./JobList.scss";
import qs from "query-string";
import swal from "sweetalert";
import jwt_decode from "jwt-decode";
import { JOBS_MENU } from "constants/index";

function HRJobList() {
  const { search } = history.location;
  const [dropdown, toggleDropdown] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState({ is_showing: 0, is_closed: 0 });
  const [is_showing, setIsShowing] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [jobChange, setJobChange] = useState(0);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const ref = useRef(false);

  const setRef = (status) => {
    ref.current = status;
  };

  // redux
  const { token } = useSelector((state) => state.auth.recruiter);

  const handleDelete = (id = null) => {
    swal({
      title: "Bạn có chắc không?",
      text: "Một khi xoá, bạn không thể khôi phục những tin đã chọn!",
      icon: "warning",
      buttons: ["Huỷ", "Xoá"],
      dangerMode: true
    })
      .then(async (willDelete) => {
        if (willDelete) {
          const ids = id ? [id] : selectedRowKeys;

          setLoading(true);
          await deleteJobPost(ids, token)
            .then((res) => {
              const { message } = res.data;

              toast({ message });
              setJobChange(jobChange + 1);
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              setLoading(false);
            });
          setSelectedRowKeys([]);
        } else {
          swal("Chúc mừng dữ liệu của bạn vẫn an toàn!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "Vị trí tuyển dụng",
      dataIndex: "position",
      render: ({ id, title, salary }) => (
        <>
          <div className="job-item-title-wrapper">
            <p>
              <Link to={`/recruiter/jobs/${id}`} className="job-item-title">
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
      dataIndex: "posted_in",
      align: "center",
      sorter: true,
      render: (posted_in) => posted_in.toLocaleDateString()
    },
    {
      title: "Hạn nhận hồ sơ",
      dataIndex: "deadline",
      align: "center",
      sorter: true,
      render: (deadline) => deadline.toLocaleDateString()
    },
    {
      title: "Tổng CV apply",
      dataIndex: "apply",
      align: "center",
      sorter: true
    },
    {
      title: "Tổng lượt lưu",
      dataIndex: "save",
      align: "center",
      sorter: true
    },
    {
      title: "Lượt xem",
      dataIndex: "view",
      align: "center",
      sorter: true
    },
    {
      title: (
        <button
          className={` ${selectedRowKeys.length ? "" : "d-none"}`}
          onClick={() => handleDelete()}
        >
          <span className="text-danger">
            <DeleteFilled />
            {" Xoá"}
          </span>
        </button>
      ),
      dataIndex: "action",
      render: ({ id }) => (
        <div
          className={`btn-group btn-group-action ${
            dropdown === id ? "open" : ""
          }`}
          onMouseEnter={() => toggleDropdown(id)}
          onMouseLeave={() => {
            setTimeout(() => {
              if (!ref.current) toggleDropdown(null);
            }, 200);
          }}
        >
          <button className="btn btn-sm btn-default dropdown-toggle btn-action outline btn-hover-no-effect">
            <strong>Thao tác &nbsp;</strong>
            <span className="caret"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-right"
            role="menu"
            onMouseEnter={() => setRef(true)}
            onMouseLeave={() => setRef(false)}
          >
            <li>
              <Link to={`/recruiter/jobs/${id}/candidates`}>
                <FileTextOutlined />
                {" Xem CV ứng tuyển"}
              </Link>
            </li>
            <li>
              <Link to={`/recruiter/jobs/${id}/edit`}>
                <EditFilled />
                {" Chỉnh sửa tin"}
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleDelete(id)}>
                <span className="text-danger">
                  <DeleteFilled />
                  {" Xoá"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      ),
      align: "center"
    }
  ];

  const { status } = qs.parse(search.substring(1));

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
        posted_in: new Date(posted_in.substring(1, posted_in.length - 1)),
        deadline: new Date(deadline.substring(1, deadline.length - 1)),
        apply: total_apply,
        save: total_save,
        view: total_view,
        action: { id }
      })
    );

  useEffect(() => {
    const fetchJobs = async () => {
      let jobs = [];
      setLoading(true);
      await hrGetJobs({}, is_showing, token)
        .then((result) => {
          jobs = result.data.data;
        })
        .catch((err) => {
          toastErr(err);
        })
        .finally(() => {
          setLoading(false);
        });

      await hrGetJobCount(token)
        .then((res) => {
          const { data } = res.data;

          setAmount(data);
        })
        .catch((err) => {
          toastErr(err);
        });

      jobs = mapResponseToPost(jobs);
      setPosts(jobs);
    };

    fetchJobs();
  }, [is_showing, jobChange]);

  const {
    identity: { company_id: companyId }
  } = jwt_decode(token);

  if (companyId === null) {
    return <Redirect to="/recruiter/company/update" />;
  }

  if (status && !["showing", "closed"].includes(status))
    return <Redirect to="/404" />;

  if (status === "closed" && is_showing) {
    setIsShowing(false);
    setPage(1);
  }

  if (status === "showing" && !is_showing) {
    setIsShowing(true);
    setPage(1);
  }

  const handleTableChange = async (pagination, filters, sorter) => {
    setLoading(true);
    const order = sorter.order === "ascend" ? 1 : -1;
    const sort = { [sorter.field]: order, page: pagination.current };

    await hrGetJobs(sort, is_showing, token)
      .then((result) => {
        let jobs = result.data.data;

        jobs = mapResponseToPost(jobs);
        setPosts(jobs);
      })
      .catch((err) => {
        toastErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selection: Table.SELECTION_ALL
  };

  return (
    <>
      <JobMenu menu={JOBS_MENU} />
      <div id="page-jobs">
        <div className="container">
          <div id="job-tabs">
            <ul>
              <Tab
                label="Tin đang hiển thị"
                href="/recruiter/jobs?status=showing"
                amount={amount.is_showing}
                active={!status || status === "showing"}
                className="job-showing-tab"
              />
              <Tab
                label="Tin hết hạn/ đã đóng"
                href="/recruiter/jobs?status=closed"
                amount={amount.is_closed}
                active={status === "closed"}
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
                  rowSelection={rowSelection}
                  dataSource={posts}
                  columns={columns}
                  loading={loading}
                  onChange={handleTableChange}
                  showSorterTooltip={false}
                  pagination={{
                    page,
                    pageSize: 10,
                    total: is_showing ? amount.is_showing : amount.is_closed
                  }}
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
