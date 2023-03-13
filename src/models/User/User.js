import { makeAutoObservable, toJS } from 'mobx'

import Users from './Users'

const STORAGE_USER = 'user'
const STORAGE_USERS = 'users'

class UserModel {

    email = ''

    password = ''

    userName = ''

    logo = ''

    playlists = ''

    volume = 80

    constructor() {
        makeAutoObservable(this)

        this.init()
    }
    init() {

        
        if (!localStorage.getItem(STORAGE_USERS)) {
            localStorage.setItem(STORAGE_USERS, JSON.stringify(Users))
        }

        if (localStorage.getItem(STORAGE_USER)) {
            const values = JSON.parse(localStorage.getItem(STORAGE_USER))
            this.fromJSON(values)
        }
    }

    setVolume(value) {
        this.volume = value
        this.setVolumeStorage()
    }

    volumeUp() {
        this.volume >= 100 ? this.volume = 100 : this.volume = this.volume + 10
        this.setVolumeStorage()
    }
    volumeDown() {
        this.volume <= 0 ? this.volume = 0 : this.volume = this.volume - 10
        this.setVolumeStorage()
    }

    setVolumeStorage() {
        localStorage.setItem(STORAGE_USER, JSON.stringify(this))
    }

    fromJSON({ email, password, userName, logo, playlists, volume }) {
        this.email = email
        this.password = password
        this.userName = userName
        this.logo = logo
        this.playlists = playlists
        this.volume = parseInt(volume)
    }

    signIn(email, password) {
        JSON.parse(localStorage.getItem(STORAGE_USERS)).forEach(element => {
            if (element.email === email && element.password === password) {
                this.fromJSON(element)
                localStorage.setItem(STORAGE_USER, JSON.stringify(this))
            }

        });
    }

    signUp(values) {
        this.fromJSON(values)
        localStorage.setItem(STORAGE_USER, JSON.stringify(values))
        // const arr = JSON.parse(localStorage.getItem(STORAGE_USERS))
    }

    logOut() {
        this.email = ''
        this.password = ''
        this.userName = ''
        this.logo = ''
        this.playlists = ''
        this.volume = 0
        localStorage.removeItem(STORAGE_USER)
    }

    isLoggedIn() {
        return Boolean(this.email)
    }
    getUserPlaylists() {
        return toJS(this.playlists)
    }

    searchList(lists, searchingListName, track) {
        lists.map((list) => {
            if (list[Object.keys(list)[1]] === searchingListName) {
                list[Object.keys(list)[0]].push(track)
            }
        })
        return lists
    }

    addToPlaylist(playlistName, track) {
        const values = JSON.parse(localStorage.getItem(STORAGE_USER))
        this.playlists = this.searchList(values.playlists, playlistName, track)
        localStorage.setItem(STORAGE_USER, JSON.stringify(this))

        const arr = JSON.parse(localStorage.getItem(STORAGE_USERS))
        JSON.parse(localStorage.getItem(STORAGE_USERS)).forEach(element => {
            if (element.email === this.email && element.password === this.password) {
                element.email = this.email
                element.password = this.password
                element.logo = this.logo
                element.playlists = this.playlists
                element.userName = this.userName
            }

        });
        localStorage.setItem(STORAGE_USERS, JSON.stringify(arr))
    }

    isSongInFavorites(song) {
        const lists = JSON.parse(localStorage.getItem(STORAGE_USER))
        const favourites = lists[Object.keys(lists)[4]][0][Object.keys(lists[Object.keys(lists)[4]][0])[0]]
        let result
        favourites.forEach(track => {
            if (track.artist === song.artist && track.title === song.title) {
                result = true;
            }

        });
        return result ? true : false
    }

    changeInfo({ email, password, userName }) {
        const arr = JSON.parse(localStorage.getItem(STORAGE_USERS))
        arr.forEach(element => {
            if (element.email === this.email && element.password === this.password) {
                let _ =  email === "" ? null: element.email = email
                let __ =  password === "" ? null :  element.password = password
                let ___ =  userName === "" ? null: element.userName = userName
                element.logo = this.logo
                element.playlists = this.playlists
                element.volume = this.volume
            }

        });
        localStorage.setItem(STORAGE_USERS, JSON.stringify(arr))
        let _ =  email === "" ? null: this.email = email
        let __=  password === "" ? null :  this.password = password
        let ___ =  userName === "" ? null: this.userName = userName
        localStorage.setItem(STORAGE_USER, JSON.stringify(this))

    }

}

export default new UserModel()