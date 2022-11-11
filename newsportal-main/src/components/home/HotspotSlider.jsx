import React, { useState } from 'react'
import girlboobs from '../../assets/images/girlboobs.png'
import beardman from '../../assets/images/beard-man.png';
import kdrama from '../../assets/images/kdrama.png';
import rightArrowIcon from '../../assets/icons/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/icons/left-arrow-icon.svg';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import HotSpotSliderItem from './HotSpotSliderItem';



function HotspotSlider() {


    const carousalContainer = document.getElementsByClassName('carousal-container');

    // console.log(carousalContainer[0].clientWidth);
    const nextSlide = (e) => {
        e.preventDefault();

        let width = carousalContainer[0].clientWidth;
        carousalContainer[0].scrollLeft = carousalContainer[0].scrollLeft - width;
        console.log(width);

    }

    const prevSlide = (e) => {
        e.preventDefault();
        let width = carousalContainer[0].clientWidth;
        carousalContainer[0].scrollLeft = carousalContainer[0].scrollLeft + width;
        console.log(width);
    }

    return (
        <div className="w-[95vw] sm:w-[1264px] h-[150px] bg-[#ffffff] mt-4 rounded-[5px] relative drop-shadow-container">
            <div className="flex justify-between rounded-tl-lg">
                <div className="flex items-center gap-x-2 relative  w-[160px] overflow-hidden rounded-tl-lg" >
                    <p className="text-[#ffffff] text-[20px] z-[1] px-[10px]">HOT SPOT</p>
                    <div className="h-[100px] w-[200px] bg-[#bf912d] absolute  left-[-50px] skew-x-[-20deg]"></div>
                </div >
                <div className="sm:flex hidden gap-x-1 items-center">
                    <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                    <div className="h-[3px] w-10 bg-[#ffc700] rounded"></div>
                    <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                </div>
                <div className="w-[160px]"></div>
            </div>
            <div onClick={prevSlide} className="absolute cursor-pointer top-[45%] left-2 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1] drop-shadow-3xl">
                <FiChevronLeft className="text-[15px] text-[#bf912d] " />
            </div>
            <div className="px-2">
                <div className="flex py-[8px] relative  w-[100%] overflow-hidden scroll-smooth overflow-x-scroll snap-x carousal-container scrollbar-hide">
                    <div className="flex">
                        <HotSpotSliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                        <HotSpotSliderItem category={'TV SERIES'} image={beardman} title={"CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"} />
                        <HotSpotSliderItem category={'CELEBRITY'} image={kdrama} title={"Chris Rock Responds to Will Smith’s apology video"} />
                        <HotSpotSliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                        <HotSpotSliderItem category={'CELEBRITY'} image={beardman} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                        <HotSpotSliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                        <HotSpotSliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                        <HotSpotSliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                        <HotSpotSliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    </div>


                </div>
            </div>
            <div onClick={nextSlide} className="absolute cursor-pointer  right-2 top-[45%] p-2  rounded-full bg-white shadow-xl border-gray-500 drop-shadow-3xl">
                <FiChevronRight className="text-[15px] text-[#bf912d]" />
            </div>
            <div className="flex sm:hidden gap-x-1 items-center pb-1 mx-[40%]">
                <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                <div className="h-[3px] w-10 bg-[#bf912d] rounded"></div>
                <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
            </div>
        </div>
    )
}

export default HotspotSlider


