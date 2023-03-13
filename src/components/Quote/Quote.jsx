import { Theme } from "models";
import React from "react";

import styles from "./styles.module.css";


function Quote() {
    return (
        <div className="Quote">
          <div className={styles.headline}>
          <q className={styles.quote} style={Theme.isThemeDark() ? {} : {color: "rgba(147, 18, 246, 0.338)"}} >Music is the strongest form of magic.</q>
          <span className={styles.author} style={Theme.isThemeDark() ? {} : {color: "#5b37a8"}}> ― Marilyn Manson</span>
          </div>
        </div>
      );
}

export default Quote;