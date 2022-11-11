import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import ArticleContainer from '../layout/ArticleContainer'
import Featured from '../sidebar/Featured'
import RelatedPost from './RelatedPost'

const VideoNewsContainer = ({ image }) => {
  return (
    <div className="flex justify-center items-center px-2 my-6">
      <div>
        <p className="hidden sm:flex items-center gap-x-1">Home <MdArrowForwardIos className="text-[#bf912d]" /> <span className="whitespace-nowrap">TV News</span> <MdArrowForwardIos className="text-[#bf912d]" /> <span className="line-clamp-1 sm:line-clamp-none">Joel McHale's Starmen Take Center Stage in Stargirl Season 3 Photos</span></p>

        <Advertisement />

        <div className=" flex justify-between">

          <div className="">
            <ArticleContainer image={image} />
          </div>

          <div className="sm:flex hidden flex-col items-center gap-y-3">

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

export default VideoNewsContainer