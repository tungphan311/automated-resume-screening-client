import React from "react";
import { Link } from "react-router-dom";

import "./SimJob.scss";
import history from "state/history";
// import { DownOutlined } from "@ant-design/icons";
import { getDiffTime } from "utils/index";
import { formatProvince } from "utils/index";

const SimJob = ({
  id,
  contractType,
  description,
  title,
  companyBg,
  companyLogo,
  companyName,
  postedIn,
  provinceId,
  salary,
  provinces
}) => {
  const openJob = () => {
    window.open(`/job-detail/${id}`, "_blank", "noopener,noreferrer");
  };

  const getProvince = () => {
    return (
      provinceId &&
      provinceId
        .split(",")
        .map((p) => formatProvince(provinces, p))
        .join(", ")
    );
  };

  console.log(getProvince());

  const getDays = () => {
    let dayStr =
      getDiffTime(postedIn) > 1
        ? getDiffTime(postedIn).toString() + " days ago"
        : getDiffTime(postedIn).toString() + " day ago";

    if (getDiffTime(postedIn) === 0) {
      dayStr = "Today";
    }

    return dayStr;
  };
  return (
    <div className="sim-job" onClick={openJob}>
      <div className="sim-job__top">
        <div className="sim-job__top__info">
          <p className="sim-job__top__info__title"> {title}</p>
          <div className="sim-job__top__info__group">
            <span className="sim-job__top__info__group__company">
              <span className="company-name">
                <p>{companyName}</p>
              </span>
              <span className="remote-bullet">•</span>
              <span className="sim-job__top__info__group__contract">
                {contractType}
              </span>
            </span>
          </div>
          <p className="sim-job__top__info__location">{getProvince()}</p>

          <p className="sim-job__top__info__salary">
            Lương: <b> {salary}</b>
          </p>
        </div>
        <div className="sim-job__top__logo">
          <img src={companyLogo || "/assets/img/company-default-logo.png"} alt="logo"/>
        </div>
      </div>

      <div className="sim-job__bottom">
        <p
          className="sim-job__bottom__des show-less"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <p className="sim-job__bottom__time"> {getDays()} </p>
      </div>
    </div>
  );
};

export default SimJob;
