import { makeAutoObservable } from 'mobx'
import pic from "assets/images/back1.jpg";
import pic2 from "assets/images/back2.jpg";
import pic3 from "assets/images/back3.jpg";
import pic4 from "assets/images/back4.jpg";
import pic5 from "assets/images/back5.jpg";
import pic6 from "assets/images/back6.jpg";
import pic7 from "assets/images/back7.jpg";
import pic8 from "assets/images/back8.jpg";
import pic9 from "assets/images/back9.jpg";
import pic10 from "assets/images/back10.jpg"
import pic24 from "assets/images/back24.jpg";
import pic23 from "assets/images/back23.jpg";
import pic22 from "assets/images/back22.jpg";
import pic21 from "assets/images/back21.jpg";
import pic20 from "assets/images/back20.jpg";
import pic19 from "assets/images/back19.jpg";
import pic18 from "assets/images/back18.jpg";
import pic17 from "assets/images/back17.jpg";
import pic16 from "assets/images/back16.jpg";
import pic15 from "assets/images/back15.jpg";
import pic14 from "assets/images/back14.jpg";
import pic13 from "assets/images/back13.jpg";
import pic12 from "assets/images/back12.jpg";
import pic11 from "assets/images/back11.jpg";

import { PlaylistOne } from 'components/AudioPlayer/tracks'

class AudioModel {
    currentPlaylist = PlaylistOne
    trackIndex = 0
    currentTrackTime = 0
    isPlaying = false
    backgroud = pic
    bgState = false

    constructor() {
        makeAutoObservable(this)
    }
   

    changePlayList(playlist) {
        this.currentPlaylist = playlist
    }
    

    getPlaylist() {
        return JSON.parse(JSON.stringify(this.currentPlaylist))
    }

    getTrackIndex(){
        return this.trackIndex
    }



    shufflePlaylist(trackIndex) {
        let shiftedList = this.currentPlaylist
        const currentSong = this.currentPlaylist.at(trackIndex)
        shiftedList.splice(trackIndex, 1);
        shiftedList.sort(() => Math.random() - 0.5);
        shiftedList.splice(trackIndex, 0, currentSong)
        this.currentPlaylist = shiftedList
    }

    setTrackIndex(newIndex) {
        this.trackIndex = newIndex
    }

    setCurrentTrackTime(currentTrackTime) {
        this.currentTrackTime = currentTrackTime
    }

    setIsPlaying(state) {
        this.isPlaying = state
    }

    nextTrack() {
        if (this.trackIndex < this.currentPlaylist.length - 1) {
            this.trackIndex = this.trackIndex + 1
        } else {
            this.trackIndex = 0;
        }
        this.currentTrackTime = 0
    }
    prevTrack() {
        if (this.trackIndex - 1 < 0) {
            this.trackIndex = this.currentPlaylist.length - 1;
        } else {
            this.trackIndex = this.trackIndex - 1;
        }
    }
    changeBG(){
        console.log(true)
        let bg = [pic,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14,
          pic15,pic16,pic17,pic18,pic19,pic20,pic21,pic22,pic23,pic24]
          this.backgroud =  bg[Math.floor(Math.random()*bg.length)];
          this.bgState = !this.backgroud
      }
}

export default new AudioModel()
