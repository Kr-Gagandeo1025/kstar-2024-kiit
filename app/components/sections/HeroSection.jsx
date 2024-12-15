"use client"
import React from 'react'
import NavBar from './NavBar'

const HeroSection = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-start bg-cover bg-hero-bg-img">
        <NavBar/>
      <div className="flex lg:flex-row flex-col items-center w-full justify-between lg:px-32 px-5 mt-10">
        <img src="\images\header-event-img.svg" alt="hero-main-kstar" className='lg:h-[350px] w-auto object-cover'/>
        <img src="\images\prize-pool.svg" alt="hero-prize-highlight" className='lg:h-[550px] w-auto object-cover'/>
      </div>
      <div className='mb-[200px]'>
        <img src="\images\event-date.svg" alt="25th - 27th Dec 2024" className='lg:w-[500px] w-[300px] h-auto'/>
      </div>
    </div>
  )
}

export default HeroSection