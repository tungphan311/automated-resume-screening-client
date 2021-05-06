import React, { useEffect, useState } from "react";
import MatchSkillCard from "components/MatchSkill/MatchSkillCard/MatchSkillCard";
import "./CareerRole.scss";

const CareerEarn = () => {
  return (
    <div className="career-earn">
      <p className="career-earn__salary">
        The&nbsp;<b>most common annual salary</b>&nbsp;in VIC for a Frontend
        Developer is between&nbsp;<b>$100k</b>&nbsp;and&nbsp;<b>$120k</b>
      </p>

      <p className="career-earn__total">
        <b>150k jobs</b> Frontend Developer in xxxx
      </p>
    </div>
  );
};

export default CareerEarn;
