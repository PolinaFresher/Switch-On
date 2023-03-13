import React from 'react'
import styles from "./styles.module.css";
import { observer } from 'mobx-react-lite'
import { Theme } from 'models';



function ThemeSwither() {

    return (
        <div className={styles.themeSwitcher}>
        <label htmlFor="theme"  className={styles.theme}>
        <span  className={styles.theme__toggle_wrap}>
          <input className={styles.theme__toggle} type="checkbox" defaultChecked={Theme.isThemeDark()} onChange={() => Theme.changeTheme()}></input>
          <span className={styles.theme__icon} >
            <span className={styles.theme__icon_sun}></span>
            <span className={styles.theme__icon_sun}></span>
            <span className={styles.theme__icon_sun}></span>
            <span className={styles.theme__icon_sun}></span>
            <span className={styles.theme__icon_sun}></span>
            <span className={styles.theme__icon_sun}></span>
            <span className={styles.theme__icon_sun}></span>
            <span className={styles.theme__icon_sun}></span>
            <span className={styles.theme__icon_sun}></span>
          </span>
        </span>
    
      </label> 
        </div>
    )
}
export default observer(ThemeSwither)