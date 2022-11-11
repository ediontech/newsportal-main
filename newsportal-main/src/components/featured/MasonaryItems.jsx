import React from 'react'
import featured from '../../assets/images/featured.jpg';
import { AiOutlinePicRight } from "react-icons/ai";
function MasonaryItem() {
    return (
        <div className="h-[250px] bg-white w-[285px]">
            <div className="h-[175px] w-[285px] overflow-hidden relative ">
                <img width={370} height={175} src={featured} alt="" />
                <div className="absolute z-[10] bottom-2 left-6 flex flex-row justify-start gap-2 items-center">
                    <AiOutlinePicRight className="text-[#ffd200] font-bold" />
                    <div className="capitalize text-[12px] text-[#ffd200]  font-bold">TV SERIES</div>
                </div>
            </div>
            <div className="p-[7px]">
                <h3 className="text-[18px] leading-5 font-semibold">Moon Knight Season 2 Production started at Cairo teased by Oscar Isaac</h3>
                {/* <p className="text-[16.12px]">Kung Fu Panda: THe Dragon Knight Season 2 has already not been announced and here we have its Expected Release Data, Cast and possible Plot info</p> */}
            </div>
        </div>
    )
}

export default MasonaryItem