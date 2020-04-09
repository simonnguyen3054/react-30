import React from "react";
import "./style.scss";

const JsAndCssClock = () => {
  return (
    <div className="clockBackground">
      <div className="clock">
        <div className="clock-inner">
          <div className="clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand second-hand"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsAndCssClock;
