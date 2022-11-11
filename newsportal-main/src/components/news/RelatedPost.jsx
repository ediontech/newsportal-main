import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';

const FeaturedCard = () => {
    return (
        <div className="p-[10px] rounded-[2px] border bg-white h-[130px] border-[#e4e4e4]" >
            <div className="flex gap-x-2 h-[100%]">
                <div className="">
                    <img className="h-[100%] w-[280px] rounded-md" src="Layer11.png" alt="" />
                </div>
                <div className="relative">
                    <p className="text-[10px] mb-[5px] text-[#bf912d]">TV SERIES</p>
                    <h1 className="text-[16px] font-bold font-nunitoSans leading-0">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h1>
                    <p className="text-[#737373] text-[10px] absolute bottom-0">AUGUST 5, 2022</p>
                </div>
            </div>
        </div>
    )
}

const RelatedPost = () => {
    return (
        <div className="bg-white p-[15px] rounded-md border">
            <div className='flex items-center gap-x-1 mb-[20px]'>
                <p className="text-[20px] text-[#bf912d] font-nunitoSans">RELATED POST</p>
                <div className='h-[2px] w-[82px] bg-[#bf912d]'></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
        </div>
    )
}

export default RelatedPost