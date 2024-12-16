'use client'
import Link from 'next/link'
import React from 'react'

const EventCard = ({data}) => {
    return(
        <div className="relative h-[300px] w-[300px] flex justify-center items-center">
            <div className="absolute inset-0 bg-cat-bg-gradient opacity-30 rounded-xl"></div>
            <Link href={data?.path} className='w-full h-full flex'>
                <div className="relative bg-white/10 backdrop-blur-lg border-[#E4B74A] border rounded-xl p-5 flex items-center flex-col justify-center w-full h-full">
                    <img src={`images${data?.img}`} alt="frame" className='h-[200px] w-auto'/>
                    <span className='flex bg-reg-text-gradient bg-clip-text text-transparent text-4xl font-bold py-3 mt-3'>
                    {data?.title}
                    </span>
                </div>
            </Link>
        </div>
    )
}

const EventCatalog = () => {
    const eventData = [{
        id: 1,
        img: "/challenges/frame_singing.svg",
        title: "MUSIC",
        path: "challenges/music",
      },
      {
        id: 2,
        img: "/challenges/frame_dance.svg",
        title: "DANCE",
        path: "challenges/dance",
      },
      {
        id: 3,
        img: "/challenges/frame_painting.svg",
        title: "PAINTING",
        path: "challenges/painting",
      },
      {
        id: 4,
        img: "/challenges/frame_acting.svg",
        title: "ACTING",
        path: "challenges/acting",
      },
      {
        id: 5,
        img: "/challenges/frame_design.svg",
        title: "DESIGN",
        path: "challenges/design",
      },
      {
        id: 6,
        img: "/challenges/frame_snapshot.svg",
        title: "SNAPSHOT",
        path: "challenges/snapshot",
      },
      {
        id: 7,
        img: "/challenges/frame_writing.svg",
        title: "WRITING",
        path: "challenges/writing",
      },
      {
        id: 8,
        img: "/challenges/frame_marketing.svg",
        title: "MARKETING",
        path: "challenges/marketing",
      },
      {
        id: 9,
        img: "/challenges/frame_short_film.svg",
        title: "SHORT FILM",
        path: "challenges/shortfilm",
      },
      {
        id: 10,
        img: "/challenges/frame_fashion.svg",
        title: "FASHION",
        path: "challenges/fashion",
      }]
  return (
    <div className="flex flex-col w-full items-center justify-center py-10">
        <div className='w-full flex items-center justify-evenly flex-wrap gap-10 lg:px-32 px-2 lg:mt-24 mt-5'>
            {
                eventData.map((ed)=>(
                    <EventCard data={ed} key={ed.id}/>
                ))
            }
        </div>
        <div className="bg-reg-btn_brdr-gradient p-0.5 rounded-xl mt-24">
            <button className='rounded-xl px-3 py-2 bg-reg-btn_bg-gradient'>
                <span className='bg-reg-text-gradient bg-clip-text text-transparent text-4xl font-bold'>
                    Register Now!
                </span>
            </button>
        </div>
    </div>
  )
}

export default EventCatalog
