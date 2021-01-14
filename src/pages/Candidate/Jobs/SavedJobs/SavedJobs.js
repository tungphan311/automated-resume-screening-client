import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SavedJobs.scss";
import { DollarCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

const JOBS = [
  {
    id: 1,
    job_title: "Cộng tác viên Content [Freelancer]",
    created_on: "02:59 31/12/2020",
    company_name: "Công ty Cổ phần TOPCV Việt Nam",
    salary: "14-20 triệu",
    deadline: "10/01/2021",
    province: "Thành phố Hà Nội",
    company_logo:
      "https://static.topcv.vn/company_logos/cong-ty-co-phan-topcv-viet-nam-5f33477c4e78b.jpg"
  },
  {
    id: 2,
    job_title: "Front End Developer (Html/Css)",
    created_on: "20:19 08/01/2021",
    company_name: "Công ty Cổ phần Công nghệ HiveTech",
    salary: "6-18 triệu",
    deadline: "10/01/2021",
    province: "Thành phố Hà Nội",
    company_logo:
      "https://static.topcv.vn/company_logos/cong-ty-co-phan-cong-nghe-hivetech-5d01b43ad68b2.jpg"
  },
  {
    id: 3,
    job_title: "Frontend Developer (JavaScript, Angular)",
    created_on: "20:39 08/01/2021",
    company_name: "Công ty Cổ phần GEM",
    salary: "Thoả thuận",
    deadline: "07/02/2021",
    province: "Thành phố Hồ Chí Minh",
    company_logo:
      "https://static.topcv.vn/company_logos/cong-ty-co-phan-tap-doan-meey-land-5e5f277aa28fb.jpg"
  }
];

function CandidateSavedJobs() {
  const [jobs, setJobs] = useState(JOBS);

  console.log(setJobs);

  return (
    <div className="container" id="saved-jobs">
      <div>
        <div className="box box--white" id="box-result">
          <div className="search-meta">
            <h1 className="text-primary bold">Danh sách 3 việc làm đã lưu</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="box box--white" id="box-jobs">
            <div className="job-list search-result">
              {!jobs.length ? (
                <EmptyJob />
              ) : (
                jobs.map((job, i) => (
                  <Job key={i} {...job} lastChild={i === jobs.length - 1} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateSavedJobs;

const Job = ({
  job_title,
  created_on,
  company_name,
  salary,
  deadline,
  province,
  company_logo,
  lastChild
}) => (
  <div className="result-job-hover">
    <div className="row job" style={lastChild ? { borderBottom: 0 } : {}}>
      <div className="hidden-xs col-sm-2 col-avatar">
        <Link
          to="#"
          className="company-logo"
          style={{ margin: "12px auto 0px" }}
        >
          <img src={company_logo} alt="Company avatar" />
        </Link>
      </div>
      <div className="col-sm-8">
        <h4 className="job-title">
          <Link target="_blank" to="#">
            <span className="bold transform-job-title">{job_title}</span>
          </Link>
        </h4>
        <div>Đã lưu: {created_on}</div>
        <div className="row-company name text_ellipsis">
          <Link to="#" target="_blank">
            {company_name}
          </Link>
        </div>
        <div className="row text-dark-gray" id="row-result-info-job">
          <div className="salary col-sm-4 col-xs-6">
            <DollarCircleOutlined
              style={{ fontSize: 16, marginRight: 5, color: "#2557a7" }}
            />
            {salary}
          </div>
          <div className="deadline col-sm-4 col-xs-6">
            <ClockCircleOutlined
              style={{ fontSize: 16, marginRight: 5, color: "#2557a7" }}
            />
            {deadline}
          </div>
          <div className="address col-sm-4 col-xs-12 text_ellipsis">
            <i
              className="fas fa-map-marker mr-5"
              style={{ fontSize: 16, color: "#2557a7" }}
            ></i>
            {province}
          </div>
        </div>
      </div>
      <div className="col-sm-2 job-button-group">
        <button className="view-apply-button blue-button">
          Ứng tuyển ngay
        </button>
        <div className="box-save-job">
          <button className="btn-unsave unsave text-red">
            <i className="fa fa-trash mr-5"></i>
            Bỏ lưu
          </button>
        </div>
      </div>
    </div>
  </div>
);

const EmptyJob = () => (
  <>
    <div className="text-center">
      <img
        src="/assets/svg/Empty.svg"
        alt="empty icon"
        style={{ width: "380px", height: "160px", margin: "50px auto" }}
      />
      <p style={{ paddingBottom: "80px" }}>Bạn chưa lưu tin tuyển dụng nào!</p>
    </div>
  </>
);
