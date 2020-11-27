import JobPostForm from "components/Forms/JobPost/JobPost";
import JobMenu from "components/JobMenu/JobMenu";
import React from "react";
import "./PostJob.scss";

function HRPostJob() {
  const handleSubmit = () => {};
  return (
    <>
      <JobMenu />
      <div className="container">
        <div className="panel post-job-form panel--light">
          <div className="panel-body">
            <JobPostForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HRPostJob;
