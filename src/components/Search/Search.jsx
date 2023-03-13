import React from "react";

import styles from "./styles.module.css";
import { SearchRequest, Theme } from "models"
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import search from "assets/icons/light/search.svg";


function Search() {


  function updateSearchQuery(event) {
    SearchRequest.getSearchResult(event.target.value)
  }

  function GetSearchResult() {
    let result = toJS(SearchRequest.result)
    let artists = result.artists
    let albums = result.albums
    let tracks = result.tracks

    return (
      <div className={styles.infoBox}>
        <ul className={styles.listResult}>
          <ul className={styles.list}> Artsts:
            <li className={styles.result}> <img   src={artists[0].cover} alt='cover' className={styles.pic} />  {artists[0].artist}</li>
            <li className={styles.result}> <img   src={artists[1].cover} alt='cover' className={styles.pic} />  {artists[1].artist}</li>
            <li className={styles.result}> <img   src={artists[2].cover} alt='cover' className={styles.pic} />  {artists[2].artist}</li>
          </ul>
          <ul className={styles.list}> Albums:
            <li className={styles.result}> <img src={albums[0].cover} alt='cover' className={styles.pic} />  {albums[0].album}</li>
            <li className={styles.result}> <img src={albums[1].cover} alt='cover' className={styles.pic} />  {albums[1].album}</li>
            <li className={styles.result}> <img src={albums[2].cover} alt='cover' className={styles.pic} />  {albums[2].album}</li>
          </ul>
          <ul className={styles.list}> Tracks:
            <li className={styles.result}> <img src={tracks[0].cover} alt='cover' className={styles.pic} />  {tracks[0].track}</li>
            <li className={styles.result}> <img src={tracks[1].cover} alt='cover' className={styles.pic} />  {tracks[1].track}</li>
            <li className={styles.result}> <img src={tracks[2].cover} alt='cover' className={styles.pic} />  {tracks[2].track}</li>
          </ul>
        </ul>
      </div>

    )

  }


  function ShowSearch() {

    return Theme.isThemeDark() ? styles.search : styles.searchL
  }



  return (
    <div>

      <div className={Theme.isThemeDark() ? styles.search : styles.searchL} style={SearchRequest.openSearch ? {visibility: "hidden"} : {}}>
        <img src={search} alt='search' className={styles.svg} />
        <input type="text" placeholder="Search" className={Theme.isThemeDark() ?  styles.searchInput : styles.searchInputL} onChange={eve => { updateSearchQuery(eve); SearchRequest.setLoading() }} />
        {SearchRequest.loading === true ? null : <GetSearchResult />}
      </div>
    </div>

  )
}

export default observer(Search);
