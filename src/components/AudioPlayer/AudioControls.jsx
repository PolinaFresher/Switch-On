import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import { ReactComponent as Play } from "assets/icons/dark/playdark.svg";
import { ReactComponent as Pause } from "assets/icons/dark/pausedark.svg";
import { ReactComponent as Next } from "assets/icons/dark/nextdark.svg";
import { ReactComponent as Prev } from "assets/icons/dark/prevdark.svg";

import { ReactComponent as Favourites } from "assets/icons/dark/favourite.svg";
import { ReactComponent as FavouritesActiveDark } from "assets/icons/dark/favdarkactive.svg";
import { ReactComponent as Lyrics } from "assets/icons/dark/lyrics.svg";
import { ReactComponent as Volume } from "assets/icons/dark/volumed.svg";
import { ReactComponent as Randomness } from "assets/icons/dark/random.svg";
import { ReactComponent as Collapse } from "assets/icons/dark/collapse.svg";
import { ReactComponent as AddToPlaylist } from "assets/icons/dark/add.svg";


import { ReactComponent as VolumeUp } from "assets/icons/dark/volumeup.svg";
import { ReactComponent as VolumeDown } from "assets/icons/dark/volumedown.svg";


import { ReactComponent as PlayL } from "assets/icons/light/playWh.svg";
import { ReactComponent as PauseL } from "assets/icons/light/pausewh.svg";
import { ReactComponent as NextL } from "assets/icons/light/nextwh.svg";
import { ReactComponent as PrevL } from "assets/icons/light/prevwh.svg";

import { ReactComponent as FavouritesL } from "assets/icons/light/favouritelightpl.svg";
import { ReactComponent as FavouritesActiveLight } from "assets/icons/light/favlightactive.svg";
import { ReactComponent as LyricsL } from "assets/icons/light/lyricslight.svg";
import { ReactComponent as VolumeL } from "assets/icons/light/volumelight.svg";
import { ReactComponent as RandomnessL } from "assets/icons/light/randomlight.svg";
import { ReactComponent as CollapseL } from "assets/icons/light/collapselight.svg";
import { ReactComponent as AddToPlaylistL } from "assets/icons/light/adddark.svg";

import { ReactComponent as Plus } from "assets/icons/dark/pls.svg";

import { observer } from 'mobx-react-lite'
import { AudioModel } from 'models/Audio'
import { Theme, UserModel, LyricsRequest } from "models";

const AudioControls = ({ navigate, track }) => {

  const [state, setState] = useState(false)
  const [favoriest, setFavorites] = useState(false)
  const playlists = UserModel.getUserPlaylists()

  function PlayList({ list }) {
    const listName = list[Object.keys(list)[1]]
    return (<li className={styles.playlist} onClick={() => { UserModel.addToPlaylist(listName, track) }} > <Plus className={styles.plusSvg} /> {listName} </li>)
  }

  function GetPlaylists() {
    return (
      <div className={styles.playlistList}>
        <ul className={styles.list}>
          {playlists.map((list, key) => {
            return <PlayList list={list} key={key} />
          })}
        </ul>
      </div>
    );
  }
  function checkSongInFavorites() {
    if (UserModel.isSongInFavorites(track) === false) {
      return Theme.isThemeDark() ? <Favourites className={styles.svg} /> : <FavouritesL className={styles.svg} />
    } else {
      return Theme.isThemeDark() ? <FavouritesActiveDark className={styles.svg} /> : <FavouritesActiveLight className={styles.svg} />
    }
  }

  return (<div className={styles.audioControls}>



    <button
      type="button"
      className={styles.lyrics} 
      onClick={LyricsRequest.openedLirycs ? () => LyricsRequest.updateState() : () => LyricsRequest.getLirycs(track.id)}>
      {Theme.isThemeDark() ? <Lyrics className={styles.svg} /> : <LyricsL className={styles.svg} />}
    </button>

    <button
      type="button"
      className={styles.add}
      onClick={() => setFavorites(!favoriest)}
    >
      {Theme.isThemeDark() ? <AddToPlaylist className={styles.svg} /> : <AddToPlaylistL className={styles.svg} />}
      {favoriest ? <GetPlaylists /> : null}
    </button>

    <button
        onClick={UserModel.isSongInFavorites(track) ? null : () => UserModel.addToPlaylist(playlists[0][Object.keys(playlists[0])[1]], track)}
        type="button"
        className={styles.favourites}>
        {checkSongInFavorites()}

      </button>

    <button
      type="button"
      className={styles.prev}
      aria-label="Previous"
      onClick={() => AudioModel.prevTrack()}
    >
      {Theme.isThemeDark() ? <Prev className={styles.svg} /> : <PrevL className={styles.svg} />}
    </button>

    {AudioModel.isPlaying ? (

      <button
        type="button"
        className={styles.pause}
        onClick={() => AudioModel.setIsPlaying(false)}
        aria-label="Pause"
      >
        {Theme.isThemeDark() ? <Pause className={styles.svg} /> : <PauseL className={styles.svg} />}
      </button>
    ) : (

      <button
        type="button"
        className={styles.play}
        onClick={() => AudioModel.setIsPlaying(true)}
        aria-label="Play"
      >
        {Theme.isThemeDark() ? <Play className={styles.svg} /> : <PlayL className={styles.svg} />}
      </button>
    )}


    <button
      type="button"
      className={styles.next}
      aria-label="Next"
      onClick={() => AudioModel.nextTrack()}
    >
      {Theme.isThemeDark() ? <Next className={styles.svg} /> : <NextL className={styles.svg} />}
    </button>

    <button

      type="button"
      className={styles.volume}>
      {Theme.isThemeDark() ? <Volume className={styles.svg} onClick={() => setState(!state)} /> : <VolumeL className={styles.svg} onClick={() => setState(!state)} />}
      {state ? <div className={styles.volumeBoxActive}>
        <span className={styles.volumeDown}> <VolumeDown className={styles.volumeDown} onClick={() => UserModel.volumeDown()} /></span>
        <input type="range" className={Theme.isThemeDark() ? styles.volumeRange : styles.volumeRangeL} step="10" value={UserModel.volume} min="0" max="100" onChange={(event) => { UserModel.setVolume(event.target.value) }} />
        <span className={styles.volumeUp}><VolumeUp className={styles.volumeUp} onClick={() => UserModel.volumeUp()} /></span>
      </div> : null
      }


    </button>

    <button
      onClick={() => AudioModel.shufflePlaylist(AudioModel.trackIndex)}
      type="button"
      className={styles.randomness}>
       {Theme.isThemeDark() ? <Randomness className={styles.svg} /> : <RandomnessL className={styles.svg} />}
    </button>




    <button
      type="button" onClick={() => {
        navigate(-1)
      }}
      className={styles.collapse}>
      {Theme.isThemeDark() ? <Collapse className={styles.svg} /> : <CollapseL className={styles.svg} />}
    </button>



    {/* <img className={styles.background} src={AudioModel.backgroud} alt="" /> */}
  </div>
  )
};

export default observer(AudioControls)
