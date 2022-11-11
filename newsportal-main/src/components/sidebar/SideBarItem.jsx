import React from 'react'

function SideBarItem({ category, title, image }) {
    return (

        <div className="flex flex-row items-center p-2 cursor-pointer rounded-[2px] w-[90vw] sm:w-[383px] h-[108px] z-0 border">
                <div className="h-[85px] w-[85px] overflow-hidden rounded-sm">
                    <img className="h-[100%] w-[100%]" src={image} alt="" />
                </div>
                <div className="px-2 relative h-[80px] w-[250px]">
                    <p className="font-futura2 text-[#bf912d] font-bold text-[10px] capitalize">{category}</p>
                    <p className="font-nunitoSans text-[16px] leading-5 text-black font-semibold">
                        {title}
                    </p>
                </div>
        </div>

    )
}

export default SideBarItem