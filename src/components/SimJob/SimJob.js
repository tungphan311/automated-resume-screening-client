import React from "react";
import { Link } from "react-router-dom";

import "./SimJob.scss";
// import { DownOutlined } from "@ant-design/icons";
import { getDiffTime } from "utils/index";

const SimJob = ({
  // id,
  // contactType,
  // description,
  // title,
  // companyBg,
  // companyLogo,
  // companyName,
  // postedIn,
  // provinceId,
  // salary
}) => {
  return (
    <div className="sim-job">
      <div className="sim-job__top">
        <div className="sim-job__top__info">
          {/* <p className="sim-job__top__info__title"> {title }</p> */}
          <div className="sim-job__top__info__group">
            <span className="sim-job__top__info__group__company">
              {/* {companyName} */}
            </span>
            <span>(3068 reviews)</span>
          </div>
          <p className="sim-job__top__info__location">Ho Chi Minh City</p>
        </div>
        <div className="sim-job__top__logo">
          {/* <img src={companyLogo || ""} /> */}
        </div>
      </div>

      <div className="sim-job__bottom">
        <p  className="sim-job__bottom__des show-less">
         {/* {description} */}
        </p>
        {/* <p className="sim-job__bottom__time">  {" "}
                  {getDiffTime(postedIn) > 1
                    ? getDiffTime(postedIn).toString() + " days"
                    : getDiffTime(postedIn).toString() + " day"}{" "}
                  ago</p> */}
      </div>
    </div>
  );
};

export default SimJob;
