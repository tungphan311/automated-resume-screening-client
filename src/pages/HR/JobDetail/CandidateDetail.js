import React, { useState } from "react";
import "./JobManage.scss";
import {
  EyeOutlined,
  DownloadOutlined,
  ArrowLeftOutlined
} from "@ant-design/icons";
import { Radar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { formatProvince, format_date } from "utils/index";

function HRJobPostCandidateDetail({ detail, provinces, setResume, avgScore }) {
  const options = {
    maintainAspectRatio: true,
    scale: {
      ticks: { beginAtZero: true, max: 1 }
    }
  };

  const [tab, setTab] = useState(0);

  const {
    candidate,
    resume,
    domain_score,
    general_score,
    softskill_score
  } = detail;

  const {
    full_name: name,
    email,
    gender,
    date_of_birth: dob,
    phone,
    province_id
  } = candidate;

  const {
    download_url,
    store_url,
    educations,
    experiences,
    technical_skills,
    soft_skills
  } = resume;

  const { avg_domain_score, avg_general_score, avg_soft_score } = avgScore;

  const data = {
    labels: [
      "Điểm kỹ năng chung",
      "Điểm kỹ năng mềm",
      "Điểm kỹ năng chuyên ngành"
    ],
    datasets: [
      {
        label: "Điểm của ứng viên",
        data: [general_score, softskill_score, domain_score],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 3
      },
      {
        label: "Điểm trung bình toàn bộ ứng viên",
        data: [avg_general_score, avg_soft_score, avg_domain_score],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 3
      }
    ]
  };

  const softSkills = soft_skills.split("|");

  return (
    <div className="row" style={{ marginTop: "-20px" }}>
      <div
        className="col-md-4"
        style={{ paddingTop: 20, borderRight: "1px solid #b9b9b9" }}
      >
        <div>
          <div
            className="row"
            id="candidate-avatar"
            style={{ boxShadow: "grey 0 3px 2px -2px" }}
          >
            <div className="col-md-3" style={{ padding: 0 }}>
              <div className="avatar">
                <img src="/assets/img/noavatar.png" alt="candidate avatar" />
              </div>
            </div>
            <div className="col-md-9 name-section">
              <h3>
                <b>{name}</b>
              </h3>
              <div className="button-group">
                <a
                  href={store_url}
                  target="_blank"
                  className="button-group-btn mr-5"
                >
                  <EyeOutlined className="mr-5" />
                  Xem CV
                </a>
                <a href={download_url} className="button-group-btn">
                  <DownloadOutlined className="mr-5" />
                  Tải CV
                </a>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ boxShadow: "grey 0 3px 2px -2px", paddingBottom: 20 }}
          >
            <div className="col-md-12" style={{ marginTop: 10, fontSize: 14 }}>
              <Info label="Email" value={email} />
              <Info label="Giới tính" value={gender ? "Nam" : "Nữ"} />
              <Info label="Ngày sinh" value={format_date(dob)} />
              <Info label="SĐT" value={phone} />
              <Info
                label="Địa chỉ"
                value={formatProvince(provinces, province_id)}
              />
            </div>
          </div>
          {soft_skills && (
            <div className="row">
              <div
                className="col-md-12"
                style={{ marginTop: 10, fontSize: 14 }}
              >
                <div className="text" style={{ fontWeight: 600 }}>
                  Kỹ năng mềm:
                </div>
                <ul>
                  {softSkills.map((ss) => (
                    <li style={{ marginTop: 6 }}>{ss}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-md-8 candidate-tabs" style={{ paddingLeft: 0 }}>
        <ul
          className="j-nav j-navbar-nav"
          style={{
            boxShadow: "-2px 3px 2px -2px gray",
            paddingLeft: 15,
            display: "flex"
          }}
        >
          <Item label="Thông tin ứng viên" id={0} tab={tab} setTab={setTab} />
          <Item label="Độ tương thích" id={1} tab={tab} setTab={setTab} />

          <li
            style={{ paddingTop: 15, paddingBottom: 15 }}
            className="j-nav-back-btn"
            onClick={() => setResume(0)}
          >
            <ArrowLeftOutlined className="mr-5" />
            Trở về danh sách ứng viên
          </li>
        </ul>
        <div style={{ marginTop: 20, paddingLeft: 15 }}>
          {tab === 0 && (
            <CandidateInfo {...{ educations, experiences, technical_skills }} />
          )}
          {tab === 1 && <Radar data={data} options={options} />}
        </div>
      </div>
    </div>
  );
}

export default HRJobPostCandidateDetail;

const Item = ({ label, id, tab, setTab }) => (
  <li className={`${tab === id ? "active" : ""}`}>
    <Link to="#" onClick={() => setTab(id)}>{` ${label}`}</Link>
  </li>
);

const Info = ({ value, label }) => (
  <div className="row" style={{ marginTop: 10 }}>
    <div className="col-md-4">{label}:</div>
    <div className="col-md-8">{value}</div>
  </div>
);

const CandidateInfo = ({ educations, experiences, technical_skills }) => (
  <div>
    <div className="row">
      <div className="col-md-2">
        <span className="text-primary">
          <b>HỌC VẤN</b>
        </span>
      </div>
      <div className="col-md-10" style={{ whiteSpace: "pre-wrap" }}>
        {educations}
      </div>
    </div>
    <div style={{ marginLeft: "-15px" }}>
      <hr style={{ borderColor: "#adadad" }} />
    </div>
    <div className="row">
      <div className="col-md-2">
        <span className="text-primary">
          <b>KINH NGHIỆM LÀM VIỆC</b>
        </span>
      </div>
      <div className="col-md-10" style={{ whiteSpace: "pre-wrap" }}>
        {experiences}
      </div>
    </div>
    <div style={{ marginLeft: "-15px" }}>
      <hr style={{ borderColor: "#adadad" }} />
    </div>
    <div className="row">
      <div className="col-md-2">
        <span className="text-primary">
          <b>KỸ NĂNG CÔNG NGHỆ</b>
        </span>
      </div>
      <div className="col-md-10" style={{ whiteSpace: "pre-wrap" }}>
        {technical_skills.replaceAll("|", ", ")}
      </div>
    </div>
  </div>
);
