import React, {useEffect, useRef, } from "react";
import { useNavigate } from "react-router-dom";
import AudioControls from "./AudioControls";
import { AudioModel } from 'models/Audio'
import { UserModel } from 'models/User'
import { observer } from 'mobx-react-lite'

import styles from "./styles.module.css";
import { Theme } from "models";


const MiniPlayer = () => {

  const navigate = useNavigate()
  const playlist = AudioModel.getPlaylist()

  const { title, artist, image, audioSrc } = playlist[AudioModel.getTrackIndex()]

  const audioRef = useRef(new Audio(audioSrc));

  audioRef.current.volume = UserModel.volume / 100
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;



  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
      .filter(a => a)
      .join(':')
  }

  const runTime = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        AudioModel.nextTrack()
      } else {
        AudioModel.setCurrentTrackTime(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const rewind = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    AudioModel.setCurrentTrackTime(audioRef.current.currentTime);
    if (audioRef.current.ended) {
      AudioModel.nextTrack()
    }
  };

  const rewindEnd = () => {
    if (!AudioModel.isPlaying) {
      AudioModel.setIsPlaying(true);
    }
    runTime();
  };

  useEffect(() => {
    if (AudioModel.isPlaying) {
      isReady.current = true
      audioRef.current.play();
      if (AudioModel.currentTrackTime !== 0) {
        audioRef.current.currentTime = AudioModel.currentTrackTime
      } else {
        runTime();
      }

    } else {
      audioRef.current.pause();
    }
  }, [AudioModel.isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    AudioModel.setCurrentTrackTime(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play();
      AudioModel.setIsPlaying(true);
      runTime();
    }
  }, [AudioModel.getTrackIndex()]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className={Theme.isThemeDark() ? styles.audioPlayer : styles.audioPlayerL}>

      <div className={styles.trackInfo}>
        <img
          className={styles.cover}
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h3 className={styles.artist}>{artist}</h3>
        <h2 className={Theme.isThemeDark() ? styles.title : styles.titleL}>{title}</h2>
      </div>

      <div className={styles.controls}>
        <AudioControls
          navigate={navigate}
          track={playlist[AudioModel.getTrackIndex()]}
        />
        <span className={Theme.isThemeDark() ? styles.time : styles.timeL}>{formatTime(AudioModel.currentTrackTime.toFixed(0))} </span>

        <input
          type="range"
          value={AudioModel.currentTrackTime}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className={Theme.isThemeDark() ? styles.progress : styles.progressL}
          onChange={(e) => rewind(e.target.value)}
          onMouseUp={rewindEnd}
          onKeyUp={rewindEnd}
        />

        <span className={Theme.isThemeDark() ? styles.length : styles.lengthL}>{isNaN(duration) ? " " : formatTime(duration.toFixed(0))}</span>

      </div>


    </div>
  );
};

export default observer(MiniPlayer)
