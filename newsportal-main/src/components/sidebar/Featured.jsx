import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';

const FeaturedCard = () => {
    return (
        <div className="p-4 rounded-md border bg-white my-3 cursor-pointer" >
            <div className="flex gap-x-2">
                <div className="">
                    <img className="w-[180px] rounded-md" src={couplesHug} alt="" />
                </div>
                <div className="relative">
                    <p className="text-xs text-[#bf912d]">TV SERIES</p>
                    <h1 className="text-[#000000] text-[14px] font-[400] font-proxima text-xs">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h1>
                </div>
            </div>
        </div>
    )
}

const Featured = () => {
    return (
        <div className="bg-white rounded-md p-2 border w-[404px]">
            <h1 className="uppercase text-[#bf912d] font-semibold">Featured Stories</h1>
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
        </div>
    )
}

export default Featured