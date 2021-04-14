import { StarTwoTone, StarFilled, CaretUpOutlined, CaretDownOutlined, StockOutlined  } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Statistics.scss";
import {numberToArray} from 'utils/index'

const Statistics = () => {
  // const [overlay, setOverlay] = useState(false);

  return (
    <div className="statistics">
      <div className="statistics__item">
        <p className="statistics__item__number">40.212</p>
        <div className="statistics__item__text">Jobs on SEEK right <br/>now</div>
      </div>

      <div className="statistics__item">
        <p className="statistics__item__number"><CaretUpOutlined className="statistics__item__number__care"/> 23.4% <StockOutlined className="statistics__item__number__stock"/></p>
        <div className="statistics__item__text">Projected job growth <br/>in 5 years</div>
      </div>

      <div className="statistics__item">
        <p className="statistics__item__number">$103k</p>
        <div className="statistics__item__text">Most common <br/>salary</div>
      </div>

      <div className="statistics__item">
        <p className="statistics__item__number">3.212</p>
        <div className="statistics__item__text">Job satisfaction</div>
        {numberToArray(4).map((item, i) => <StarFilled className="statistics__item__icon-fill" key={i}/>)}
        {numberToArray(1).map((item, i) => <StarTwoTone twoToneColor="#F57C00" key={i}/>)}
      </div>
    </div>
  );
};

export default Statistics;
