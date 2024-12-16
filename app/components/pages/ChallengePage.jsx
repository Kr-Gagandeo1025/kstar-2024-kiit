import React from 'react'
import NavBar from '../sections/NavBar'
import Link from 'next/link'

const ChallengePage = ({data}) => {
  return (
    data === null ?
    <div className='bg-cover bg-hero-bg-img h-screen w-full flex items-center justify-center'>
      <span className='flex bg-reg-text-gradient bg-clip-text text-transparent text-5xl font-bold py-3'>
        404 | The Event Was Not Found
      </span>
    </div>:
    <div className='bg-cover bg-hero-bg-img min-h-full w-full flex items-center flex-col justify-start'>
      <NavBar page={"challenge"}/>
      <div className='flex w-fit item-center justify-center lg:-translate-y-36'>
        <img src="\images\72hrPoster.svg" alt="72-hr-poster" className='lg:w-[500px] w-[100%] h-auto'/>
      </div>
      <div className='flex items-center justify-between lg:px-20 px-3 lg:-translate-y-36'>
        <div className='flex-col flex items-start justify-start w-full'>
        <span className='flex bg-reg-text-gradient bg-clip-text text-transparent lg:text-5xl text-3xl font-bold py-3'>
          {data.title}
        </span>
        <span className='lg:text-2xl text-xl text-white font-bold'>{data.desc}</span>
        <div className='flex items-center justify-center gap-4 mt-10'>
          {data.submissionLink &&
            <Link href={`${data?.submissionLink}`} target="_blank" className='bg-[#F7C951] px-5 py-3 lg:text-xl text-sm text-[#4F1516] font-bold rounded-xl'>Submit Here</Link>
          }
          <Link href="" target="_blank" className='bg-white px-5 py-3 lg:text-xl text-sm text-[#4F1516] font-bold rounded-xl'>Theme & Guidelines</Link>
        </div>
        </div>
        <div className='lg:flex hidden items-center justify-end w-full h-full'>
          <img src={data.imgurl} alt="event" className='w-[70%] h-[500px]'/>
        </div>
      </div>
      <footer className="w-full lg:text-xl text-sm text-white flex items-center justify-center lg:p-5 p-1 uppercase font-bold text-center mt-20">
        Designed by Kreative Eye | Developed by Konnexions
      </footer>
    </div>
  )
}

export default ChallengePage
