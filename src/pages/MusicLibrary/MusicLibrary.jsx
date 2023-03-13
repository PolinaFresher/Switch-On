import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Header } from "components";
import styles from "./styles.module.css";
import create from "assets/icons/dark/create.svg";
import { observer } from 'mobx-react-lite'

import { UserModel, PlaylistModel, Theme } from "models";

import play from "assets/icons/dark/playonhover.svg";


const MusicLibrary = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const navigate = useNavigate()
  const lists = useState(UserModel.getUserPlaylists())[0]


  function PlayList({ list, name, covers }) {
    const [isActive, setActive] = useState(false);
    let path = String(name).toLowerCase().replaceAll(' ', '')
    return (
      <div className={Theme.isThemeDark() ? styles.playlist : styles.playlistL}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => { navigate('/playlist/' + path); PlaylistModel.updateList(list, name, path); }}>
        <img src={play} className={isActive ? styles.active : styles.inactive} alt={"Cover"}/>
        <div className={styles.covers}>
          <img src={covers[0]} className={styles.img} alt={"Cover"}/>
          <img src={covers[1]} className={styles.img} alt={"Cover"}/>
          <img src={covers[2]} className={styles.img} alt={"Cover"}/>
          <img src={covers[3]} className={styles.img} alt={"Cover"}/>
        </div>
        {name}
      </div>
    )

  }


  return (
    <>
      <Header />
      <div className={styles.musicLibrary}>

        <div className={Theme.isThemeDark() ? styles.playlists : styles.playlistsL}>

          <div className={Theme.isThemeDark() ? styles.userInfo : styles.userInfoL}>
            <img src={UserModel.logo}  alt={"Cover"} className={Theme.isThemeDark() ? styles.userPic : styles.userPicL} />
            <h2 className={styles.userName}> {UserModel.userName}</h2>
          </div>

          <section className={styles.section}>
            <h1 className={Theme.isThemeDark() ? styles.headline : styles.headlineL}> Playlists </h1>
            <div className={styles.container}>

              <div className={Theme.isThemeDark() ? styles.playlist : styles.playlistL}>
                <div className={styles.covers}>
                  <img src={create} className={styles.add} alt={"Cover"}/>
                </div>
                Create playlist
              </div>

              {lists.map((list, key) => {
                return <PlayList key={key} list={list[Object.keys(list)[0]]} name={list[Object.keys(list)[1]]} covers={list[Object.keys(list)[2]]} />
              })}
            </div>

          </section>

        </div>
      </div>
      <Footer />
    </>

  );
}

export default observer(MusicLibrary)
