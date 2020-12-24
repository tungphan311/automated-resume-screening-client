import React from "react";
import { useWindowSize } from "utils/window";
import "./JobDetail.scss";
import { CloseOutlined, HeartOutlined } from "@ant-design/icons";

function JobDetail({ top, onChangeSelect }) {
  const size = useWindowSize();
  const padding = (size.width - 1140) / 2;

  return (
    <div
      id="vjs-container"
      tabIndex="-1"
      style={{ left: `${padding + 441}px`, top: `${top}px`, bottom: "-1px" }}
    >
      <Header onChangeSelect={onChangeSelect} />
      <div id="vjs-content"></div>
    </div>
  );
}

export default JobDetail;

const Header = ({ onChangeSelect }) => (
  <div id="vjs-header" className="vjs-header-no-shadow">
    <div id="vjs-header-jobinfo">
      <div id="vjs-jobinfo">
        <div id="vjs-jobtitle">
          Front End Developer (JavaScript, HTML, CSS) - Good English Skill
        </div>
        <div>
          <span id="vjs-cn">ICONIC Co,.Ltd.</span>
          <span id="vjs-loc">
            <span> - </span>Thành phố Hồ Chí Minh
          </span>
        </div>
      </div>
    </div>
    <div id="vjs-x">
      <button
        className="CloseButton vjs-x-button-close"
        onClick={() => onChangeSelect(null)}
      >
        <CloseOutlined />
      </button>
    </div>
    <div id="apply-button-container">
      <div className="job-footer-button-row">
        <button className="view-apply-button blue-button">
          Ứng tuyển ngay
        </button>
        <span id="state-picker-container" className="dd-wrapper">
          <button className="state-picker-button">
            <span>
              <HeartOutlined style={{ fontSize: "18px", fontWeight: "700" }} />
            </span>
          </button>
        </span>
      </div>
    </div>
  </div>
);
