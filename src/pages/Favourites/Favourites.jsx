import React from "react";
import { Header, Playlist, Footer} from "components";
import styles from "./styles.module.css";
// import create from "assets/icons/dark/create.svg";
import { observer } from 'mobx-react-lite'




const Favourites = () => {

  return (
    <> 
    <Header />
    <Playlist />
    <Footer/>
    </>

  );
}

export default observer(Favourites)
