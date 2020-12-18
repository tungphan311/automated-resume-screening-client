import JobPostForm from "components/Forms/JobPost/JobPost";
import JobMenu from "components/JobMenu/JobMenu";
import React from "react";
import { useDispatch } from "react-redux";
import { HR_POST_JOB } from "state/reducers/hrJobReducer";
import "./PostJob.scss";

function HRPostJob() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({ type: HR_POST_JOB });
  };
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
