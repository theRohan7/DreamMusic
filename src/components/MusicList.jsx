import React, { useContext, useState } from "react";
import { MusicContext } from "../context/MusicContext";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Music from "./Music";

function MusicList() {
  const { songs, setSongs } = useContext(MusicContext);

  const [activeMusic, setActiveMusic] = useState(null);

  const getSongsPos = (id) => songs.findIndex((song) => song.id === id);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) return;

    setSongs((song) => {
      const originalPos = getSongsPos(active.id);
      const newPos = getSongsPos(over.id);

      return arrayMove(songs, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="w-full h-[55%] mb-5 ">
      <div className="flex justify-between items-center mb-4 px-28">
        <h2 className="text-[#F6F6F6] font-semibold text-2xl">popular</h2>
        <button className="text-[#CFC5C5] text-medium font-semibold">
          See All
        </button>
      </div>
      <div className="grid grid-cols-5  font-medium text-sm px-24 text-[#CFC5C5] mb-3">
        <span>#</span>
        <span>TITLE</span>
        <span>PLAYING</span>
        <span>TIME</span>
        <span className="text-right">ALBUM</span>
      </div>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <SortableContext items={songs} strategy={verticalListSortingStrategy}>
          {songs.map((song, index) => (
            <Music
              key={song.id}
              song={song}
              index={index}
              activeMusic={activeMusic}
              setActiveMusic={setActiveMusic}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default MusicList;
