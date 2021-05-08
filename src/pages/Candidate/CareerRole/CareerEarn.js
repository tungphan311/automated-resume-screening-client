import React, { useEffect, useState } from "react";
import MatchSkillCard from "components/MatchSkill/MatchSkillCard/MatchSkillCard";
import "./CareerRole.scss";
import { AreaChartOutlined } from "@ant-design/icons";

const CareerEarn = ({ province, role, min, max, total, name }) => {
  return (
    <div className="career-earn">
      <p className="career-earn__salary">
        The&nbsp;<b>most common annual salary</b>&nbsp;in {name || "all"} for a {role} is
        between&nbsp;<b>${min}</b>&nbsp;and&nbsp;<b>${max}</b>
      </p>

      <div className="career-earn__total row">
        <AreaChartOutlined className="career-earn__total__icon"/>
        <span>
          <b>{total} jobs</b> {role} in {province || "total"}
        </span>
      </div>
    </div>
  );
};

export default CareerEarn;
