"use client"
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full flex lg:items-center items-start justify-between lg:p-10 p-2'>
      <img src="/images/kiit-ksac-logo.svg" alt="kiit-ksac-logo" className="h-full w-auto"/>
      <div className='flex items-center justify-center gap-6 lg:flex-row flex-col'>
        <div className="bg-reg-btn_brdr-gradient p-0.5 rounded-xl">
            <button className='rounded-xl px-3 py-2 bg-reg-btn_bg-gradient'>
                <span className='bg-reg-text-gradient bg-clip-text text-transparent lg:text-2xl text-lg font-bold'>
                    Register Now!
                </span>
            </button>
        </div>
        <Link className='border-none flex items-center justify-center gap-3 text-[#FDE984] font-bold lg:text-xl text-sm' href="mailto:studentsupport@kiit.ac.in" target='_blank'>
            <img src="\icons\contact-us-logo.svg" alt="c-us" className='lg:h-[50px] h-[30px] w-auto'/>
            Contact us
        </Link>
      </div>
    </div>
  )
}

export default NavBar
