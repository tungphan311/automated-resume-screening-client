import React, { useState } from "react";
import "./JobDetail";
import "../../pages/Candidate/JobDetail/JobDetail";

import { QuestionOutlined } from "@ant-design/icons";

const MissingSkillItem = ({ title, skills }) => {
  const [showMore, setShowMore] = useState();
  const [toggle, setToggle] = useState(false);

  const toggleItem = () => {
    setToggle(!toggle);
  };

  const showMoreItem = () => {
    toggleItem();
    setShowMore(skills);
  };

  const showLessItem = () => {
    toggleItem();
  };

  return (
    <div className="missing-skill">
      <div
        className="row"
        style={{
          alignItems: "center",
          marginLeft: "0",
          marginRight: "0",
          border: "none"
        }}
      >
        <img
          src="/assets/img/miss.PNG"
          style={{ width: "30px", height: "34px" }}
          alt="icon-miss"
        />
        <span style={{ fontSize: ".875rem", fontWeight: "600" }}>
          {title} ({skills?.length})
        </span>
      </div>

      <div className="missing-skill__items">
        {toggle &&
          showMore?.map((item, index) => {
            return <MissItem key={index} name={item} />;
          })}
      </div>

      <div className="missing-skill__show" style={{ marginTop: !toggle ? "0" : "8px"}}>
        {!toggle ? (
          <span className="missing-skill__show__text" onClick={showMoreItem}>
            +show more
          </span>
        ) : (
          <span
            className="missing-skill__show__text"
            onClick={showLessItem}
          >
            -show less
          </span>
        )}
      </div>
    </div>
  );
};

export default MissingSkillItem;

const MissItem = ({ name }) => (
  <div className="missing-skill__items__item">
    <QuestionOutlined
      style={{ color: "#844b17", fontSize: "18px", marginRight: "10px" }}
    />
    <span className="missing-skill__items__item__text">{name}</span>
  </div>
);
