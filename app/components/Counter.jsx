"use client"
import React, { useEffect, useState } from 'react'

const CounterDial = ({digit,type}) =>{
    return (
        <div className='flex flex-col items-center justify-center'>
        <span className='flex bg-reg-btn_brdr-gradient p-1 lg:h-[120px] h-[60px] lg:w-[120px] w-[60px] rotate-45 items-center justify-center rounded-xl'>
            <span className="p-5 bg-[#AC1D39] h-full w-full flex items-center justify-center rounded-xl">
                <span className='w-[5px] h-[90px] bg-reg-btn_brdr-gradient -translate-x-[15px] translate-y-14 rounded-xl'></span>
                <span className='-rotate-45 lg:text-6xl text-2xl font-bold text-white h-fit w-fit bg-transparent tracking-tighter'>{digit}</span>
                <span className='w-[5px] h-[90px] bg-reg-btn_brdr-gradient translate-x-[15px] -translate-y-14 rounded-xl'></span>
            </span>
        </span>
        <span className='lg:text-xl text-sm text-white translate-y-[30px] font-bold'>{type}</span>
    </div>
    )
}

const Counter = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
        const targetDate = new Date('2024-12-25T00:00:00');
        const now = new Date();
    
        const difference = targetDate - now;
    
        if (difference <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    
        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
            minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        };
      }
      useEffect(() => {
        const interval = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
  return (
    <div className='flex lg:gap-[100px] gap-5 items-center justify-center'>
        {timeLeft &&
          <>
          <CounterDial digit={timeLeft?.days} type={"Days"}/>
          <CounterDial digit={timeLeft?.hours} type={"Hour"}/>
          <span className='lg:text-8xl text-5xl text-white font-bold -translate-y-[20px]'>:</span>
          <CounterDial digit={timeLeft?.minutes} type={"Minutes"}/>
          <CounterDial digit={timeLeft?.seconds} type={"Seconds"}/>
          </>}
    </div>
  )
}

export default Counter
