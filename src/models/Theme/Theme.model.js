import { makeAutoObservable } from 'mobx'

const THEME = "theme"
const Color = "color"

class Theme {
    theme = ''
    color = ""

    constructor() {
        makeAutoObservable(this)
        this.init()
    }

    init(){
        this.theme = localStorage.getItem(THEME) || 'dark'
        this.color = localStorage.getItem(Color) || '#2d2b30'
    }

    getTheme() {
        return this.theme
    }

    changeTheme(){
        if (this.theme === 'light'){
            this.theme = "dark"
            this.color = "#2d2b30"
            
        } else {
            this.theme = 'light'
            this.color = "linen"
        }
        localStorage.setItem(THEME, this.theme);
        localStorage.setItem(Color, this.color);
    }
    
    isThemeDark(){
        return this.theme === 'dark'
    }
    getColor(){
        return this.color
    }

}

export default new Theme()
