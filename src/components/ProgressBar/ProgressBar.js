import React, { useState } from "react";
import "./ProgressBar.scss";
import { Checked } from "constants/svg";

function ProgressBar({ steps }) {
  const [curStep, setCurStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const onClick = (label) => {
    setCurStep(label);
    setProgress(((label - 1) * 100) / (steps.length - 1));
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
            {steps.map(({ step }) => (
              <Dot label={step} curStep={curStep} onClick={onClick} />
            ))}
          </div>
        </div>
      </div>
      <div className="barLabel">
        {steps.map(({ step, label }) => (
          <Label step={step} curStep={curStep} label={label} />
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
