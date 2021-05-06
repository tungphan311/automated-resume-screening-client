import {
  StarTwoTone,
  StarFilled,
  CaretUpOutlined,
  StockOutlined
} from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import "./Statistics.scss";
import { numberToArray } from "utils/index";

const Statistics = ({ total, min, max }) => {
  return (
    <div className="statistics">
      <div className="statistics__item">
        <p className="statistics__item__number">
          {total > 0 && total < 10
            ? "0" + total?.toString()
            : total?.toString() || 10.234}
        </p>
        <div className="statistics__item__text">
          Jobs on website right <br />
          now
        </div>
      </div>

      <div className="statistics__item">
        <p className="statistics__item__number">
          <StockOutlined className="statistics__item__number__stock" />$
          {min || 500}
        </p>
        <div className="statistics__item__text">
          Minimum common <br />
          salary
        </div>
      </div>

      <div className="statistics__item">
        <p className="statistics__item__number">
          <CaretUpOutlined className="statistics__item__number__care" /> $
          {max || 7000}{" "}
        </p>
        <div className="statistics__item__text">
          Maximum common <br />
          salary
        </div>
      </div>

      <div className="statistics__item">
        <p className="statistics__item__number">3.212</p>
        <div className="statistics__item__text">Job satisfaction</div>
        {numberToArray(4).map((item, i) => (
          <StarFilled className="statistics__item__icon-fill" key={i} />
        ))}
        {numberToArray(1).map((item, i) => (
          <StarTwoTone twoToneColor="#F57C00" key={i} />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
