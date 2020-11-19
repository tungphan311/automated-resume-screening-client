import JobMenu from "components/JobMenu/JobMenu";
import React from "react";
import "./PostJob.scss";
import JobPostForm from "components/Forms/JobPost/JobPost";

function HRPostJob() {
  return (
    <>
      <JobMenu />
      <div className="container">
        <div className="panel post-job-form panel--light">
          <div className="panel-body">
            <JobPostForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default HRPostJob;
