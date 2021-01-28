import JobMenu from "components/JobMenu/JobMenu";
import { JOBS_MENU } from "constants/index";
import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import JobPostForm from "components/Forms/JobPost/JobPost";
import { hrUpdateJobAction } from "state/actions/hrJobAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toastErr } from "utils/index";
import { hrGetJobDetail } from "services/hrJobServices";
import LoadingContent from "components/Loading/LoadingContent";

function HRUpdateJob() {
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState({});
  const { id } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth.recruiter);

  const handleSubmit = () => {
    setLoading(true);
    dispatch(hrUpdateJobAction({ id })).catch(() => setLoading(false));
  };

  useEffect(() => {
    const fetchJobPost = async () => {
      await hrGetJobDetail(id, token)
        .then((res) => {
          setJob(res.data.data);
        })
        .catch((err) => toastErr(err));
    };

    if (token) {
      fetchJobPost();
    }
  }, []);

  return (
    <>
      <JobMenu menu={JOBS_MENU} />
      <div className="container">
        <div className="panel post-job-form panel--light">
          <LoadingContent loading={loading} />
          <Spin
            tip="Đang tải lên ..."
            size="large"
            spinning={loading}
            delay={200}
          >
            <div className="panel-body">
              <JobPostForm onSubmit={handleSubmit} id={id} job={job} />
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
}

export default HRUpdateJob;
