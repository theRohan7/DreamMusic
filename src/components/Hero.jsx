import React from "react";

import {
  BG_IMG_URI,
  blueTickLogo,
  MJ_IMG_URI,
  searchLogo,
} from "../utils/export";
import MusicList from "./MusicList";

function Hero() {
  return (
    <div className="main w-[60%] h-screen flex flex-col gap-8 justify-between items-center">
      <nav className="flex items-center justify-between gap-20 p-5 relative">
        <div className="flex items-center gap-16 text-white font-semibold ml-10">
          <a href="">Music</a>
          <a href="">Podcast</a>
          <a href="">Live</a>
          <a href="">Radio</a>
        </div>

        <input
          type="text"
          placeholder="Michael Jackson"
          className="bg-[#2C0000] w-96 h-10 rounded-full px-5 py-2 mr-7 text-white"
        />
        <button className="absolute right-16 w-6">
          <img src={searchLogo} alt="" />
        </button>
      </nav>

      <section className="relative w-[70%] h-[65%] rounded-3xl overflow-hidden flex flex-col justify-end">
        <img
          src={BG_IMG_URI}
          alt="Background"
          className="w-full h-[80%] rounded-3xl object-cover  z-0"
        />
        <div className="absolute h-[80%] top-16 inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-x-0 bottom-20 p-6 text-white">
          <p className="text-[#CFC5C5] flex items-center font-medium text-sm mb-2">
            <img src={blueTickLogo} alt="Verified" className="w-4 h-4 mr-2" />
            Verified Artist
          </p>
          <h2 className="text-3xl font-semibold mb-1">Michael Jackson</h2>
          <p className="text-sm font-medium">27,852,501 monthly listeners</p>
        </div>

        <img
          src={MJ_IMG_URI}
          alt="Foreground"
          className="absolute bottom-0 right-0 w-[75%]  z-10"
        />
      </section>

      <section className=" w-full h-[55%] ">
        <MusicList />
      </section>
    </div>
  );
}

export default Hero;
