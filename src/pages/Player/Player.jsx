import { observer } from 'mobx-react-lite'

import AudioPlayer from 'components/AudioPlayer/AudioPlayer';
import styles from './styles.module.css'
import { UserModel } from 'models'
import {React}  from "react";

function Player() {

    return (
        <div className="Player">
            {UserModel.isLoggedIn() ? <AudioPlayer  /> : null}
        </div>
    );
}

export default observer(Player)