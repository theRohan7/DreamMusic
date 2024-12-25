import { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = ({children}) => {

    const SONGS_DATA = [
        {
            id: 1,
            title: "Billie Jean",
            plays: "1.040.811.084",
            time: "4:53",
            album: "Thriller 25 Sup...",
            img: "https://via.placeholder.com/50", 
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          },
          {
            id: 2,
            title: "Beat It",
            plays: "643.786.045",
            time: "4:18",
            album: "Thriller 25 Sup...",
            img: "https://via.placeholder.com/50", 
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
          },
          {
            id: 3,
            title: "Smooth Criminal ",
            plays: "407.234.004",
            time: "4:17",
            album: "Thriller 25 Sup...",
            img: "https://via.placeholder.com/50", 
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
          },
          {
            id: 4,
            title: "Don't Stop ",
            plays: "316.391.952",
            time: "6:05",
            album: "Bad 25th Anni...",
            img: "https://via.placeholder.com/50", 
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
          },
          {
            id: 5,
            title: "Rock With ",
            plays: "268.187.218",
            time: "3:40",
            album: "Off The Wall",
            img: "https://via.placeholder.com/50", 
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
          },
    ]

    const [songs, setSongs] = useState(SONGS_DATA);
    const [activeMusic, setActiveMusic] = useState(null);

    return (
        <MusicContext.Provider value={{songs, setSongs, activeMusic, setActiveMusic}}>
            {children}
        </MusicContext.Provider>
    )
}