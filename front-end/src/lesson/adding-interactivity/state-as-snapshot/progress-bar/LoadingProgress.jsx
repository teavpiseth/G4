import React from "react";
import style from "./progressBar.module.css";

const LoadingProgress = ({ progress }) => {
  return (
    <div className={style.progressBar}>
      <div
        className={style.progressBarFill}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingProgress;
