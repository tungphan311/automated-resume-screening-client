import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AppliedJobs.scss";
import { DollarCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

function CandidateAppliedJobs() {
  const [jobs, setJobs] = useState([{}]);

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
                      Danh sách 1 việc làm đã ứng tuyển
                    </h1>
                  </div>
                </div>
              </div>
              <div className="box box--white" id="box-jobs">
                <div className="job-list search-result">
                  {jobs.map(() => (
                    <Job />
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

const Job = () => (
  <div className="result-job-hover">
    <div className="row job">
      <div className="hidden-xs col-sm-2 col-avatar">
        <Link
          to="#"
          className="company-logo"
          style={{ margin: "12px auto 0px" }}
        >
          <img
            src="https://static.topcv.vn/company_logos/cong-ty-co-phan-topcv-viet-nam-5f33477c4e78b.jpg"
            alt="Company avatar"
          />
        </Link>
      </div>
      <div className="col-sm-8">
        <h4 className="job-title">
          <Link target="_blank" to="#">
            <span className="bold transform-job-title">
              Cộng tác viên Content [Freelancer]
            </span>
          </Link>
        </h4>
        <div>Ứng tuyển: 02:59 31/12/2020</div>
        <div className="row-company name text_ellipsis">
          <Link to="#" target="_blank">
            Công ty Cổ phần TOPCV Việt Nam
          </Link>
        </div>
        <div className="row text-dark-gray" id="row-result-info-job">
          <div className="salary col-sm-4 col-xs-6">
            <DollarCircleOutlined
              style={{ fontSize: 16, marginRight: 5, color: "#2557a7" }}
            />
            14-20 triệu
          </div>
          <div className="deadline col-sm-4 col-xs-6">
            <ClockCircleOutlined
              style={{ fontSize: 16, marginRight: 5, color: "#2557a7" }}
            />
            13/01/2021
          </div>
          <div className="address col-sm-4 col-xs-12 text_ellipsis">
            <i
              className="fas fa-map-marker mr-5"
              style={{ fontSize: 16, color: "#2557a7" }}
            ></i>
            Hà Nội
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
