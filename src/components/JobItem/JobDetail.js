import React from "react";
import { useWindowSize } from "utils/window";
import "./JobDetail.scss";

function JobDetail({ top }) {
  const size = useWindowSize();
  const padding = (size.width - 1140) / 2;

  return (
    <div
      id="vjs-container"
      tabIndex="-1"
      style={{ left: `${padding + 441}px`, top: `${top}px`, bottom: "-1px" }}
    >
      <div className="jobsearch-ViewJobLayout jobsearch-ViewJobLayout--embedded"></div>
    </div>
  );
}

export default JobDetail;
