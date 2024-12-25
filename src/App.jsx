import { useState } from 'react'
import './App.css'
import SideNavbar from './components/SideNavbar'
import Hero from './components/Hero'
import MusicPlaying from './components/MusicPlaying'

function App() {
  
  return (
    <main className='h-screen flex' >
      <SideNavbar/>
      <Hero />
      <MusicPlaying />
    </main>
  )
}

export default App
