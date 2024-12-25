import { createContext } from "react";




export const MusicContext = createContext();


export const MusicProvider = ({children}) => {

    const SONGS = [
        {
            id: 1,
            title: 'song1',
            src: 'song1.mp3',
        },
        {
            id: 2,
            title: 'song2',
            src: 'song2.mp3',
        },
        {
            id: 3,
            title: 'song3',
            src: 'song3.mp3',
        },
        {
            id: 4,
            title: 'song4',
            src: 'song4.mp3',
        },
        {
            id: 5,
            title: 'song5',
            src: 'song5.mp3',
        }
    ]

    return (
        <MusicContext.Provider value={{SONGS}}>
            {children}
        </MusicContext.Provider>
    )
}