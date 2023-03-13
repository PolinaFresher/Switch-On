import React, { useState } from "react";

import styles from "./styles.module.css";

const GENRES = [
  {
    genre: "Electronic",
    description:
      "A large set of predominantly popular and dance genres in which synthesizers and other electronic instruments are the primary sources of sound.",
  },
  {
    genre: "Indie",
    description:
      "Another offshoot from rock and punk, indie music came from so-called ‘independent’ artists and bands who were not part of the mainstream music industry machine. The style of indie music has typically remained with a primary rock band set-up.",
  },
  
  {
    genre: "Alternative",
    description:
      "Alternative rock is a category of rock music that emerged from the independent music underground of the 1970s and became widely popular in the 1990s.Alternative refers to the genre's distinction from mainstream or commercial rock or pop music.",
  },
  

  {
    genre: "Rock",
    description:
      'A genre of popular music that originated as "rock and roll" in the United States in the 1950s, and developed into a range of different styles in the 1960s and later. Compared to pop music, rock places a higher degree of emphasis on musicianship.',
  },
  {
    genre: "Pop",
    description:
      "A genre of popular music that originated in the West during the 1950s and 1960s. Pop music is eclectic, often borrowing elements from urban, dance, rock, Latin, country, and other styles. Songs are typically short to medium-length with repeated choruses, melodic tunes, and hooks.",
  },
  {
    genre: "Dance",
    description:
      "Dance music is a far more modern genre that could also be broadly categorised as electronic music. With roots in disco music combined with the evolution of pop music, electronic dance music took off in the late 1980’s and early ’90’s.",
  },
  {
    genre: "Trance",
    description:
      "Offshoot of electronic dance music, trance features heavily synthesised lead lines that have to induce a trance-like state in dancers. The euphoric nature of techno music is meant to take listeners on a journey.",
  },
  {
    genre: "House",
    description:
      "House is a music genre characterized by a repetitive (4/4) beat and a typical tempo of 120 beats per minute. It was created by DJs and music producers from Chicago's underground club culture in the late 1970s,as DJs began altering disco songs to give them a more mechanical beat.",
  },
  {
    genre: "Folk",
    description:
      "Folk is a very traditional genre.Traditional folk music is orally passed down over time and often has no author. However, modern artists can still be labelled as Folk artists with their original songs.",
  },

  {
    genre: "Hip-hop",
    description:
      "Hip hop or rap music formed in the United States in the 1970s and consists of stylized rhythmic music that commonly accompanies rhythmic and rhyming speech.",
  },

  {
    genre: "Techno",
    description:
      "Techno is a genre of electronic dance music which is generally produced for use in a continuous DJ set, with tempo often varying between 120 and 150 beats per minute. The central rhythm is in common time (4/4) and characterized by a repetitive four on the floor beat.",
  },
  {
    genre: "Jazz",
    description:
      "Historically started in New Orleans in the early 1900s, Jazz typifies musical flexibility not seen by many other genres. Featuring a mix of rhythms and tempos as well as a focus on soloing, jazz also has a huge range of potential instrumental structures and setups.",
  },
  {
    genre: "Blues",
    description:
      "Blues developed in the 19th century and was originally played by a single performer singing with a guitar or banjo. By the 1960s, The Blues had evolved significantly along with the instruments used electric guitars, bass and drums and made its way across the Atlantic to the UK and beyond."
  },
  {
    genre: "Reggae",
    description:
      "Originating in Jamaica in the 1960s and taking the world by storm through the work of Bob Marley, reggae is a fusion of traditional Jamaican folk music with jazz and R&B.Offbeat rhythms and staccato chords are common musical themes.",
  },
  {
    genre: "Rap",
    description:
      "Rap describes a style of vocal delivery. However, it can be rightly regarded as a musical genre due to its massive popularity. Developing alongside hip-hop in the United States, rap evolved from MCs toasting and deejaying in Jamaican dancehall music.",
  }
];



function MusicGenres() {
  const [active, setActive] = useState();

  const open = (index) => {
    active === index ? setActive(null) : setActive(index);
  };

  function Genre({ genre, index }) {
    return (
      <div
        className={styles.genre}
        onClick={() => open(index)} >
        <h5 className={styles.name}> {genre.genre} </h5>
        <p
          className={
            active === index ? styles.description : styles.hide
          } >
          {genre.description}
        </p>
      </div>
    );
  }
  return (
    <div className={styles.genres}>
      <div className={styles.carousel}>
        <div className={styles.scroll}>
          <ul className={styles.genresList}>
            {GENRES.map((genre, index) => {
              return <Genre genre={genre} index={index} key={index} />
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MusicGenres;
