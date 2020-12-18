import JobPostForm from "components/Forms/JobPost/JobPost";
import JobMenu from "components/JobMenu/JobMenu";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./PostJob.scss";
import { Spin } from "antd";
import { hrPostJobAction } from "state/actions/hrJobAction";

function HRPostJob() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setLoading(true);
    dispatch(hrPostJobAction()).catch(() => setLoading(false));
  };
  return (
    <>
      <JobMenu />
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
