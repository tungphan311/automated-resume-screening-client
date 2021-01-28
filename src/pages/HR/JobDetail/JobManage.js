import React from "react";
import JobDetailMenu from "components/JobDetailMenu/JobDetailMenu";
import "./JobManage.scss";
import HRJobDetail from "./JobDetail";
import HRJobPostCandidates from "pages/HR/JobDetail/Candidates";

function HRJobManage({ match }) {
  const {
    params: { id },
    url
  } = match;

  const isCandidates = url.startsWith(`/recruiter/jobs/${id}/candidates`);

  return (
    <>
      <JobDetailMenu isCandidates={isCandidates} id={id} />
      {!isCandidates ? (
        <HRJobDetail id={id} />
      ) : (
        <HRJobPostCandidates jp_id={id} />
      )}
    </>
  );
}

export default HRJobManage;
