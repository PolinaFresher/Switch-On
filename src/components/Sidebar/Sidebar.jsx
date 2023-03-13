import React from "react";

import { observer } from 'mobx-react-lite'
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

import home from "assets/icons/dark/homed.svg";
import search from "assets/icons/dark/searchdark.svg";
import library from "assets/icons/dark/musicdark.svg";
import favourites from "assets/icons/dark/favouritedark.svg";
import settings from "assets/icons/dark/settingsdark.svg";
import log from "assets/icons/dark/ligindark.svg";
import leave from "assets/icons/dark/logoutdark.svg";

import homeL from "assets/icons/light/homeL.svg";
import searchL from "assets/icons/light/searchlight.svg";
import libraryL from "assets/icons/light/musdar.svg";
import favouritesL from "assets/icons/light/favouritelight.svg";
import settingsL from "assets/icons/light/settlight.svg";
import logL from "assets/icons/light/loginlight.svg";
import leaveL from "assets/icons/light/logoutlight.svg";

import { UserModel, SideBarModal, LoginModal, PlaylistModel, Theme, SearchRequest } from "models";
import { ROUTES } from 'shared/consts'


function Sidebar() {
  const navigate = useNavigate()
  const openFavorites = () => {
    const lists = UserModel.getUserPlaylists()
    const listName = lists[0][Object.keys(lists[0])[1]]
    const list = lists[0][Object.keys(lists[0])[0]]
    const path = String(listName).toLowerCase().replaceAll(' ', '')
    PlaylistModel.updateList(list, listName, path);
    navigate(ROUTES.PLAYLISTFAVORITES);
    
  }
  return (
    <div className={SideBarModal.open ? styles.sidebarActive : styles.sidebar} style={Theme.isThemeDark() ? {} : {background: "#210354c4"}}>
      <div className={styles.flex}>
        <div className={styles.burgerMenu}>
          <svg
            className={Theme.isThemeDark() ? styles.svg : styles.svgL}
            width="40"
            height="40"
            viewBox="-3 -11 36 42"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => SideBarModal.updateState()}
            style={
              SideBarModal.open ? { strokeDashoffset: "-60" } : { strokeDashoffset: "0" }
            }
          >
            <g transform="matrix(1,0,0,1,-419.5,-274.131)">
              <g>
                <path
                  className={styles.path_top}
                  d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"
                />
                <g transform="matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)">
                  <path
                    className={styles.path_bottom}
                    d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"
                  />
                </g>

                <g transform="matrix(1,0,0,1,0,-0.0234189)">
                  <path
                    className={styles.path_middle}
                    d="M420,284.646L450,284.646"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.menu}>

        <div className={styles.menu_item_flex}>
          <p className={SideBarModal.open ? styles.hide_userB : styles.hide_user} style={Theme.isThemeDark() ? {} : {color:"#ed05fc"}}> Hello, {UserModel.isLoggedIn() ? UserModel.userName : 'User'}!
          </p>
        </div>

        <div className={styles.menu_item_flex} onClick={() => { navigate(ROUTES.HOME) }}>
          <div className={styles.icon}>
          <img src={Theme.isThemeDark() ? home : homeL } alt="home" className={styles.img}></img>
          </div>
          <p className={SideBarModal.open ? styles.hideB : styles.hide}   style={Theme.isThemeDark() ? {} : {color:"#ffffff"}}>Home
          </p>
        </div>

        <div className={styles.menu_item_flex} onClick={() => SearchRequest.showSearch()}>
          <div className={styles.icon}>
            <img src={Theme.isThemeDark() ? search : searchL} alt="search" className={styles.img}></img>
          </div>
          <p
            className={SideBarModal.open ? styles.hideB : styles.hide}  style={Theme.isThemeDark() ? {} : {color:"#ffffff"}}>Search
          </p>
        </div>

        <div className={styles.menu_item_flex} >
          <div className={styles.icon} onClick={UserModel.isLoggedIn() ? () => { navigate(ROUTES.MUSICLIBRARY) } : () => LoginModal.updateState()}>
            <img src={Theme.isThemeDark() ? library : libraryL} alt="library" className={styles.img}></img>
          </div>
          <p
            className={SideBarModal.open ? styles.hideB : styles.hide}  style={Theme.isThemeDark() ? {} : {color:"#ffffff"}}> Music Library
          </p>
        </div>

        <div className={styles.menu_item_flex} onClick={UserModel.isLoggedIn() ? openFavorites : () => LoginModal.updateState()}>
          <div className={styles.icon}>
            <img src={Theme.isThemeDark() ? favourites :favouritesL} alt="favourites" className={styles.img}></img>
          </div>
          <p
            className={SideBarModal.open ? styles.hideB : styles.hide}  style={Theme.isThemeDark() ? {} : {color:"#ffffff"}}>Favourites
          </p>
        </div>

        <div className={styles.menu_item_flex} onClick={UserModel.isLoggedIn() ?  () => navigate(ROUTES.SETTINGS)  : () => LoginModal.updateState()}>
          <div className={styles.icon}>
            <img src={Theme.isThemeDark() ? settings : settingsL} alt="settings" className={styles.img}></img>
          </div>
          <p
            className={SideBarModal.open ? styles.hideB : styles.hide}  style={Theme.isThemeDark() ? {} : {color:"#ffffff"}}> Settings
          </p>
        </div>

        <div className={styles.menu_item_flex} >
          <div className={styles.icon} onClick={UserModel.isLoggedIn() ? null : () => LoginModal.updateState()}>
            <img src={Theme.isThemeDark() ? log : logL} alt="log in" className={styles.img} ></img>
          </div>
          <p
            className={SideBarModal.open ? styles.hideB : styles.hide}  style={Theme.isThemeDark() ? {} : {color:"#ffffff"}}> Sign in
          </p>
        </div>

        <div className={styles.menu_item_flex}>
          <div className={styles.icon} onClick={() => { UserModel.logOut() }}>
            <img src={Theme.isThemeDark() ? leave : leaveL} alt="log out" className={styles.img}></img>
          </div>
          <p
            className={SideBarModal.open ? styles.hideB : styles.hide}  style={Theme.isThemeDark() ? {} : {color:"#ffffff"}}> Log Out
          </p>
        </div>

      </div>
    </div>


  );
}

export default observer(Sidebar)