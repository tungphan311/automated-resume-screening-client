import React from "react";
import { Link } from "react-router-dom";

import "../MatchSkill.scss";
import { getDiffTime } from "utils/index";
import { formatProvince } from "utils/index";

const MatchSkillSub = () => {
  return (
    <div className="match-skill__sub row">
      <div className="match-skill__sub__title">See how you match</div>
      <div className="match-skill__sub__number">
        <span>2</span>
      </div>
    </div>
  );
};

export default MatchSkillSub;
