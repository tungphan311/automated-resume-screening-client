import React, { useState } from "react";
import "./ProgressBar.scss";
import { Checked } from "constants/svg";

function ProgressBar() {
  const [curStep, setCurStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const STEPS = [
    { step: 1, label: "Thông tin liên lạc" },
    { step: 2, label: "Học vấn" },
    { step: 3, label: "Kinh nghiệm" },
    { step: 4, label: "Kỹ năng" },
    { step: 5, label: "Giải thưởng" }
  ];

  const onClick = (label) => {
    setCurStep(label);
    setProgress((label - 1) * 25);
  };

  return (
    <>
      <div className="barPadding">
        <div className="barContainer">
          <div className="barProgress">
            <div
              className="barProgressFill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="barInnerDots">
            {[1, 2, 3, 4, 5].map((s) => (
              <Dot label={s} curStep={curStep} onClick={onClick} />
            ))}
          </div>
        </div>
      </div>
      <div className="barLabel">
        {STEPS.map(({ s, label }) => (
          <Label step={s} curStep={curStep} label={label} />
        ))}
      </div>
    </>
  );
}

export default ProgressBar;

const Dot = ({ label, curStep, onClick }) => (
  <>
    <div
      className={`step-dot ${curStep > label ? "dotChecked" : ""} ${
        curStep === label ? "cur-step" : ""
      }`}
    >
      {curStep <= label ? (
        <div className={`dotInner ${curStep === label ? "curDot" : ""}`}>
          {label}
        </div>
      ) : (
        Checked
      )}
      <button
        onClick={() => onClick(label)}
        className="buttonAsLink dotLink"
        role="link"
      ></button>
    </div>
    {label < 5 && <div className="step-dash"></div>}
  </>
);

const Label = ({ step, curStep, label }) => (
  <label className={`label-text ${curStep === step ? "labelActive" : ""}`}>
    {label}
  </label>
);
