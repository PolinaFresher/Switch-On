import React, { useEffect } from "react";

import styles from "./style.css";

const Background = ({ activeColor, trackIndex, isPlaying }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--active-color", activeColor);
  }, [trackIndex, activeColor]);

  return <div className={`colorBackground ${isPlaying ? ".playing" : null}`} />;

};

export default Background;

