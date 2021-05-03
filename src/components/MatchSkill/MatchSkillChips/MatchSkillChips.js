import React from "react";
import { Link } from "react-router-dom";

import "../MatchSkill.scss";
import { getDiffTime } from "utils/index";
import { formatProvince } from "utils/index";

const MatchSkillChip = () => {
  const a = [
    "security mechanisms",
    "engineering",
    "source code",
    "python",
    "codeigniter",
    "c++",
    "rails",
    "source codes",
    "framework",
    "codeigniter",
    "c++",
    "rails",
    "source codes",
    "framework"
  ];

  return (
    <div className="match-skill__chips">
      {a.map((item, key) => {
        return <div className="match-skill__chips__item" key={item}>{item}</div>;
      })}
    </div>
  );
};

export default MatchSkillChip;
