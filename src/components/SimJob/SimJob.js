import React from "react";
import { Link } from "react-router-dom";

import "./SimJob.scss";
// import { DownOutlined } from "@ant-design/icons";

const SimJob = () => {
  return (
    <div className="sim-job">
      <div className="sim-job__top">
        <div className="sim-job__top__info">
          <p className="sim-job__top__info__title"> Front Office Coordinator</p>
          <div className="sim-job__top__info__group">
            <span className="sim-job__top__info__group__company">
              Maven Dental Group
            </span>
            <span>(3068 reviews)</span>
          </div>
          <p className="sim-job__top__info__location">Ho Chi Minh City</p>
        </div>
        <div className="sim-job__top__logo">
          <img src="https://img.naukimg.com/logo_images/v2/mobile/1141.gif" />
        </div>
      </div>

      <div className="sim-job__bottom">
        <p  className="sim-job__bottom__des">
          Maven Dental Group bpo,cca,Blended Process,cce,International Call
          Center,email process,customer service,customer care
        </p>
        <p className="sim-job__bottom__time">2 days ago </p>
      </div>
    </div>
  );
};

export default SimJob;
