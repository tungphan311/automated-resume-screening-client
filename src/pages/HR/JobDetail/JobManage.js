import React from "react";
import JobDetailMenu from "components/JobDetailMenu/JobDetailMenu";
import "./JobManage.scss";
import HRJobDetail from "./JobDetail";

function HRJobManage({ match, location }) {
  console.log(match, location);

  return (
    <>
      <JobDetailMenu />
      <HRJobDetail />
    </>
  );
}

export default HRJobManage;
