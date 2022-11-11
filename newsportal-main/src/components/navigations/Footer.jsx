import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'


const Footer = () => {
    return (
        <div className="bg-[#1d1d1d] mt-4 text-gray-50">
            <div className="flex flex-col sm:flex-row justify-between px-2 sm:px-40 py-10">
                {/* left footer */}
                <div className="sm:w-[60%] flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-x-1">
                            <h1 className="text-[#bf912d] font-nunitoSans text-[20px]">NEWS SECTIONS</h1>
                            <div className="bg-[#bf912d] h-[2px] w-[82px]"></div>
                        </div>
                        <div>
                            <ul className="text-[18ulx] font-nunitoSans flex justify-between flex-wrap">
                                <li className="cursor-pointer">Entertainment</li>
                                <li>|</li>
                                <li className="cursor-pointer">Celebrity News</li>
                                <li>|</li>
                                <li className="cursor-pointer">TV News</li>
                                <li>|</li>
                                <li className="cursor-pointer">Technology News</li>
                                <li>|</li>
                                <li className="cursor-pointer">Movies</li>
                                <li>|</li>
                                <li className="cursor-pointer">Politics</li>
                                <li>|</li>
                                <li className="cursor-pointer">Sports</li>
                                <li>|</li>
                                <li className="cursor-pointer">General News </li>
                                <li>|</li>
                                <li className="cursor-pointer">Trending</li>
                                <li>|</li>
                                <li className="cursor-pointer">Bollywood</li>
                                <li>|</li>
                                <li className="cursor-pointer">Web Stories</li>
                                <li>|</li>
                                <li className="cursor-pointer">Business</li>
                                <li>|</li>
                                <li className="cursor-pointer">Photos</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[100%] border-b bg-gray-50 mt-3 sm:mt-0"></div>
                    <div className="mt-[37px] sm:m-0">
                        <div className="flex gap-x-2 items-center">
                            <img src="logobg.png" alt="" className="w-[220px]" />
                        </div>
                        <p className='text-[16px] font-sans text-[#dbdbdb] py-3'>Daily Research Plot is a new-age media company that keeps its reader updated with the latest news headlines from the United States and all over the world. Entertainment, TV News, Shows Premiere Date, Release Date, Celebrity Gossips, and Travel - we help our readers to know about everything running around the world in every field</p>

                        <div className='flex items-center gap-x-4 my-2'>
                            <h1 className="text-[#bf912d] text-[20px] font-nunitoSans whitespace-nowrap">FOllOW US</h1>
                            <div className="flex gap-x-2 sm:gap-x-3 sm:mt-4">
                                <img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="ins.png" alt="" />
                                <img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="fb.png" alt="" />
                                <img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="twt.png" alt="" />
                                <img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="yt.png" alt="" />
                                <img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="lnkd.png" alt="" />
                                <img className='w-[30px] sm:w-[44px] h-[30px] sm:h-[44px]' src="rss.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right footer */}
                <div className="sm:w-[30%] mt-[60px] sm:mt-0">
                <div className="flex items-center gap-x-1">
                            <h1 className="text-[#bf912d] font-nunitoSans text-[20px] whitespace-nowrap">QUICK LINKS</h1>
                            <div className="bg-[#bf912d] h-[2px] w-[50px]"></div>
                        </div>
                    <ul className="text-[18px] mt-[16px] font-nunitoSans leading-[30px]">
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Contact Us</li>
                        <li className="cursor-pointer">DMCA Policy</li>
                        <li className="cursor-pointer">Editorial Policy</li>
                        <li className="cursor-pointer">Fact-Checking Policy</li>
                        <li className="cursor-pointer">Ownership, Funding, and Advertising Policy</li>
                        <li className="cursor-pointer">Privacy Policy</li>
                        <li className="cursor-pointer">RSS Feeds</li>
                        <li className="cursor-pointer">Team</li>
                        <li className="cursor-pointer">Terms and Condition</li>
                        <li className="cursor-pointer">Write for Us</li>
                    </ul>
                </div>
            </div>

            <div className='w-[100%] px-2 bg-black py-4'>
                <p className='text-center flex items-center justify-center text-[14px] sm:text-[18px] font-[300px] font-nunitoSans text-[#dbdbdb]'>
                   <BiCopyright /> <span>2019 - 2022 Daily Research Plot All Rights Reserved.</span>
                </p>
            </div>
        </div>
    )
}

export default Footer