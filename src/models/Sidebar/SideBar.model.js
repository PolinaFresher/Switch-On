import { makeAutoObservable } from 'mobx'

class SideBarModal {
    open = false

    constructor() {
        makeAutoObservable(this)
    }

    updateState() {
        this.open = !this.open
    }
}

export default new SideBarModal()
