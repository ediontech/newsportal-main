import React, { useState } from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { BsShare } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { FcMenu } from 'react-icons/fc'
import { BiSearch } from 'react-icons/bi'

import './navigation.css'

const HeaderNav = ({ setShowMenu }) => {
    const [clicked, setClicked] = useState(false)
    const [onClicked, setOnClicked] = useState(false)
    const [clickFollow, setClickFollow] = useState(false)

    return (
        <>
            <div className="sm:hidden bg-white shadow-md p-2">
                <div className=" w-[100%] flex justify-between items-center">
                    {/* mobile menu */}
                    <div className="flex items-center gap-x-3 w-[72%]">
                        <div role="button" onClick={() => setShowMenu(true)} className="">
                            <img src="mobileMenu.png" alt="" className="h-[35px]" />
                        </div>
                        <img src="realLogo.png" className="h-[30px]" alt="" />
                    </div>
                    <div className="flex items-center justify-around border-l w-[28%]">
                        <img src="mobileShare.png" alt="" className="h-[35px]" />
                        <img src="mobileSearch.png" alt="" className="h-[35px]" />
                    </div>
                </div>
                <div className="flex items-center gap-x-3 mt-2">
                    <div role="button">
                        <img src="home.png" alt="" className="h-[20px] w-[20px]" />
                    </div>
                    <div className='uppercase flex items-center gap-x-3 text-[12px] font-futura2'>
                        <p>Celebrity</p>
                        <p>Entertainment</p>
                        <p className="whitespace-nowrap">Tv News</p>
                        <p className="whitespace-nowrap">Web Stories</p>
                    </div>
                </div>
            </div>
            <div className='hidden sm:flex justify-center p-3 bg-white shadow-md '>
                <div className="w-[1264px] flex justify-between items-center">
                    {/* DESKTOP */}

                    {/* left */}
                    <div className="flex gap-x-2 items-center w-[20%]">
                        <img src="logobg.png" alt="" />
                    </div>
                    {/* middle */}
                    <div className="w-[65%]">
                        <div className="flex items-center justify-around font-semibold text-[16px] px-6 uppercase">
                            <div className="cursor-pointer">CELEBRITY</div>
                            <div className="dropdown relative">
                                <div role="button" onClick={() => {
                                    setClicked(!clicked)
                                    setOnClicked(false)
                                }}>
                                    <a className="flex items-center">ENTERTAINMENT <BiChevronDown className="text-lg" /></a>
                                </div>
                                {clicked === true && (
                                    <div className="menu z-40">
                                        <ul className="absolute uppercase top-10 z-50 -right-10 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
                                            <li><a href="#">Politics</a></li>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Gaming</a></li>
                                            <li><a href="#">Sports</a></li>
                                            <li><a href="#">Trending</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="dropdown relative">
                                <div role="button" onClick={() => {
                                    setOnClicked(!onClicked)
                                    setClicked(false)
                                }}>
                                    <a className="flex items-center">News <BiChevronDown className="text-lg" /></a>
                                </div>
                                {onClicked === true && (
                                    <div className="menu z-40">
                                        <ul className="absolute uppercase top-10 z-50 -right-10 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
                                            <li><a href="#">Politics</a></li>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Gaming</a></li>
                                            <li><a href="#">Sports</a></li>
                                            <li><a href="#">Trending</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="cursor-pointer">ANIME</div>
                            <div className="cursor-pointer">GAMES</div>
                            <div className="cursor-pointer">MOVIES</div>
                            <div className="cursor-pointer">TV SHOW</div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-[15%]">
                        <div className=" flex justify-around items-center text-[#bf912d] border-l-2">
                            <div role="button" onClick={() => setShowMenu(true)} className="">
                                <img src="menuu.png" alt="" />
                            </div>

                            <div className="relative">
                                <div role="button" onClick={() => {
                                    setClickFollow(!clickFollow)

                                }} className="flex items-center gap-x-1">
                                    <img src="share.png" alt="" />
                                    <p className="text-[16px] font-futura2">Follow</p>
                                </div>
                                {clickFollow === true && (
                                    <div className="menu z-40">
                                        <div className="absolute uppercase top-10 z-50 -right-10 bg-[#bf912d] w-[267px] h-[133px] border-t-4 border-[#bf912d] shadow-md rounded-md">
                                            <div>
                                                <p className="uppercase text-center text-white font-nunitoSans my-1">Find more content at</p>
                                                <div className="flex justify-around items-center p-3">
                                                    <img src="logo-03.png" alt="" />
                                                    <img src="new-logo-02.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 border-t flex flex-col justify-center items-center p-2">
                                                <h1 className="uppercase text-[#393939] text-center text-[9px] font-nunitoSans">Follow us on</h1>
                                                <ul className="flex justify-around w-[100%]">
                                                    <img className="h-[19px] w-[20px]" src="instaMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="facebookMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="twitterMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="youtubeMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="linkedinMobi.png" alt="" />
                                                    <img className="h-[19px] w-[20px]" src="rssMobi.png" alt="" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <img src="searchh.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderNav