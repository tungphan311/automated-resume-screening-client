import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CareerRole.scss";

const HasNoPost = ({ name }) => {
  return (
    <div className="no-job">
      <div className="no-job__title">
        Opps, we don't see any job posts of <b className="uppercase">{name}</b>{" "}
        at this time
      </div>

      <div className="no-job__title">
        Try again another time or{" "}
        <Link to="/career-advice" className="no-job__title__link">
          <u>explore</u>
        </Link>{" "}
        other job categories
      </div>

      <div className="no-job__title">
        Or explore opportunities on <b>FASTJOB</b> to see where you can help
      </div>
    </div>
  );
};

export default HasNoPost;
