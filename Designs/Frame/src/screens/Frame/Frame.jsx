import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="text-wrapper">Font</div>
          <h1 className="h-1">Inter</h1>
          <div className="text-wrapper-2">Color</div>
          <div className="text-wrapper-3">CiaoChow Mobile</div>
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
        </div>
        <div className="text-wrapper-4">Tools</div>
        <div className="group">
          <img className="image" alt="Image" src="/img/image-1.png" />
        </div>
      </div>
    </div>
  );
};
