import React from "react";
import "./JobItem.scss";
import JobDetail from "components/JobItem/JobDetail";
import { format_date } from "utils/index";

function JobItem({
  jobId,
  curSelect,
  onChangeSelect,
  top,
  bottom,
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
          <p className="jobtitle turnstileLink">{jobTitle}</p>
        </h2>
        <div className="job-detail">
          <div>
            <span className="company-name">
              <p>{company}</p>
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
                {/* <div className="tt_set">
                  <div className="job-reaction">
                    <Tooltip placement="right" title="Nhấn để lưu tin này">
                      <button className="job-reaction-love">
                        <HeartOutlined style={{ fontSize: "24px" }} />
                      </button>
                    </Tooltip>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {jobId === curSelect && (
        <JobDetail
          id={jobId}
          top={top}
          onChangeSelect={onChangeSelect}
          bottom={bottom}
        />
      )}
    </>
  );
}

export default JobItem;
