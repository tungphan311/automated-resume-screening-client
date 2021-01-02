import JobPostForm from "components/Forms/JobPost/JobPost";
import JobMenu from "components/JobMenu/JobMenu";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PostJob.scss";
import { Spin } from "antd";
import { hrPostJobAction } from "state/actions/hrJobAction";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";
import { JOBS_MENU } from "constants/index";

function HRPostJob() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth.recruiter);

  const {
    identity: { company_id: companyId }
  } = jwt_decode(token);

  if (companyId === null) {
    return <Redirect to="/recruiter/company/update" />;
  }

  const handleSubmit = () => {
    setLoading(true);
    dispatch(hrPostJobAction()).catch(() => setLoading(false));
  };
  return (
    <>
      <JobMenu menu={JOBS_MENU} />
      <div className="container">
        <div className="panel post-job-form panel--light">
          <Spin
            tip="Đang tải lên ..."
            size="large"
            spinning={loading}
            delay={200}
          >
            <div className="panel-body">
              <JobPostForm onSubmit={handleSubmit} />
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
}

export default HRPostJob;
