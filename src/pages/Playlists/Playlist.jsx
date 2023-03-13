import { Footer, Header, Playlist } from "components";
import styles from "./styles.module.css";
import { PlaylistModel } from "models";
import { useLocation } from "react-router-dom";
import { NotFound } from "pages/NotFound";
import { observer } from 'mobx-react-lite'
import {React}  from "react";



const Playlists = () => {
  const location = useLocation()
  if (location.pathname.replace('/playlist/', '') === PlaylistModel.getPlayListPath()) {
    return (
      <><Header />
        <div className={styles.playlists} >
          <Playlist />
        </div>
        <Footer/>
      </>
    );
  } else {
    return <NotFound />
  }

}


export default observer(Playlists)