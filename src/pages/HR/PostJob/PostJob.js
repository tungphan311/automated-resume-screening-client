import JobMenu from "components/JobMenu/JobMenu";
import React from "react";
import "./PostJob.scss";

function HRPostJob() {
  return (
    <>
      <JobMenu />
      <div className="container">
        <div className="panel post-job-form panel--light">
          <div className="panel-body">
            <form></form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRPostJob;
