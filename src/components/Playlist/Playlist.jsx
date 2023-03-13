import { React } from "react";

import styles from "./styles.module.css";

import clock from "assets/icons/light/clock.svg";


import { Theme, UserModel } from 'models'


import { ReactComponent as Heart } from "assets/icons/light/fav.svg";
import { observer } from 'mobx-react-lite'

import { PlaylistModel, AudioModel } from "models";

const Playlist = () => {

  const list = PlaylistModel.getPlayList()
  // const ListDuration = 0
  const playlists = UserModel.getUserPlaylists()

  // function getDuration(track) {
  //   const { duration } = track.duration;
  //   return duration
  // }

  function TrackInfo({ track, index }) {

    return (
      <tbody>
      <tr className={Theme.isThemeDark() ? styles.tr : styles.trL}>
        <td className={styles.order}>{index + 1}</td>
        <td className={styles.cover}>  <img className={styles.image} src={track.image} alt="cover"/></td>
        <td className={styles.title}>{track.artist + " - " + track.title}</td>
        <td className={styles.favourite}> <Heart className={UserModel.isSongInFavorites(track) ? styles.heartActive : styles.heart} onClick={ UserModel.isSongInFavorites(track) ? null : () => {UserModel.addToPlaylist(playlists[0][Object.keys(playlists[0])[1]], track) }} /></td>
        <td className={styles.time}>2:45</td>
      </tr>
      </tbody>
    );
  }


  return (
      <div className={Theme.isThemeDark() ? styles.playlist : styles.playlistL}>

        <div className={styles.userInfo}>

          <div className={styles.user}>
            <img src={UserModel.logo} className={Theme.isThemeDark() ? styles.img : styles.imgL} />
            <h1 className={styles.userName}> {UserModel.userName}</h1>
          </div>

          <div className={styles.playlistInfo}>
            <span className={Theme.isThemeDark() ? styles.txt : styles.txtL}>Playlist:</span>
            <h2 className={styles.playlistName}>{PlaylistModel.getPlayListName()}</h2>
            <span className={Theme.isThemeDark() ? styles.durationInfo : styles.durationInfoL}>Duration 5h 32min</span>
            <span className={Theme.isThemeDark() ? styles.quantityInfo : styles.quantityInfoL}>{list.length} songs</span>
          </div>

          <button className={Theme.isThemeDark() ? styles.playBtn : styles.playBtnL} onClick={() => { AudioModel.changePlayList(list); AudioModel.setTrackIndex(0); }}> Play </button>
        </div>

        <table className={styles.table}>
        <thead>
          <tr>
          <th className={styles.column} style={Theme.isThemeDark() ? {} : { color: "#ffffff", borderBottom: "1px solid #ffffff88", }}>
            #
          </th>
          <th className={styles.column} style={Theme.isThemeDark() ? {} : { color: "#ffffff", borderBottom: "1px solid #ffffff88" }}>
            Album cover
          </th>
          <th className={styles.column} style={Theme.isThemeDark() ? {} : { color: "#ffffff", borderBottom: "1px solid #ffffff88" }}>
            Title
          </th>
          <th className={styles.column} style={Theme.isThemeDark() ? {} : { color: "#ffffff", borderBottom: "1px solid #ffffff88" }}>
          </th>
          <th className={styles.duration} style={Theme.isThemeDark() ? {} : { color: "#ffffff", borderBottom: "1px solid #ffffff88" }} onMouseEnter>
            <img src={clock} className={styles.clock}  alt="clock"/>
          </th>
          </tr>
          </thead>
          {list.map((track, index) => {
            return <TrackInfo track={track} index={index} key={index} />
          })}
        </table>
      </div>

  );
}



export default observer(Playlist)