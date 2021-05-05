import React, { useEffect, useState } from "react";
import MatchSkillCard from "components/MatchSkill/MatchSkillCard/MatchSkillCard";
import "./CareerRole.scss";

const CareerRole = () => {
  return (
    <div className="career-role">
      <h2>career role</h2>
      <MatchSkillCard />
    </div>
  );
};

export default CareerRole;
