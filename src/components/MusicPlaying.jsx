import React, { useEffect, useState, useRef, useContext } from 'react';
import { Howl } from 'howler';
import { Play, Pause, SkipBack, SkipForward, Repeat } from 'lucide-react';
import { MusicContext } from '../context/MusicContext';

function MusicPlaying() {
  const { activeMusic } = useContext(MusicContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const soundRef = useRef(null);
  const seekRef = useRef(null);

  useEffect(() => {
    if (activeMusic?.src) {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      
      soundRef.current = new Howl({
        src: [activeMusic.src],
        html5: true,
        onload: () => {
          setDuration(soundRef.current.duration());
        },
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
        onend: () => {
          if (!isLooping) {
            setIsPlaying(false);
            setCurrentTime(0);
          }
        },
      });
    }
  }, [activeMusic]);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.loop(isLooping);
    }
  }, [isLooping]);

  const togglePlay = () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    setCurrentTime(seekTime);
    soundRef.current?.seek(seekTime);
  };

  // progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      if (soundRef.current && isPlaying) {
        setCurrentTime(soundRef.current.seek());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="playing w-[20%] flex flex-col items-center justify-end">
      <div className="bg-[#6B0000] h-[45%] w-[85%] my-8 rounded-xl p-4 flex flex-col items-center">
        <p className="text-white text-sm font-semibold mb-5">Now Playing</p>
        {activeMusic ? (
          <>
            <img src={activeMusic.img} alt="" className="mb-3 w-52 h-24 rounded-lg object-cover" />
            <p className="text-white text-medium font-semibold mb-1">{activeMusic.title}</p>
            <p className="text-white text-sm font-medium mb-5">Michael Jackson</p>
            
            <div className="w-full px-2 flex items-center justify-between text-white text-xs mt-1 gap-2">
            <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                ref={seekRef}
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
              
              <span>{formatTime(duration)}</span>
              
            </div>

            <div className="flex items-center space-x-6 mt-3">
              <button 
                onClick={() => setIsLooping(!isLooping)}
                className={`text-white ${isLooping ? 'text-red-500' : ''}`}
              >
                <Repeat size={20} />
              </button>
              <button 
                onClick={() => soundRef.current?.seek(0)}
                className="text-white"
              >
                <SkipBack fill='white' size={24} />
              </button>
              <button 
                onClick={togglePlay}
                className="text-white bg-[#480000] p-2 rounded-lg"
              >
                {isPlaying ? <Pause fill='white' size={24} /> : <Play fill='white' size={24} />}
              </button>
              <button 
                onClick={() => soundRef.current?.seek(duration)}
                className="text-white"
              >
                <SkipForward fill='white' size={24} />
              </button>
              <div className="w-4" /> 
            </div>
          </>
        ) : (
          <p className="text-white">Select a song to play</p>
        )}
      </div>
    </div>
  );
}

export default MusicPlaying;
