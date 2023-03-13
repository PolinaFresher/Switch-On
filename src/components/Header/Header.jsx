import { React } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import styles2 from "../Search/styles.module.css";

import logo from "assets/icons/dark/headdi.svg";
import logoL from "assets/icons/light/logolight.svg";
import pic from "assets/images/avatar.gif";
import { ROUTES } from 'shared/consts'
import { Theme, UserModel } from "models";
import { observer } from 'mobx-react-lite'
import { ThemeSwither } from "components/ThemeSwither";
import { Search } from "components/Search";

function Header() {
  const navigate = useNavigate()
  return (
    <header className={styles.header} >
      <ThemeSwither />
       <Search  className={styles2.test}/> 
      <div className={Theme.isThemeDark() ?  styles.logoL : styles.logo} onClick={() => navigate(ROUTES.HOME)}>
        Switch  
        <img src={Theme.isThemeDark() ? logo : logoL} alt="search" className={styles.logos} />n
      </div>
      <div className={styles.profileWrapper}>
        <div className={styles.profile} >
          <img src={UserModel.isLoggedIn() && UserModel.logo ? UserModel.logo : pic} alt="profile" className={Theme.isThemeDark() ? styles.pic : styles.picL} style={Theme.isThemeDark() ? {} : { background: "linear-gradient(315deg, #d900e6b5, #3f04e4cc)" }} />
        </div>
      </div>
    </header>
  );
}

export default observer(Header)
