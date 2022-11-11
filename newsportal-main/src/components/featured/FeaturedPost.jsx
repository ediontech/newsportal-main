import React from 'react'
import featured from '../../assets/images/featured.jpg';

import { AiOutlinePicRight } from "react-icons/ai";
function FeaturedPost() {
    return (
        <div className="h-[508px] bg-white w-[620px]">
            <div className="h-[361px] w-[620px] overflow-hidden relative ">
                <img width={641} height={361} src={featured} alt="" />
                <div className="absolute z-[10] bottom-2 left-6 flex flex-row justify-start gap-2 items-center">
                    <AiOutlinePicRight className="text-[#ffd200] font-bold" />
                    <div className="capitalize text-[12px] text-[#ffd200]  font-bold">TV SERIES</div>
                </div>
            </div>
            <div className="pt-[7px] pb-[12px] px-[14px]">
                <h3 className="text-[25.5px] font-semibold leading-8">Kung Fu Panda: The Dragon Knight Season 2 Potential Release Date and More</h3>
                <p className="text-[16.12px]">Kung Fu Panda: THe Dragon Knight Season 2 has already not been announced and here we have its Expected Release Data, Cast and possible Plot info</p>
            </div>
        </div>
    )
}

export default FeaturedPost