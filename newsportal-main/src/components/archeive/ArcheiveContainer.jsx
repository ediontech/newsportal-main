import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Ads from '../author/Ads'
import BlogList from '../author/BlogList'
import CategoryListItem from '../category/CategoryListItem'
import BlogContainer from '../layout/BlogContainer'
import Featured from '../sidebar/Featured'


function ArcheiveContainer() {
  return (
    <div className="px-2 flex flex-col justify-center items-center">
      <div className="sm:mt-10 flex flex-row items-center gap-2 w-[95vw] sm:w-[1264px]">
        <div>
          <p className="font-bold sm:text-[30px] text-[20px]">TV News</p>
          <p className="flex items-center gap-x-1 whitespace-nowrap text-[16px] sm:text-base">Home <MdArrowForwardIos className="text-[#bf912d]" /> TV News</p>
        </div>
        <div className="w-[1px] bg-slate-400 sm:h-[80px] h-[40px]"></div>
        <div>
          <p className="text-[14px] sm:text-base]">Latest News Updates on <span className="font-semibold">"Money Heist"</span></p>
        </div>
      </div>

      <div className="flex justify-center items-center w-[95vw] sm:w-[1264px]">
        {/* top */}
        <div className="">
          <div className=" w-full sm:w-[837px] my-3 border bg-gray-300 h-[3px]"></div>
          <div className="flex gap-x-3">
            {/* left */}
            <div className="">
              <CategoryListItem />
              <CategoryListItem />
              <CategoryListItem />
              <CategoryListItem />
              <CategoryListItem />
              <CategoryListItem />
              <CategoryListItem />
            </div>
            {/* right */}
            <div className=" sm:flex hidden flex-col items-center gap-y-3">
              <Ads />
              <Featured />
              <Ads bg="white" />
            </div>
          </div>

          {/* bottom */}
          <div className="w-full sm:w-[837px] cursor-pointer">
            <div>
              <div className="rounded-[5px] h-[40] sm:h-[52px] border bg-[#bf912d] text-center mt-8 mb-14 text-[23px] sm:text-[34px] flex justify-center">
                <p className="text-[#ffd200]">MORE STORIES</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ArcheiveContainer




