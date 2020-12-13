import JobMenu from "components/JobMenu/JobMenu";
import React from "react";
import { Link } from "react-router-dom";
import history from "state/history";
import "./JobList.scss";

const POSTS = [];

function HRJobList() {
  const { search } = history.location;

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
            <div className="jobs">{!POSTS.length && <EmptyJob />}</div>
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
