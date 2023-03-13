import { makeAutoObservable } from 'mobx'

class SearchRequest {
  result = {}

  artists = ""
  albums = ""
  tracks = ""

  loading = true

  openSearch = false

  constructor() {
    makeAutoObservable(this)

  }

  setLoading(){
    this.loading = true
  }
  showSearch(){
    this.openSearch = !this.openSearch
  }

  getSearchResult(query) {

    if (query.length >= 3) {
      this.result = []
      query.trim()
      let request = query.replace(/ /g, '%20');
      console.log(request)
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fb425da41fmsh458b473b1bb6f02p1c64fajsne9a70eba77dc',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

      fetch(`https://spotify23.p.rapidapi.com/search/?q=${request}&type=multi&offset=0&limit=3&numberOfTopResults=5`, options)
        .then((response) => response.json())
        .then((data) => {
          let artists = []
          data.artists.items.forEach(element => {
            let info = {}
            info.artist = element.data.profile.name
            if (element.data.visuals.avatarImage !== null){
              info.cover = element.data.visuals.avatarImage.sources[1].url
            } else {
              info.cover = null
            }
            
           
            artists.push(info)
          });
          let albums = []
          data.albums.items.forEach(element => {
            let info = {}
            let artistName = ''
            element.data.artists.items.forEach( item => {
              artistName = artistName + ' ' + item.profile.name
            } )
            info.album = artistName + " - " + element.data.name
            info.cover = element.data.coverArt.sources[1].url
            albums.push(info)
          });
          let tracks = []
          data.tracks.items.forEach(element => {
            let info = {}
            let trackName = element.data.name
            let artist = ""
            element.data.artists.items.forEach( item => {
              artist = artist + ' ' + item.profile.name
            } )
            info.track = artist + " - " + trackName
            info.cover = element.data.albumOfTrack.coverArt.sources[1].url
            tracks.push(info)
          });

          this.result = {artists : artists, tracks : tracks, albums : albums }
          this.loading = false
        })

      
      }
  }
}


export default new SearchRequest()
