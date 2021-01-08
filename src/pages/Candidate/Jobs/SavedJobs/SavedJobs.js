import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SavedJobs.scss";
import { DollarCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

function CandidateSavedJobs() {
  const [jobs, setJobs] = useState([{}]);

  console.log(setJobs);

  return (
    <div className="container" id="saved-jobs">
      <div>
        <div className="box box--white" id="box-result">
          <div className="search-meta">
            <h1 className="text-primary bold">Danh sách 1 việc làm đã lưu</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="box box--white" id="box-jobs">
            <div className="job-list search-result">
              {!jobs.length ? <EmptyJob /> : jobs.map(() => <Job />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateSavedJobs;

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
        <div>Đã lưu 02:59 31/12/2020</div>
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
