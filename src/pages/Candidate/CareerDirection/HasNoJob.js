import React from "react";
import { Link } from "react-router-dom";
import "./CareerDirection.scss";

const HasNoJob = ({ name, location }) => {
  return (
    <div className="no-job">
      <div className="no-job__title">
        There is no job opportunities for <b className="uppercase">{name}</b> in{" "}
        {location || "your preferred location"}
      </div>

      <div className="no-job__title">
        Try again another time or{" "}
        <Link to="/career-advice" className="no-job__title__link">
          <u>explore</u>
        </Link>{" "}
        other job opportunity categories
      </div>

      <div className="no-job__title">
        Or explore opportunities on <b>FASTJOB</b> to see where you can help
      </div>
    </div>
  );
};

export default HasNoJob;
