import React, {  useEffect, useRef, } from "react";
import { useNavigate } from "react-router-dom";
import AudioControls from "./AudioControls";
import Background from "./Background";
import styles from "./styles.module.css";
import { observer } from 'mobx-react-lite'

import { AudioModel } from 'models/Audio'
import { UserModel } from 'models/User'

import { LyricsRequest, Theme } from "models";
import bg from "assets/icons/light/bg.svg";


const AudioPlayer = () => {
  const navigate = useNavigate()
  const trackIndex = AudioModel.trackIndex
  const playlist = AudioModel.getPlaylist()

  const { title, artist, color, image, audioSrc } = playlist[trackIndex];

  const audioRef = useRef(new Audio(audioSrc))
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;
  audioRef.current.volume = UserModel.volume / 100
  const currentPercentage = duration
    ? `${(AudioModel.currentTrackTime / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const runTime = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        AudioModel.nextTrack()
      } else {
        AudioModel.setCurrentTrackTime(audioRef.current.currentTime)
      }
    }, [1000]);
  };

  const rewind = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    AudioModel.setCurrentTrackTime(audioRef.current.currentTime)
  };

  const rewindEnd = () => {
    if (!AudioModel.isPlaying) {
      AudioModel.setIsPlaying(true);
    }
    runTime();
  };


  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
      .filter(a => a)
      .join(':')
  }

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
  }, [trackIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  function Lirycs() {
    return (
      <div className={styles.lyricsBox}>
        <div className={styles.lyrics}>
          {LyricsRequest.result.map((element, index) => {
            return (<span key={index}>{element}<br /></span>)
          })}
        </div>
      </div>
    )

  }

  function Cover() {
    return (<img
      className={styles.artwork}
      src={image}
      alt={`track artwork for ${title} by ${artist}`}
    />)
  }

  return (
    <div className={styles.audioPlayer}>
    <img className={styles.bg} src={bg} alt="#" title="Customize Background" onClick={() => AudioModel.changeBG()}/>
    <div className={styles.trackInfo}>
        {LyricsRequest.openedLirycs ? <Lirycs /> : <Cover />}
        <h3 className={styles.artist} style={{ color: color }}>
            {artist}
          </h3>
        <h2 className={styles.title}>{title}</h2>
        <div  className={Theme.isThemeDark() ? styles.controls : styles.controlsL}>
          <AudioControls
            navigate={navigate}
            track={playlist[trackIndex]}
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
            style={{ background: trackStyling }}
          />
          <span className={Theme.isThemeDark() ? styles.length : styles.lengthL}>{isNaN(duration) ? " " : formatTime(duration.toFixed(0))}</span>
        </div>
        </div>
<img className={styles.background} src={AudioModel.backgroud} alt="#" />

      <Background
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={AudioModel.isPlaying}
      />
        
    </div>




  );
};

export default observer(AudioPlayer)
