import React from "react";
import { Link } from "react-router-dom";

import "./MatchSkill.scss";
import { getDiffTime } from "utils/index";
import { formatProvince } from "utils/index";
import MatchSkillCard from "./MatchSkillCard/MatchSkillCard";
import MatchSkillChips from "./MatchSkillChips/MatchSkillChips";
import MatchSkillSub from "./MatchSkillSub/MatchSkillSub";

const MatchSkill = () => {
  return (
    <div className="match-skill">
      <div className="match-skill__left">
        <MatchSkillCard />
      </div>

      <div className="match-skill__right">
        <div className="match-skill__right__chip">
          <p className="match-skill__right__chip__title">Your skills match</p>
          <MatchSkillChips />
        </div>

        <div className="match-skill__right__see">
          <MatchSkillSub />
        </div>
      </div>
    </div>
  );
};

export default MatchSkill;
