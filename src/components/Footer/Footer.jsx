import { React } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "shared/consts";
import { observer } from 'mobx-react-lite'

import styles from "./styles.module.css";

import logo from "assets/icons/dark/headdi.svg";

import { ReactComponent as Twitter } from "assets/icons/dark/twitter.svg";
import { ReactComponent as Facebook } from "assets/icons/dark/facebook.svg";
import { ReactComponent as Instagram } from "assets/icons/dark/inst.svg";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className={styles.footer} >
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div
            className={styles.logo}
            onClick={() => { navigate(ROUTES.HOME); }}
          >
            Switch <img src={logo} alt="search" className={styles.logos} />n
          </div>

          <div className={styles.subscribe}>
            <h2> Let's stay on touch!</h2>
            <span className={styles.text}>
              Join our newsletter so we can spam you with our latest news and
              updates.
            </span>
          </div>

          <input
            className={styles.subscribeInput}
            type="email"
            placeholder="Sendmenews@example.com"
            required
          ></input>
          <button className={styles.button}> Subscribre </button>
        </div>
        <div className={styles.contentCenter}>
          <button className={styles.buttonSocial}>
            <Twitter className={styles.twitter} />
          </button>
          <button className={styles.buttonSocial}>
            <Instagram className={styles.instagram} />
          </button>
          <button className={styles.buttonSocial}>
            <Facebook className={styles.facebook} />
          </button>
        </div>

        <div className={styles.contentRight}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Terms of use</li>
            <li className={styles.listItem}>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default observer(Footer)
