import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import Featured from '../sidebar/Featured'
import MultiArticleContainer from '../layout/MultiArticleContainer'
import RelatedPost from './RelatedPost'

const MultipageNewsContainer = ({ image }) => {
  return (
    <div className="my-6 px-2 flex justify-center items-center">
     <div className="w-[100vw] sm:w-[1264px]">
     <p className="flex flex-wrap items-center gap-x-1 text-[14px] sm:text-[16px] p-2 text-[#6d6d6d] font-[300px]"><span>Home</span> <MdArrowForwardIos className="text-[#bf912d] " /> <span className="whitespace-nowrap">TV News</span> <MdArrowForwardIos className="text-[#bf912d]" /> <span>Joel McHale's Starmen Take Center Stage in Stargirl Season 3 Photos</span></p>
        <Advertisement />

        <div className=" flex justify-between">
          {/* left */}
          <div className="">
            <MultiArticleContainer image={image} />
          </div>
          {/* right */}
          <div className=" sm:flex hidden flex-col items-center gap-y-3">
            <SideAds />
            <Featured />
            <SideAds bg="white" />
          </div>
        </div>

        <div className='w-[100vw] sm:w-[837px] mt-[18px]'>
          <RelatedPost />
        </div>
      </div>
    </div>
  )
}

export default MultipageNewsContainer