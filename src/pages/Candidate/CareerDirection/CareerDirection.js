import ConfirmModal from "components/Modals/ConfirmModal/ConfirmModal";
import React, { useEffect, useState } from "react";
import MatchSkillCard from "components/MatchSkill/MatchSkillCard/MatchSkillCard";
import "./CareerDirection.scss";

const CareerDirection = () => {
  return (
    <div className="career-direction">
      <h2>career direction</h2>
      <MatchSkillCard />
    </div>
  );
};

export default CareerDirection;
