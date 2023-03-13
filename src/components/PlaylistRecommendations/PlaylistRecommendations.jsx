import React from "react";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { PlaylistModel, Theme } from "models";
import { observer } from 'mobx-react-lite'

import { Sad, Electronic, Happy } from "components/AudioPlayer/tracks";

function Playlist({ track }) {

      return (

            <div className={Theme.isThemeDark() ? styles.box : styles.boxL}>
                  <img className={styles.image} src={track.image} alt={"Cover"} />
                  <h5 className={Theme.isThemeDark() ? styles.album : styles.albumL}> {track.albumName} </h5>
                  <p className={Theme.isThemeDark() ? styles.year : styles.yearL}> {track.year}</p>
                  <p className={Theme.isThemeDark() ? styles.genre : styles.genreL}> {track.genre} </p>
            </div>


      );
}

function PlaylistRecommendations() {
      const navigate = useNavigate()
      return (
            <div className={styles.suggestions}>
                  <div className={styles.playlist}>
                        <h1 className={Theme.isThemeDark() ? styles.playlistNameTwo : styles.playlistNameTwoL}>Electronic Vibes </h1>
                        <button className={Theme.isThemeDark() ? styles.buttonTwo : styles.buttonTwoL} onClick={() => { navigate('/playlist/Ravewave'); PlaylistModel.updateList(Electronic, 'Rave wave', 'Ravewave'); }}
                        > Show Playlist </button>
                        <ul className={styles.playlistSingle}>
                              {Electronic.map((track, index) => {
                                    return index < 9 ? <Playlist track={track} key={index} /> : null

                              })}
                        </ul>
                  </div>

                  <div className={styles.playlist}>
                        <h1 className={Theme.isThemeDark() ? styles.playlistNameThree : styles.playlistNameThreeL}> Sing, dance and have fun!</h1>
                        <button className={Theme.isThemeDark() ? styles.buttonThree : styles.buttonThreeL} onClick={() => { navigate('/playlist/Cheerup!'); PlaylistModel.updateList(Happy, 'Cheer up!', 'Cheerup!'); }}>
                              Show Playlist </button>
                        <ul className={styles.playlistSingle}>
                              {Happy.map((track, index) => {
                                    return index < 9 ? <Playlist track={track} key={index} /> : null

                              })}
                        </ul>
                  </div>

                  <div className={styles.playlist}>
                        <h1 className={Theme.isThemeDark() ? styles.playlistName : styles.playlistNameL} >Feeling blue? Make it worse! </h1>
                        <button className={Theme.isThemeDark() ? styles.button : styles.buttonL} onClick={() => { navigate('/playlist/Cryariver!'); PlaylistModel.updateList(Sad, 'Cry a river!', 'Cryariver!'); }}
                        > Show Playlist </button>
                        <div className={styles.playlistSingle}>
                              {Sad.map((track, index) => {
                                    return index < 9 ? <Playlist track={track} key={index} /> : null
                              })}
                        </div>
                  </div>
            </div>

      );
}

export default observer(PlaylistRecommendations)
