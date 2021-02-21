import React, { useEffect, useState } from "react";
import JobDetailMenu from "components/JobDetailMenu/JobDetailMenu";
import "./JobManage.scss";
import HRJobDetail from "./JobDetail";
import HRJobPostCandidates from "pages/HR/JobDetail/Candidates";
import { useSelector } from "react-redux";
import { hrGetJobDetail } from "services/hrJobServices";
import { toastErr } from "utils/index";

function HRJobManage({ match }) {
  const {
    params: { id },
    url
  } = match;

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth.recruiter);

  const isCandidates = url.startsWith(`/recruiter/jobs/${id}/candidates`);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await hrGetJobDetail(id, token)
        .then((res) => {
          const { data } = res.data;

          setPost(data);
        })
        .catch((err) => {
          toastErr(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (!isCandidates) {
      fetchData();
    }
  }, [id, token, isCandidates]);

  return (
    <>
      <JobDetailMenu
        isCandidates={isCandidates}
        id={id}
        title={post.job_title}
      />
      {!isCandidates ? (
        <HRJobDetail id={id} post={post} load={loading} />
      ) : (
        <HRJobPostCandidates jp_id={id} />
      )}
    </>
  );
}

export default HRJobManage;
