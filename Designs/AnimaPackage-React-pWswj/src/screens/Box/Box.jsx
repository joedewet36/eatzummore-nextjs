import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="dark-mode-false-type-wrapper">
        <div className="dark-mode-false-type">
          <div className="right-side">
            <img className="battery" alt="Battery" src="/img/battery.png" />
            <img className="wifi" alt="Wifi" src="/img/wifi.svg" />
            <img className="mobile-signal" alt="Mobile signal" src="/img/mobile-signal.svg" />
          </div>
          <img className="left-side" alt="Left side" src="/img/left-side.png" />
        </div>
      </div>
    </div>
  );
};
