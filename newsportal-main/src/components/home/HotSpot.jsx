import React from 'react'

const HotspotCard = ({ category, title, image }) => {
    return (
        <div className="flex gap-x-2">
            <div className="w-[140px] h-[100px] overflow-hidden rounded-md">
                <img className='w-full' src="https://i2-prod.mirror.co.uk/incoming/article13532131.ece/ALTERNATES/s615/0_MAIN-5am-celeb-news-roundup.jpg" alt="" />
            </div>
            <div>
                <p className="text-amber-600 text-xs font-semibold">{category}</p>
                <h1 className="text-sm font-semibold">Chris Rock Responds to Will Smith apology video</h1>
            </div>
        </div>
    )
}

const HotSpot = () => {
    return (
        <div className="px-32 py-8 ">
            <div className="bg-white rounded-md">
                <div className="px-2 bg-amber-600 w-[160px]">
                    <p>HOT SPOT</p>
                </div>
            <div className="flex justify-evenly items-center p-2 shadow-md">
                <HotspotCard category="CELEBRITY" />
                <HotspotCard category="TV SHOW" />
                <HotspotCard category="CELEBRITY" />
            </div>
            </div>
        </div>
    )
}

export default HotSpot