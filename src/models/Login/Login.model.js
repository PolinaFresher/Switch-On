import { makeAutoObservable } from 'mobx'

class LoginModal {
    open = false

    constructor() {
        makeAutoObservable(this)
    }

    updateState() {
        this.open = !this.open
    }
}

export default new LoginModal()
