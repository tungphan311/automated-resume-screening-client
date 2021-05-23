import React from "react";
import { Link } from "react-router-dom";
import qs from "query-string";

import "../MatchSkill.scss";

const MatchSkillCard = ({ id, name, logo, content, max, min }) => {
  const directToDomain = () => {
    let filter = {
      id: id,
      role: name.toLowerCase().replaceAll(" ", "-")
    };
    const query = qs.stringify(filter, { skipNull: true });
    console.log(query);

    window.location.replace(`/career-advice/${query}`);
  };

  return (
    <div className="match-skill__card" onClick={directToDomain}>
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
