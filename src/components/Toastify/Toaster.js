import React from "react";
import "./Toaster.scss";

const Toaster = ({ type, message }) => (
  <div className={`cv__toast cv__toast--${type}`}>
    <div className={`icon icon--${type}`} />
    <div className="cv__toast--message">
      <span>{message}</span>
    </div>
  </div>
);

export default Toaster;
