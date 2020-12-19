import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import React from "react";
import "./JobList.scss";

function CandidateJobList() {
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
      </div>
    </>
  );
}

export default CandidateJobList;
