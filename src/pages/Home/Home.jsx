import { PlaylistRecommendations, Header, Quote, MusicGenres, Artists, ArtistLine, Footer } from "components";
import { observer } from 'mobx-react-lite'
import {React}  from "react";




function Home() {

  return (
    <div>
      <Header />
      <Quote />
      <MusicGenres />
      <PlaylistRecommendations />
      <ArtistLine />
      <Artists />
      <Footer />
    </div>
  );
}

export default observer(Home)