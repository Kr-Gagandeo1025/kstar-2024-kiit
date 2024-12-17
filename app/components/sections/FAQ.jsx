"use client"
import React, { useState } from 'react'

const FaqCard = ({data}) => {
    const [arrowTrigger, setArrowTrigger] = useState(false)
    return(
        <div className="flex flex-col items-start justify-center mt-10">
            <div className="lg:flex inline-block w-full items-center justify-start lg:gap-10">
                <span className='lg:text-2xl text-lg font-bold'>{data?.ques}</span>
                <button onClick={()=>{setArrowTrigger(!arrowTrigger)}} className='ml-4'>
                    <img src="/icons/arrow.svg" alt="arrow" className={`h-[20px] w-auto bg-white rounded-full ${!arrowTrigger?'rotate-180':''} transition-all duration-500 ease-in-out`}/>
                </button>
            </div>
            {arrowTrigger&&<div className="flex bg-reg-btn_brdr-gradient p-0.5 rounded-xl transition-all duration-500 ease-in-out">
                <span className='flex rounded-xl px-10 py-1 bg-reg-btn_bg-gradient'>
                    <span className='flex bg-reg-text-gradient bg-clip-text text-transparent lg:text-xl text-sm font-bold py-3'>
                    {data?.ans}
                    </span>
                </span>
            </div>}
        </div>
    )
}

const FAQ = () => {
    const faqs = [
        {
          id: 4,
          ques: "How can I Register?",
          ans: " You are automatically registered when you submit your submission",
        },
        {
          id: 5,
          ques: "How can I submit?",
          ans: " You can find the Submit Here button inside Every Event Cards, after the release of Theme on 25th Dec, 2024. Please follow the guidelines for upload format and size restrictions with respect to Categories.",
        },
        {
          id: 6,
          ques: "Is there any Registration fee for the Event?",
          ans: " The event is absolutely free and exclusively for 1st Year UG/PG students of KIIT.",
        },
        {
          id: 7,
          ques: "What is the Event Format?",
          ans: " The format of the event is 72 Hour Challenge i.e A theme will be given to you at the start of the event and you need to submit your entry within the designated time limit.",
        },
        {
          id: 8,
          ques: "How to get updates about the event?",
          ans: " For any official updates regarding the event, kindly follow @ksacofficial on Facebook, Instagram and Twitter.",
        },
        {
          id: 9,
          ques: "When will the Event Start?",
          ans: " The event will start on 25th Dec 2024, 00:00 hours and ends on 27th Dec, 23:59 hours",
        },
        {
          id: 10,
          ques: "How can I see the Theme and guidelines of the event?",
          ans: " As you know it is a 72 Hour Challenge, the theme and the guidelines to participate and submit your entry will be opened on 25th Dec 2024, 00:00 hours.",
        },
      ]
  return (
    <div className='flex flex-col text-white w-full lg:pl-20 pl-4 lg:pr-0 pr-4 py-10 mt-10'>
      <span className='text-6xl font-bold'>FAQ</span>
      <div className="flex w-full items-center justify-between px-0">
        <div className="flex flex-col items-start justify-start">
            {faqs.map((faq)=>(
                <FaqCard data={faq} key={faq.id}/>
            ))}
        </div>
        <img src="\images\faq-img.svg" alt="faq" className='w-[300px] h-[70vh] object-cover lg:flex hidden'/>
      </div>
    </div>
  )
}

export default FAQ
