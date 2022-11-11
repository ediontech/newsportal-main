import React from 'react'


function MasonaryItem({ image, category, icon, title }) {
    return (
        <div className="bg-white w-[95vw] sm:w-[310px] h-[110px] sm:h-[231px] rounded-[3px] flex sm:flex-col flex-row overflow-hidden cursor-pointer">
            <div className="h-[100%] sm:h-[175px] w-[60vw] sm:w-[100%] overflow-hidden relative">
                <img src={image} alt="" className="w-[100%] h-[100%]" />
                <div className="absolute z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-2 items-center drop-shadow-3xl ">
                    <img src={icon} width={15} height={15} className="text-[#ffd200] font-bold drop-shadow-3xl " alt="" />
                    <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">{category}</div>
                </div>
            </div>
            <div className="sm:p-[10px] p-[6px]">
                <h3 className="text-[18px] sm:leading-5 font-semibold  sm:line-clamp-2 line-clamp-2 font-nunitoSans ">{title}</h3>
            </div>
        </div>
    )
}

export default MasonaryItem