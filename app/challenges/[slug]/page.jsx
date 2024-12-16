"use client"
import ChallengePage from '@/app/components/pages/ChallengePage'
import React, { useEffect, useState } from 'react'
import Data from '@/app/constants/ChallengeData'
import { useParams } from 'next/navigation'

const Page = () => {
  const params = useParams();
  const slug = params.slug;
  const [pageData,setPageData] = useState(null)
  const PageDataGrabber = () => {
    switch (slug){
      case "music":
        setPageData(Data.music);
        break;
      case "dance":
        setPageData(Data.dance);
        break;
      case "painting":
        setPageData(Data.painting);
        break;
      case "acting":
        setPageData(Data.acting);
        break;
      case "design":
        setPageData(Data.design);
        break;
      case "snapshot":
        setPageData(Data.snapshot);
        break;
      case "writing":
        setPageData(Data.writing);
        break;
      case "marketing":
        setPageData(Data.marketing);
        break;
      case "shortfilm":
        setPageData(Data.shortfilm);
        break;
      case "fashion":
        setPageData(Data.fashion);
        break;
      default:
        break;
    }
  }
  useEffect(()=>{
    PageDataGrabber();
  },[])
  return (
    <div className="m-0 p-0 min-h-screen w-screen bg-custom-red-radial">
      <ChallengePage data={pageData}/>
    </div>
  )
}

export default Page
