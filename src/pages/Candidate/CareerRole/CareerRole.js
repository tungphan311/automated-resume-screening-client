import React, { useEffect, useState } from "react";
import MatchSkillCard from "components/MatchSkill/MatchSkillCard/MatchSkillCard";
import "./CareerRole.scss";
import { Link } from "react-router-dom";
import {
  StarTwoTone,
  StarFilled,
  CaretUpOutlined,
  StockOutlined,
  LeftOutlined
} from "@ant-design/icons";
import { numberToArray } from "utils/index";
import { Tabs, Tab } from "react-bootstrap";
import CareerEarn from "./CareerEarn";

const CareerRole = () => {
  return (
    <div className="career-role">
      <div className="career-role__row"></div>
      <div className="career-role__header">
        <div className="container">
          <h2 className="career-role__header__title">Frontend Developer</h2>
          <p className="career-role__header__sub-title">
            Create user–friendly websites and multimedia content
          </p>
        </div>
      </div>

      <div className="container">
        <Link className="career-role__back row">
          <LeftOutlined className="career-role__back__icon" />
          <span>Explore careers</span>
        </Link>

        <div className="statistics career-role__general">
          <div className="statistics__item">
            <p className="career-role__general__top">Job opportunities</p>
            <p className="statistics__item__number">10.234</p>
            <div className="statistics__item__text">
              Jobs on website
              <br />
              right now
            </div>
          </div>

          <div className="statistics__item">
            <p className="career-role__general__top">Job growth</p>
            <p className="statistics__item__number">
              <StockOutlined className="statistics__item__number__stock" />$
              {/* {min || 500} */} 500
            </p>
            <div className="statistics__item__text">
              Minimum common <br />
              salary
            </div>
          </div>

          <div className="statistics__item">
            <p className="career-role__general__top">Job growth</p>
            <p className="statistics__item__number">
              <CaretUpOutlined className="statistics__item__number__care" /> $
              {/* {max || 7000}{" "} */}
              700
            </p>
            <div className="statistics__item__text">
              Maximum common <br />
              salary
            </div>
          </div>

          <div className="statistics__item">
            <p className="career-role__general__top">Job satisfaction</p>
            <p className="statistics__item__number">3.212</p>
            {numberToArray(4).map((item, i) => (
              <StarFilled
                className="statistics__item__icon-fill career-role__general__star"
                key={i}
              />
            ))}
            {numberToArray(1).map((item, i) => (
              <StarTwoTone
                className="career-role__general__star"
                twoToneColor="#F57C00"
                key={i}
              />
            ))}
            <div style={{ height: "22px" }}></div>
          </div>
        </div>

        {/* Detail information */}
        <div className="career-role__detail career-role__container">
          <h2 className="career-role__detail__title">
            What's it like to be a Frontend Developer?
          </h2>
          <p className="career-role__detail__description">
            A Frontend Developer is a software developer who specialises in
            building the user-facing elements of websites and other web–based
            content. They commonly work with programming languages like
            JavaScript, HTML and CSS. Frontend Developers use a blend of
            creative and technical skills to design and build user–friendly
            content.
          </p>

          <div className="career-role__detail__poster">
            <img
              src="https://cdn.seeklearning.com.au/media/images/career-guide/module/javascript-developer-module.jpg"
              alt="poster"
            />
          </div>
          <h3 className="career-role__detail__task">Tasks and duties</h3>
          <p className="career-role__detail__text">
            Frontend Developers often work to a process known as the Software
            Development Life Cycle (SDLC), which contains six stages: analysis,
            design, development and testing, implementation, documentation, and
            evaluation. They work in teams at IT companies or in the IT
            department of a broad range of technology–driven organisations. They
            may also work freelance servicing a list of clients.
          </p>
        </div>

        {/* Tabs earn in role */}
        <div className="career-role__container">
          <Tabs
            className="career-role__tabs"
            defaultActiveKey="All"
            // onSelect={selectFind}
          >
            <Tab eventKey="All" title="All">
              <CareerEarn />
            </Tab>
            <Tab eventKey="NSW" title="NSW">
              <CareerEarn />
            </Tab>
            <Tab eventKey="VIC" title="VIC">
              <CareerEarn />
            </Tab>
            <Tab eventKey="ABC" title="ABC">
              <CareerEarn />
            </Tab>
          </Tabs>

          <b>Compare salaries by similar roles</b>
        </div>

        {/* Become */}
        <div className="career-role__become career-role__container">
          <h2 className="career-role__become__title">How to become a Frontend Developer</h2>
          <div className="row">
            <img  src="https://www.seek.com.au/career-advice/assets/6a548afa.svg" alt="uni"/>
          </div>
        </div>
     
      </div>

      <h2>career role</h2>
      <MatchSkillCard />
    </div>
  );
};

export default CareerRole;
