import React, { useContext, useState } from 'react'
import { MusicContext } from '../context/MusicContext'

function MusicList() {
    const {SONGS_DATA} = useContext(MusicContext)
    const [activeMusic, setActiveMusic] = useState(null)




  return (
    <div className='w-full h-[55%] mb-5 '>
        <div className='flex justify-between items-center mb-4 px-28'>
            <h2 className='text-[#F6F6F6] font-semibold text-2xl' >popular</h2>
            <button className='text-[#CFC5C5] text-medium font-semibold' >See All</button>
        </div>
        <div className="grid grid-cols-5  font-medium text-sm px-24 text-[#CFC5C5] mb-3">
        <span>#</span>
        <span>TITLE</span>
        <span>PLAYING</span>
        <span>TIME</span>
        <span>ALBUM</span>
      </div>
      {SONGS_DATA.map((song, index) => (
        <div
          key={song.id}
          onClick={() => setActiveMusic(song.id)}
          className={`grid grid-cols-5 items-center cursor-pointer  transition ${
            activeMusic === song.id
              ? "bg-red-800 text-white border-l-8 border-red-500"
              : "hover:bg-gray-800 text-gray-300"
          }`}
        >
          <span className="text-center">{index + 1}</span>
          <div className=" flex items-center space-x-4">
            <img
              src={song.cover}
              alt={song.title}
              className="w-10 h-10 rounded-md"
            />
            <span className="font-medium">{song.title}</span>
          </div>
          <span>{song.plays}</span>
          <span>{song.time}</span>
          <span>{song.album}</span>
        </div>
      ))}
       
    </div>
  )
}

export default MusicList
