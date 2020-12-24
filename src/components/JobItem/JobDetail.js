import React from "react";
import { useWindowSize } from "utils/window";
import "./JobDetail.scss";
import { HeartOutlined } from "@ant-design/icons";
import { Close } from "constants/svg";
import ContentLoader from "react-content-loader";

function JobDetail({ top, onChangeSelect, loading = true }) {
  const size = useWindowSize();
  const padding = (size.width - 1140) / 2;

  return (
    <div
      id="vjs-container"
      tabIndex="-1"
      style={{
        left: `${padding + 441}px`,
        top: `${top > 0 ? top : 0}px`,
        bottom: "-1px"
      }}
    >
      {!loading ? (
        <>
          <Header onChangeSelect={onChangeSelect} />
          <div id="vjs-content">
            <div id="vjs-tab-top">
              <div className="job-detail-section">
                <div
                  id="jobDetailsSection"
                  className="job-detail-section-container"
                >
                  <div className="job-detail-section-title">
                    <div className="job-detail-section-title--main text-bold">
                      Thông tin tuyển dụng
                    </div>
                  </div>
                  <div className="job-detail-section-item">
                    <div className="job-detail-section-itemKey text-bold">
                      Salary
                    </div>
                    <span>$48,500 - $96,000 a year</span>
                  </div>
                </div>
                <div id="jobDescriptionTitle">Thông tin chi tiết</div>
                <div id="jobDescriptionText">
                  <p>
                    <b>Mô tả công việc: </b>
                  </p>
                  <ul>
                    <li>
                      Design and develop front end solutions for client-facing
                      applications
                    </li>
                    <li>
                      Support application customization, developing
                      best-practices from both a process and technology
                      standpoint
                    </li>
                  </ul>
                  <p></p>
                  <br />

                  <p>
                    <b>Yêu cầu ứng viên: </b>
                  </p>
                  <ul>
                    <li>
                      5+ years of experience in software engineering with a
                      focus on front-end development
                    </li>
                    <li>
                      {" "}
                      Expert level experience with CSS, HTML, and JavaScript
                    </li>
                    <li>
                      Experience with view layout and rendering technologies
                      (e.g., responsiveness, progressive enhancement,
                      browser/device support)
                    </li>
                    <li>
                      {" "}
                      Experience in using JQuery and JavaScript libraries
                    </li>
                    <li> Web development experience in ASP.NET MVC/ C#</li>
                    <li>
                      Bachelor’s Degree in Computer Science, Interactive Design,
                      or Graphic/Web Design related field
                    </li>
                  </ul>
                  <p></p>
                  <br />
                  <p>
                    <b>Quyền lợi ứng viên: </b>
                  </p>
                  <ul>
                    <li> $125,000-$135,000</li>
                    <li>
                      Comprehensive benefit package; Medical, Dental, Vision,
                      401k, and Paid Time Off
                    </li>
                  </ul>
                  <p></p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="vjs-content-padding-bottom"></div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default JobDetail;

const Header = ({ onChangeSelect }) => (
  <div id="vjs-header" className="vjs-header-no-shadow">
    <div id="vjs-image-wrapper">
      <img
        src="https://d2q79iu7y748jz.cloudfront.net/s/_headerimage/4f7e526ffce014a5ce9c88a348fb9f33"
        alt="company background"
        className="vjs-header-background"
      />
      <img
        src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/d09f1a897f4f8d8b56478c6af2e7ddd3"
        alt="company logo"
        className="vjs-header-logo"
      />
    </div>
    <div id="vjs-header-jobinfo">
      <div id="vjs-jobinfo">
        <div id="vjs-jobtitle">
          Front End Developer (JavaScript, HTML, CSS) - Good English Skill
        </div>
        <div>
          <span id="vjs-cn">ICONIC Co,.Ltd.</span>
          <span id="vjs-loc">
            <span> - </span>Thành phố Hồ Chí Minh
          </span>
        </div>
        <div>Hạn nộp hồ sơ: </div>
      </div>
    </div>
    <div id="vjs-x">
      <button
        className="CloseButton vjs-x-button-close"
        onClick={() => onChangeSelect(null)}
      >
        {Close}
      </button>
    </div>
    <div id="apply-button-container">
      <div className="job-footer-button-row">
        <button className="view-apply-button blue-button">
          Ứng tuyển ngay
        </button>
        <span id="state-picker-container" className="dd-wrapper">
          <button className="state-picker-button">
            <span>
              <HeartOutlined style={{ fontSize: "18px", fontWeight: "700" }} />
            </span>
          </button>
        </span>
      </div>
    </div>
  </div>
);

const Loading = (props) => (
  <div style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
    <ContentLoader
      speed={2}
      width={684}
      height={400}
      viewBox="0 0 684 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="16" y="30" rx="0" ry="0" width="350" height="20" />
      <rect x="16" y="60" rx="0" ry="0" width="177" height="14" />
      <rect x="206" y="60" rx="0" ry="0" width="154" height="12" />
      <rect x="16" y="98" rx="0" ry="0" width="652" height="14" />
      <rect x="16" y="120" rx="0" ry="0" width="652" height="14" />
      <rect x="16" y="143" rx="0" ry="0" width="241" height="14" />
      <rect x="16" y="178" rx="0" ry="0" width="652" height="14" />
      <rect x="16" y="201" rx="0" ry="0" width="652" height="14" />
      <rect x="16" y="225" rx="0" ry="0" width="241" height="14" />
      <rect x="16" y="258" rx="0" ry="0" width="652" height="14" />
      <rect x="16" y="284" rx="0" ry="0" width="652" height="14" />
      <rect x="16" y="310" rx="0" ry="0" width="241" height="14" />
    </ContentLoader>
  </div>
);
