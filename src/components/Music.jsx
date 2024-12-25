import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Music({ song, index, activeMusic, setActiveMusic }) {


  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: song.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      onClick={() => setActiveMusic(song.id)}
      className={`grid grid-cols-5 items-center cursor-pointer text-[#CFC5C5]  transition ${
        activeMusic === song.id
          ? "bg-red-800 text-white border-l-8 border-red-500"
          : "hover:bg-gray-700"
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
  );
}

export default Music;
