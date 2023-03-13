import { makeAutoObservable } from 'mobx'

class  LyricsRequest{
  result = {}
  openedLirycs = false

  constructor() {
    makeAutoObservable(this)

  }

  updateState() {
    this.openedLirycs = !this.openedLirycs 
  }

  getLirycs(id) {
    console.log(id)

    if (id.length >= 4) {
      this.result = []
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fb425da41fmsh458b473b1bb6f02p1c64fajsne9a70eba77dc',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };


      fetch(`https://spotify23.p.rapidapi.com/track_lyrics/?id=${id}`, options)
        .then(response => response.json())
        .then((data) => {
          let lines = []
          data.lyrics.lines.forEach(element => {
            lines.push(element.words)
             });
             this.result = lines
             this.updateState()
        })

    }

  }
  
}


export default new LyricsRequest()
