import React from "react";
import { Link } from "react-router-dom";
import "./JobItem.scss";
import { HeartOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import JobDetail from "components/JobItem/JobDetail";
import { format_date } from "utils/index";

function JobItem({
  jobId,
  curSelect,
  onChangeSelect,
  top,
  jobTitle,
  company,
  salary,
  jobDescription,
  lastEdit,
  contractType
}) {
  return (
    <>
      <div
        className={`jobsearch-SerpJobCard unifiedRow row result clickcard ${
          jobId === curSelect ? "vjs-highlight" : ""
        }`}
        onClick={() => onChangeSelect(jobId)}
      >
        <h2 className="job-title">
          <Link to="#" className="jobtitle turnstileLink">
            {jobTitle}
          </Link>
        </h2>
        <div className="job-detail">
          <div>
            <span className="company-name">
              <Link to="#">{company}</Link>
            </span>
            <span className="remote-bullet">•</span>
            <span className="contact-type">{contractType}</span>
            <span className="location accessible-contrast-color-location">
              Thành phố Hồ Chí Minh
            </span>
          </div>
        </div>
        <div className="salarySnippet holisticSalary">
          <span className="salary no-wrap">
            <span>Lương: </span>
            <span className="salaryText">{salary}</span>
          </span>
        </div>
        <div
          className="summary show-less"
          dangerouslySetInnerHTML={{ __html: jobDescription }}
        ></div>
        <div className="jobsearch-SerpJobCard-footer">
          <div className="jobsearch-SerpJobCard-footerActions">
            <div className="result-link-bar-container">
              <div className="result-link-bar">
                <span className="date">{format_date(lastEdit)}</span>
                <div className="tt_set">
                  <div className="job-reaction">
                    <Tooltip placement="right" title="Nhấn để lưu tin này">
                      <button className="job-reaction-love">
                        <HeartOutlined style={{ fontSize: "24px" }} />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {jobId === curSelect && (
        <JobDetail id={jobId} top={top} onChangeSelect={onChangeSelect} />
      )}
    </>
  );
}

export default JobItem;
