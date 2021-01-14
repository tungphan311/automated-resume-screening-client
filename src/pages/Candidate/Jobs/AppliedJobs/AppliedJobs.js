import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AppliedJobs.scss";
import { DollarCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

const JOBS = [
  {
    id: 1,
    job_title: "Lập Trình Viên Front End",
    created_on: "02:59 31/12/2020",
    company_name: "CÔNG TY TNHH VATNOW",
    salary: "14-20 triệu",
    deadline: "20/01/2021",
    province: "Thành phố Hồ Chí Minh",
    company_logo:
      "https://static.topcv.vn/company_logos/cong-ty-tnhh-vatnow-5fe57ab39a165.jpg"
  },
  {
    id: 2,
    job_title: "Front End Developer",
    created_on: "20:19 08/01/2021",
    company_name: "Công ty TNHH Truyền Thông và Giải pháp Trực Tuyến LeadsGen",
    salary: "6-18 triệu",
    deadline: "30/01/2021",
    province: "Thành phố Hồ Chí Minh",
    company_logo:
      "https://static.topcv.vn/company_logos/cong-ty-tnhh-truyen-thong-va-giai-phap-truc-tiep-leadsgen-5b6412bac4ac5_rs.jpg"
  },
  {
    id: 3,
    job_title: "Lập Trình Viên Front End ( Nghỉ T7 Và Chủ Nhật) - Lương Net",
    created_on: "20:39 08/01/2021",
    company_name: "SonatGame Studio",
    salary: "Thoả thuận",
    deadline: "01/02/2021",
    province: "Thành phố Hồ Chí Minh",
    company_logo:
      "https://static.topcv.vn/company_logos/sonatgame-studio-5ce254d301c98.jpg"
  }
];

function CandidateAppliedJobs() {
  const [jobs, setJobs] = useState(JOBS);

  console.log(setJobs);

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <div className="row">
        <div className="col-sm-8">
          {!jobs.length ? (
            <Empty />
          ) : (
            <div>
              <div>
                <div className="box box--white" id="box-result">
                  <div className="search-meta">
                    <h1
                      className="text-primary bold"
                      style={{ fontSize: 21, marginBottom: 0 }}
                    >
                      Danh sách 3 việc làm đã ứng tuyển
                    </h1>
                  </div>
                </div>
              </div>
              <div className="box box--white" id="box-jobs">
                <div className="job-list search-result">
                  {jobs.map((job, index) => (
                    <Job
                      key={index}
                      {...job}
                      lastChild={index === jobs.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-sm-4">
          <div className="box box--white text-center-sm">
            <div className="row">
              <div
                className="text-center"
                style={{ marginBottom: 10, width: "100%" }}
              >
                <div className="text-primary">
                  <strong style={{ fontSize: 20 }}>
                    CV của bạn đã đủ tốt?
                  </strong>
                  <p
                    className="text-gray"
                    style={{ fontSize: 13, marginBottom: 10 }}
                  >
                    Bao nhiêu NTD đang quan tâm tới Hồ sơ của bạn?
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cv-count text-center">
                  <div className="cv-count-number">46</div>
                  <div>lượt</div>
                </div>
              </div>
              <div className="col-md-8" style={{ paddingTop: 5 }}>
                <p style={{ marginBottom: 10 }}>
                  Mỗi lượt Nhà tuyển dụng xem CV mang đến một cơ hội để bạn gần
                  hơn với công việc phù hợp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateAppliedJobs;

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
        <div>Ứng tuyển: {created_on}</div>
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
      <div className="col-sm-2 job-button-group"></div>
    </div>
  </div>
);

const Empty = () => (
  <div className="box box-no-padding box--white">
    <div className="row">
      <div className="col-md-8">
        <div className="ap-intro-content-wraper">
          <h3 className="box-title" style={{ color: "#d45541" }}>
            Bạn chưa ứng tuyển công việc nào
          </h3>
          <div className="box-content text-dark-gray">
            <p>Bạn đang tìm kiếm một công việc phù hợp với khả năng?</p>
            <p>
              Chúng tôi cung cấp cho bạn rất nhiều việc làm chất lượng từ hơn
              8000+ Nhà tuyển dụng uy tín.
            </p>
          </div>
          <div className="box-footer">
            <Link to="/find-jobs" className="btn btn-primary">
              Tìm việc ngay
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="ap-intro-logo-wraper">
          <img
            src="/assets/img/logo-ap.png"
            style={{ width: "100%", maxWidth: "220px" }}
            alt="find job"
          ></img>
        </div>
      </div>
    </div>
  </div>
);
