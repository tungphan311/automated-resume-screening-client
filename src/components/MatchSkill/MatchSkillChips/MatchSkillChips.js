import React from "react";
import { Link } from "react-router-dom";

import "../MatchSkill.scss";
import { getDiffTime } from "utils/index";
import { formatProvince } from "utils/index";

const MatchSkillChip = ({ chipList }) => {
  return (
    <div className="match-skill__chips">
      {chipList.length &&
        chipList.map((item, index) => {
          return (
            <div className="match-skill__chips__item" key={index}>
              {item}
            </div>
          );
        })}
    </div>
  );
};

export default MatchSkillChip;
