import React from "react";
import { Link } from "react-router-dom";

import "../MatchSkill.scss";

const MatchSkillCard = ({ name, logo, content, max, min }) => {
  return (
    <div className="match-skill__card">
      <div className="match-skill__card__poster">
        <img
          src={
            logo ||
            "https://cdn.seeklearning.com.au/media/images/career-guide/module/javascript-developer-module.jpg"
          }
          alt="poster"
        />
      </div>

      <div className="match-skill__card__content">
        <h3 className="match-skill__card__content__title">{name}</h3>
        <div className="match-skill__card__content__item ">
          <span className="match-skill__card__content__item__left">
            Minimum common salary
          </span>
          <b className="match-skill__card__content__item__right">${min}</b>
        </div>

        <div className="match-skill__card__content__item ">
          <span className="match-skill__card__content__item__left">
            Maximum common salary
          </span>
          <b>${max}</b>
        </div>
      </div>
    </div>
  );
};

export default MatchSkillCard;
