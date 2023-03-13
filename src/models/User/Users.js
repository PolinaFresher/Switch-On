import adminLogo from "assets/images/dcd19417b51c6de9.png";
import { Favourites, Happy, Sad, PlaylistOne,  Electronic } from "components/AudioPlayer/tracks";
const Users = [
  {
    email: "admin@test.com",
    password: "Admin1234*",
    userName: "Admin",
    logo: adminLogo,
    playlists: [{ Favourites, name: 'Favourites', covers : ["https://avatars.yandex.net/get-music-content/5853241/216fe742.a.21714516-1/400x400","https://avatars.yandex.net/get-music-content/95061/8896e392.a.5911366-1/400x400","https://avatars.yandex.net/get-music-content/33216/a660ca5c.a.3836022-1/400x400","https://avatars.yandex.net/get-music-content/42108/69140f34.a.45396-1/400x400"]}],
    volume: 80,
  },
  {
    email: "test@test.com",
    password: "Test1234*",
    userName: "Polina",
    logo: adminLogo,
    playlists: [{ Favourites, name: 'Favourites', covers : ["https://avatars.yandex.net/get-music-content/5853241/216fe742.a.21714516-1/400x400","https://avatars.yandex.net/get-music-content/95061/8896e392.a.5911366-1/400x400","https://avatars.yandex.net/get-music-content/33216/a660ca5c.a.3836022-1/400x400","https://avatars.yandex.net/get-music-content/42108/69140f34.a.45396-1/400x400"]},
    { Happy, name: "Cheer up!" , covers : ["https://avatars.yandex.net/get-music-content/32236/14876aae.a.3050046-1/400x400","https://avatars.yandex.net/get-music-content/34131/9b35a54a.a.3783189-1/m1000x1000","https://avatars.yandex.net/get-music-content/5309210/51434154.a.17061904-1/400x400","https://avatars.yandex.net/get-music-content/4467280/781394b6.a.204649-4/400x400"]}, 
    { Sad, name: "Cry a river!",  covers : ["https://avatars.yandex.net/get-music-content/28589/8618445a.a.32761-1/400x400","https://avatars.yandex.net/get-music-content/4076749/fb73a09e.a.13767036-1/400x400","https://avatars.yandex.net/get-music-content/33216/abf1eb78.a.30150-1/400x400","https://avatars.yandex.net/get-music-content/2390047/66a2c9e1.a.6662917-2/400x400"]},
    { PlaylistOne, name: "Sundry",  covers : ["https://avatars.yandex.net/get-music-content/32236/876f5495.a.169305-1/m1000x1000","https://avatars.yandex.net/get-music-content/5503671/0faed94c.a.20536997-2/m1000x1000","https://avatars.yandex.net/get-music-content/5413882/900975ad.a.23724289-1/m1000x1000","https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/m1000x1000"]},
    { Electronic, name: "Rave wave",  covers : ["https://avatars.yandex.net/get-music-content/2110367/8506c407.a.9723229-1/400x400","https://avatars.yandex.net/get-music-content/6447985/27d03a0e.a.22911022-1/400x400","https://avatars.yandex.net/get-music-content/2789402/64448003.a.12832168-1/400x400","https://avatars.yandex.net/get-music-content/5878680/c3b5f8f1.a.24174048-1/400x400"]}],
    volume: 80,
  }
]

export default Users