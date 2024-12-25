import React, { useContext, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MusicContext } from "../context/MusicContext";

function Music({ song, index }) {

  const {activeMusic, setActiveMusic} = useContext(MusicContext);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: song.id });


  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const isActive = activeMusic?.id === song.id;


  return (
    <div className="flex w-full">
      <div 
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="w-6 flex items-center justify-center cursor-grab text-white"
      >
        ⋮⋮
      </div>
      
      <div
        onClick={() => setActiveMusic(song)}
        style={style}
        className={`flex-1  grid grid-cols-5 items-center cursor-pointer text-[#CFC5C5] transition ${
          isActive
            ? "bg-red-800 text-white border-l-8 border-red-500"
            : "hover:bg-gray-700"
        }`}
      >
        <span className="text-center">{index + 1}</span>
        <div className="flex items-center space-x-4">
          <img src={song.img} alt={song.title} className="w-10 h-10 rounded-md" />
          <span className="font-medium">{song.title}</span>
        </div>
        <span>{song.plays}</span>
        <span>{song.time}</span>
        <span>{song.album}</span>
      </div>
    </div>
    
  );
}

export default Music;
