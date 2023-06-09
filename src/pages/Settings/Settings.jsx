import { Header, Footer } from "components";
import styles from "./styles.module.css";

import userPic from "assets/images/dcd19417b51c6de9.png";
import { UserModel, Theme } from "models";
import {React}  from "react";


function Settings() {

  let password = ""
  let confirmPass = ""
  let email = ""
  let userName = ""

  return (
    <div className={styles.settingsPage}>
      <Header />
      <div className={Theme.isThemeDark() ? styles.settings : styles.settingsL}>
        <div className={styles.userInfo}>
          <img src={userPic} className={Theme.isThemeDark() ? styles.userPic : styles.userPicL} alt="profilePicture" />
          <h2 className={styles.userName}> Polina</h2>
        </div>
        <div>
          <fieldset className={styles.upload}>
            <label className={styles.label}>
              Change profile picture
              <form>
                
                <input
                  type="file"
                  name="userAvatar"
                  className={styles.settingsInput}
                />
              </form>
            </label>
            <button className={Theme.isThemeDark ?  styles.btnL : styles.btn}> Upload </button>
          </fieldset>

          <fieldset className={styles.form}>
            <label className={styles.label}>
              Username
              <form>
                
                <input
                  name="text"
                  type="text"
                  placeholder={UserModel.userName}
                  onChange={(eve) => userName = eve.target.value}
                  className={styles.settingsInput}
                />
              </form>
            </label>

            <label className={styles.label}>
              Email
              <form>
                
                <input
                  name="email"
                  type="email"
                  placeholder={UserModel.email}
                  onChange={(eve) => email = eve.target.value }
                  className={styles.settingsInput}
                />
              </form>
            </label>

            <label className={styles.label}>
              Password
              <form>
                
                <input
                  name="new-password"
                  type="Password"
                  placeholder="New Password"
                  onChange={(eve) => password = eve.target.value}
                  className={styles.settingsInput}
                />
              </form>
            </label>

            <label className={styles.label}>
              Confirm Password
              <form>
                
                <input
                  name="confirm password"
                  type="password"
                  placeholder="Confirm New Password"
                  onChange={(eve) => confirmPass = eve.target.value }
                  className={styles.settingsInput}
                />
                
              </form>
            </label>
            <button className={Theme.isThemeDark ?  styles.btnL : styles.btn} onClick={() => UserModel.changeInfo({email,password,userName})}> Save </button>
          </fieldset>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Settings;
