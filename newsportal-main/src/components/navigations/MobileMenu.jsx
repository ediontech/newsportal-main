import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

const MobileMenu = ({ setShowMenu }) => {
    return (
        <div className='absolute left-0 z-50 w-[100%] h-[100%] bg-white'>
            <div className="flex justify-between items-center border-b p-2">
                <img src="logobg.png" alt="" className="h-[40px]" />
                <AiOutlineCloseCircle onClick={() => setShowMenu(false)} className='text-[#bf912d] text-right text-3xl' />
            </div>
            <div className="p-2">
                <div className="w-[100%] bg-gray-200 rounded-md flex gap-x-1 border h-[45px] items-center p-1">
                    <BsSearch className="text-2xl" />
                    <input type="text" placeholder='Search News, Videos, Biographies, or Photo Galleries' className="w-[100%] h-[100%] bg-gray-200 text-sm outline-none" />
                </div>
            </div>
            <ul className='text-gray-600 uppercase p-2 font-[400]'>
                <li className="cursor-pointer w-full leading-10 border-t-[2px]">Celebrity</li>
                <li className="cursor-pointer w-full leading-10 border-t-[2px]">Entertainment</li>
                <li className="cursor-pointer w-full leading-10 border-t-[2px]">News</li>
                <li className="cursor-pointer w-full leading-10 border-t-[2px]">Anime</li>
                <li className="cursor-pointer w-full leading-10 border-t-[2px]">Games</li>
                <li className="cursor-pointer w-full leading-10 border-t-[2px]">Movies</li>
                <li className="cursor-pointer w-full leading-10 border-t-[2px]">Tv Shows</li>
            </ul>
            <div className="bg-gray-200 m-2 border font-[400] p-2">
                <h1 className='uppercase text-[#bf912d] leading-10'>quick links</h1>
                <ul className="flex justify-around flex-wrap border-t border-gray-400 border-b leading-10">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Our Team</li>
                    <li>Visual Stories</li>
                    <li>Photo Gallery</li>
                </ul>
                <div className="border-t border-gray-400 border-b leading-10 p-2">
                    <h1 className="uppercase">Follow us on</h1>
                    <ul className="flex justify-around">
                        <img className="h-[24px] w-[24px]" src="instaMobi.png" alt="" />
                        <img className="h-[24px] w-[24px]" src="facebookMobi.png" alt="" />
                        <img className="h-[24px] w-[24px]" src="twitterMobi.png" alt="" />
                        <img className="h-[24px] w-[24px]" src="youtubeMobi.png" alt="" />
                        <img className="h-[24px] w-[24px]" src="linkedinMobi.png" alt="" />
                        <img className="h-[24px] w-[24px]" src="rssMobi.png" alt="" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu