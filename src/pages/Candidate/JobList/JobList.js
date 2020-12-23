import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import JobItem from "components/JobItem/JobItem";
import React, { useState } from "react";
import "./JobList.scss";

function CandidateJobList() {
  const [curSelect, setCurSelect] = useState(null);

  const onChangeSelect = (jobId) => setCurSelect(jobId);
  return (
    <>
      <div id="search-jobs-wrapper">
        <div
          id="search-jobs"
          className="search-jobs-container search-jobs-widget"
        >
          <div className="container">
            <JobSearchAdvance />
          </div>
        </div>
        <div>
          <div className="container">
            <table id="searchContent" className="serpContainerMinHeight">
              <tbody>
                <tr role="main" style={{ verticalAlign: "top" }}>
                  <td id="resultCol">
                    <div style={{ paddingTop: "6px" }}></div>
                    <div className="resultsTop">
                      <div className="secondRow">
                        <div className="searchCountContainer">
                          <div id="searchCountPages">Page 1 of 101 jobs</div>
                        </div>
                      </div>
                    </div>
                    <JobItem
                      jobId={1}
                      curSelect={curSelect}
                      onChangeSelect={onChangeSelect}
                    />
                    <JobItem
                      jobId={2}
                      curSelect={curSelect}
                      onChangeSelect={onChangeSelect}
                    />
                  </td>
                  <td role="region" id="auxColl"></td>
                  <td id="applyCol"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateJobList;
