import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import julia from '../../assets/images/julia.png';
import rashmika from '../../assets/images/rashmika.png';
import bikini from '../../assets/images/bikini.png';
import walker from '../../assets/images/walker.png';
import VisualStoriesItem from './VisualStoriesItem';

import './slider.css'

const data = [
    {
        img: julia,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: rashmika,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: bikini,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
]


function  VisualStoriesSlider () {
const [currentIndex, setCurrentIndex] = useState(0)


    const nextSlide = () => {
        if(currentIndex <= data.length - 5) {
            setCurrentIndex(currentIndex + 2)
        }
       
        console.log(currentIndex)
    }

    const prevSlide = () => {
        if(currentIndex !== 0) {
            setCurrentIndex(currentIndex - 2)
        } 
        console.log(currentIndex)
    }
    console.log(currentIndex)

    // const carousalContainer = document.getElementsByClassName('container');

    // const nextSlide = (e) => {
    //     e.preventDefault();
    //     let width = carousalContainer.clientWidth;
    //     carousalContainer.scrollLeft = carousalContainer.scrollLeft - width;
    //     console.log(width);

    // }

    // const prevSlide = (e) => {
    //     e.preventDefault();
    //     let width = carousalContainer.clientWidth;
    //     carousalContainer.scrollLeft = carousalContainer.scrollLeft + width;
    //     console.log(width);
    // }

    return (
        <div className="h-[395px] w-[95vw] sm:w-[839px] mt-[30px] rounded-[4px] p-2 bg-white relative drop-shadow-container">

            <div className="flex justify-between rounded-tl-lg rounded">
                <div className="flex items-center gap-x-2">
                    <p className="text-[#bf912d] font-semibold font-nunitoSans text-[18px]">VISUAL STORIES</p>
                    <div className="h-[2px] w-[100px] rounded bg-[#bf912d]"></div>
                </div>
                <div className="text-[#bf912d] font-semibold font-nunitoSans flex items-center">
                    <p>VIEW ALL</p>
                    <FiChevronRight className="text-[18px]" />
                </div>
            </div>

            <div role="button" onClick={prevSlide} className=" absolute cursor-pointer top-[50%] left-3 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1] drop-shadow-3xl">
                <FiChevronLeft className="text-[15px] text-[#bf912d] " />
            </div>
            <div role="button" onClick={nextSlide} className=" absolute cursor-pointer top-[50%] right-3 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1] drop-shadow-3xl">
                <FiChevronRight className="text-[15px] text-[#bf912d] " />
            </div>

            <div className="w-[95vw] sm:w-[811px] h-[321px] mt-[13px] border-[1px] rounded-[6px] overflow-hidden scroll-smooth overflow-x-scroll  scrollbar-hide">
                <div className="flex">
                    <div className="h-[300px] bg-white my-2 p-[6px] flex gap-x-[12px] rounded">
                        {data.map((item, index) =>{
                            return (
                                <VisualStoriesItem
                                styles={{transform: `translate(-${currentIndex * 100}%)`}}
                                key={index}
                                 index={index} 
                                 image={item.img} 
                                 title={item.title} />
                            )
                        })}
                        {/* <VisualStoriesItem image={julia} title={"Julia Garnet looks stunning in the dress by Prada"} />
                        <VisualStoriesItem image={rashmika} title={"Rashmika Mandana wins Audience Hearts by Red Lehenga"} />
                        <VisualStoriesItem image={bikini} title={"Heidi Klum shared some bikini photos"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} /> */}
                    </div>
                </div>

            </div>


        </div>
    )
}
    

export default VisualStoriesSlider