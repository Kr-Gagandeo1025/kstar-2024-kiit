'use client'
import React from 'react'
import Counter from '../Counter'

const EventsSection = () => {
  return (
    <div className='lg:min-h-screen h-fit w-screen flex flex-col items-center justify-start pb-10'>
      <img src="\images\golden-wings.svg" alt="golden-wings" className='lg:w-[90%] w-full px-2 h-auto lg:-translate-y-[130px] -translate-y-[50px]'/>
      <div>
        <Counter/>
      </div>
      <img src="/images/72hrPoster.svg" alt="72hr-event" className='lg:w-[60%] w-[100%] h-auto'/>
      <div className="flex bg-reg-btn_brdr-gradient p-0.5 rounded-xl">
            <span className='flex rounded-xl px-10 py-1 bg-reg-btn_bg-gradient'>
                <span className='flex bg-reg-text-gradient bg-clip-text text-transparent lg:text-5xl text-xl font-bold py-3'>
                    Exclusively for 1st Years!
                </span>
            </span>
        </div>
    </div>
  )
}

export default EventsSection
