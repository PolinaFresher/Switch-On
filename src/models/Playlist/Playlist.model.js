import { makeAutoObservable, toJS } from 'mobx'

const STORAGE_PLAYLIST = 'playlist'
const STORAGE_PLAYLIST_NAME = 'playlistName'
const STORAGE_PLAYLIST_PATH = 'playlistPath'
class PlaylistModel {
    playList = ''
    playListName = ''
    playListPath = ''

    constructor() {
        makeAutoObservable(this)
        this.init()
    }

    init() {
        if (localStorage.getItem(STORAGE_PLAYLIST)) {
            const values = JSON.parse(localStorage.getItem(STORAGE_PLAYLIST))
            this.playList = values
        } else {localStorage.setItem(STORAGE_PLAYLIST, JSON.stringify(this.playList))}
        if (localStorage.getItem(STORAGE_PLAYLIST_NAME)) {
            const values = JSON.parse(localStorage.getItem(STORAGE_PLAYLIST_NAME))
            this.playListName = values
        } else {localStorage.setItem(STORAGE_PLAYLIST_NAME, JSON.stringify(this.playListName))}
        if (localStorage.getItem(STORAGE_PLAYLIST_PATH)) {
            const values = JSON.parse(localStorage.getItem(STORAGE_PLAYLIST_PATH))
            this.playListPath = values
        } else {localStorage.setItem(STORAGE_PLAYLIST_PATH, JSON.stringify(this.playListPath))}
    }

    updateList(list,name,path) {
    this.playList = list
    this.playListName = name
    this.playListPath = path
    localStorage.setItem(STORAGE_PLAYLIST, JSON.stringify(list))
    localStorage.setItem(STORAGE_PLAYLIST_NAME, JSON.stringify(name))
    localStorage.setItem(STORAGE_PLAYLIST_PATH, JSON.stringify(path))
    }
    getPlayList(){
        return toJS(JSON.parse(localStorage.getItem(STORAGE_PLAYLIST)))
    }
    getPlayListName(){
        return toJS(JSON.parse(localStorage.getItem(STORAGE_PLAYLIST_NAME)))
    }   
    getPlayListPath(){
        return toJS(JSON.parse(localStorage.getItem(STORAGE_PLAYLIST_PATH)))
    }
    clearPlaylistModal(){
    this.playList = ''
    this.playListName = ''
    this.playListPath = ''
    localStorage.setItem(STORAGE_PLAYLIST, JSON.stringify(this.playList))
    localStorage.setItem(STORAGE_PLAYLIST_NAME, JSON.stringify(this.playListName))
    localStorage.setItem(STORAGE_PLAYLIST_PATH, JSON.stringify(this.playListPath))
    }

   
}

export default new PlaylistModel()
