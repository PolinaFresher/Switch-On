import { Theme } from "models";
import React from "react";

import styles from "./styles.module.css";


const Musicians = [
  {
    background:
      "url(https://i.guim.co.uk/img/media/a8e8ff6f2277ce14b4bf8fd74bab8731c589f052/0_275_8256_4954/master/8256.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bb7a5a0c0e872e13acb4be840ece9304)",
    title: "Placebo",
  },
  {
    background:
      "url(https://media.gq-magazine.co.uk/photos/5d13aac19fa601ff63839c77/master/pass/gettyimages-1034203986-moby.jpg)",
    title: "Moby",
  },
  {
    background:
      "url(https://www.breizh-info.com/wp-content/uploads/2019/06/m83-live.jpg)",
    title: "M83",
  },

  {
    background:
      "url(https://cdn.apollo.audio/one/media/6334/0e5c/6fe2/b504/f527/c3c3/depeche-mode-announcement.jpg?quality=80&format=jpg&crop=0,0,675,1200&resize=crop)",
    title: "Depeche Mode",
  },
  {
    background:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4dBLSm1OIdmqo3hEbr17VjvZ5CEpbUzUvA&usqp=CAU)",
    title: "Massive Attack",
  },
  {
    background:
      "url(https://media.npr.org/assets/img/2019/04/26/snowpatrol-press-photo_wide-d760637956683391210389527a7b76a3e289c6ba-s1100-c50.jpg)",
    title: "Snow Patrol",
  },

  {
    background:
      "url(https://www.eventworld.co/blob/images/pg/bastille_cffdd_1000@2x.jpg)",
    title: "Bastille",
  },

  {
    background:
      "url(https://www.musikblog.de/wp-content/uploads/2018/10/The_Prodigy_Credit_Matthias_Hombauer_The_Prodigy.jpg)",
    title: "The Prodigy",
  },
  {
    background:
      "url(https://blog.ticketmaster.de/wp-content/uploads/2021/02/the-weeknd-tour-termine-2022-deutschland-kartent.jpg)",
    title: "The Weekend",
  },
  {
    background:
      "url(https://www.coupdemainmagazine.com/sites/default/files/styles/hero_image/public/article/12899/hero-12899-874021917.jpg?itok=4m2nbM8r)",
    title: "London Grammar",
  },

  {
    background:
      "url(https://www.billboard.com/wp-content/uploads/media/Imagine-Dragons-press-photo-by-Eliot-Lee-Hazel-2018-billboard-1548.jpg)",
    title: "Imagine Dragons",
  },
  {
    background:
      "url(https://numero.twic.pics/2021-12/thumb-woodkid-goliath-jeux-olympiques-tokyo-desierto-s16-numero-magazine.jpg)",
    title: "Woodkid",
  },

  {
    background:
      "url(https://media.vogue.co.uk/photos/5d544f687e26090008fa87c7/master/pass/credit-vincent-haycock-2.jpg)",
    title: "Florence + The Machine",
  },
  {
    background:
      "url(https://assets.deutschlandfunk.de/FILE_f131f71504b7d1f33c4169bbc26399f7/1280x720.jpg?t=1597645397557)",
    title: " Fink",
  },
  {
    background:
      "url(https://testpress.news/wp-content/uploads/2017/10/Crystal-Castles.jpg)",
    title: "Crystal Castles ",
  },
  {
    background:
      "url(https://img.icity.life/upload/2022/174/448/b8e/full/448b8e92a1972b26bb0464d29e70a247.jpg)",
    title: "Lumen",
  },
  {
    background:
      "url(https://s5.afisha.ru/mediastorage/10/f7/c45b3b2d150048b0a9a14c68f710.jpg)",
    title: "The Neighbourhood",
  },
  {
    background:
      "url(https://i.natgeofe.com/n/16df64db-d138-4fe4-b537-4a5db584131c/linkinpark.jpg)",
    title: "Linkin Park",
  },
  

  {
    background:
      "url(https://www.billboard.com/wp-content/uploads/media/02-the-xx-beat-5ag2x-bb1-2017-billboard-1240.jpg)",
    title: "The XX",
  },

  {
    background:
      "url(https://www.udiscovermusic.com/wp-content/uploads/2019/10/Chemical-Brothers-Surrender-Press-Shot-25-CREDIT-Kevin-Westenberg.jpg)",
    title: "The Chemical Brothers",
  },
  {
    background:
      "url(https://i.discogs.com/p8U3lLWQoDgUP-pUcifWK2FOEnwa3h_yW7WtEaoRGys/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwNjY2/LTE1MzgxMjEzNjAt/OTg3NC5qcGVn.jpeg)",
    title: "VNV Nation",
  },
  {
    background:
      "url(https://www.classicrockhistory.com/wp-content/uploads/2021/06/640px-Foster_the_People_at_SXSW_2011.jpeg)",
    title: "Foster The People",
  },
  

 
  {
    background:
      "url(https://i.pinimg.com/originals/fd/e8/e4/fde8e4609d2665fabee23985df16d90b.jpg)",
    title: " MGMT",
  },

  {
    background:
      "url(https://i.scdn.co/image/ab6761610000e5eb611ea1a2878a76f879279317)",
    title: "WOODJU",
  },
 
];

function Artists() {
  
  function Artist({ artist, index }) {
    return (
      <div
        key={index}
        className={Theme.isThemeDark() ? styles.artist : styles.artistL}
        alt="artist"
        data-title={artist.title}
        style={{ backgroundImage: artist.background }}
      ></div>
    );
  }
  return (
    <div className={styles.artists}>
      <div className={styles.container}>
        {Musicians.map((artist, index) => {
          return <Artist artist={artist} index={index} key={index} />;
        })}
      
      </div>
    </div>
  );
}

export default Artists;
