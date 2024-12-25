import { useState } from "react";
import "./App.css";
import SideNavbar from "./components/SideNavbar";
import Hero from "./components/Hero";
import MusicPlaying from "./components/MusicPlaying";
import { MusicProvider } from "./context/MusicContext";

function App() {
  return (
    <>
      <MusicProvider>
        <main className="h-screen flex">
          <SideNavbar />
          <Hero />
          <MusicPlaying />
        </main>
      </MusicProvider>
    </>
  );
}

export default App;
