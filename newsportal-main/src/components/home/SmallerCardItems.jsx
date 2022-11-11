import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';
function SmallerCardItems() {
    return (
        <div className="p-2 py-[10px] rounded-[2px] border border-[#e4e4e4] bg-white my-1 cursor-pointer h-[130px] w-[398px]" >
            <div className="flex gap-x-2">
                <div className="h-[108px]  w-[208px]">
                    <img className="w-[100%] h-[100%] rounded-md" src={couplesHug} alt="" />
                </div>
                <div className="relative flex flex-col justify-between">
                    <p className="text-xs text-[#bf912d] font-bold">TV SERIES</p>
                    <h1 className="text-[#000000] text-[16px] font-bold font-nunitoSans">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h1>
                    <p className="text-xs text-[#474747]">AUGUST 5, 2022</p>
                </div>
            </div>
        </div>
    )
}

export default SmallerCardItems