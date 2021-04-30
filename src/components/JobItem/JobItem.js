import React from "react";
import "./JobItem.scss";
import { FullscreenOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

import JobDetail from "components/JobItem/JobDetail";
import { getDiffTime, formatProvince } from "utils/index";
import history from "state/history";

const JobItem = ({
  jobId,
  curSelect,
  onChangeSelect,
  top,
  bottom,
  jobTitle,
  company,
  salary,
  jobDescription,
  postedIn,
  contractType,
  provinces,
  provinceId
}) => {
  const getProvince = () => {
    return (
      provinceId &&
      provinceId
        .split(",")
        .map((p) => formatProvince(provinces, p))
        .join(", ")
    );
  };

  return (
    <>
      <div
        className={`jobsearch-SerpJobCard unifiedRow row result clickcard ${
          jobId === curSelect ? "vjs-highlight" : ""
        }`}
        onClick={() => onChangeSelect(jobId)}
      >
        <Tooltip placement="bottom" title="Show detail on page">
          <FullscreenOutlined
            className="job-expand"
            onClick={() => {
              history.push(`/job-detail/${jobId}`);
            }}
          />
        </Tooltip>
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
              {getProvince()}
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
                <span className="date">
                  {" "}
                  {getDiffTime(postedIn) > 1
                    ? getDiffTime(postedIn).toString() + " days"
                    : getDiffTime(postedIn).toString() + " day"}{" "}
                  ago
                </span>
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
};

export default JobItem;
