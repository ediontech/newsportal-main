import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import instagramIcon from '../../assets/icons/insta.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import nadiaUsman from '../../assets/images/nadia-usman.png';
const AuthorCard = () => {
    return (
        <div>
            <div className="p-4 rounded-md border bg-white my-3 w-[837px]">
                <div className="flex gap-x-4">
                    <div className="overflow-hidden rounded-full h-[110px]">
                        <img className="" src={nadiaUsman} alt="" />
                    </div>
                    <div>
                        <h1 className="font-[800] text-[20px] font-nunito">Nadia Usman</h1>
                        <p className='text-[#6d6d6d] text-sm font-[400] font-nunito'>Well, a Content Writer, and Designer by Profession and Marvel & DC Comics Nerd by Passion, Completed BSc. Graphic and animation from MCU, Bhopal</p>
                        <div className="flex gap-x-3 text-xl mt-4">

                            <img height={25} width={25} src={instagramIcon} alt="" />
                            <img height={25} width={25} src={facebookIcon} alt="" />
                            <img height={25} width={25} src={twitterIcon} alt="" />
                            <img height={25} width={25} src={linkedinIcon} alt="" />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard