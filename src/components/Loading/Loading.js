import React from "react";

function Loading({ loading }) {
  return (
    <div className={`seeking-loading ${loading ? "" : "d-none"}`}>
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_h59xofz0.json"
        mode="bounce"
        background="rgba(0,0,0,0)"
        speed="0.9"
        style={{ width: "250px", height: "250px" }}
        loop
        autoplay
      ></lottie-player>
      <span>Please wait ...</span>
    </div>
  );
}

export default Loading;
