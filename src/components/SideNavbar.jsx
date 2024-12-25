import React from 'react'
import { discoverLogo, HomeLogo, libraryLogo, logo, logOutLogo, settingsLogo, trendsLogo } from '../utils/export'


function SideNavbar() {
  return (
    <div className='bg-[#0f0f0f] w-[20%] flex flex-col items-center justify-between ' >
      <div className='flex items-center justify-center gap-5 mt-5 '>
        <img src={logo} alt="" />
        <h1 className='font-semibold text-2xl text-white' ><span className='text-[#FF5656]'  >Dream</span>Music</h1>
      </div>
      <div className='text-white font-semibold mb-60 mr-20'>
        <p className='mb-5 text-sm text-[#CFC5C5] ' >MENU</p>
        <ul className='flex flex-col gap-3 text-lg' >
            <li className='flex gap-8 '><img src={HomeLogo} alt="" /> Home</li>
            <li className='flex gap-8 ' ><img src={trendsLogo} alt="" /> Trends</li>
            <li className='flex gap-8 ' ><img src={libraryLogo} alt="" /> Library</li>
            <li className='flex gap-8' ><img src={discoverLogo} alt="" /> Discover</li>

        </ul>
      </div>
      <div className='text-white font-semibold mb-10 mr-20'>
        <p className='mb-5 text-sm text-[#CFC5C5] '>GENERAL</p>
        <ul className='flex flex-col gap-3 text-lg' >
            <li className='flex gap-8 '><img src={settingsLogo} alt="" /> Settings</li>
            <li className='flex gap-8 ' ><img src={logOutLogo} alt="" /> Log Out</li>

        </ul>
      </div>
    </div>
  )
}

export default SideNavbar
