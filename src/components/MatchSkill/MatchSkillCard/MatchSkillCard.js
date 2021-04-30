import React from "react";
import { Link } from "react-router-dom";

import "../MatchSkill.scss";
import { getDiffTime } from "utils/index";
import { formatProvince } from "utils/index";

const MatchSkillCard = () => {
  return (
    <div className="match-skill__card">
      <div className="match-skill__card__poster">
        <img src="https://cdn.seeklearning.com.au/media/images/career-guide/module/javascript-developer-module.jpg" />
      </div>

      <div className="match-skill__card__content">
      <h3 className="match-skill__card__content__title">Full stack</h3>
        <div className="match-skill__card__content__item ">
          <span className="match-skill__card__content__item__left">Most common salary</span>
          <b className="match-skill__card__content__item__right">$110k</b>
        </div>

        <div className="match-skill__card__content__item ">
          <span className="match-skill__card__content__item__left">Most common salary</span>
          <b>$110k</b>
        </div>
      </div>
    </div>
  );
};

export default MatchSkillCard;
