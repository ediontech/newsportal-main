import React from 'react'
import facebookColoredIcon from '../../assets/icons/facebook-colored-icon.svg';
import linkedinColoredIcon from '../../assets/icons/linkedin-colored-icon.svg';
import whatsappColoredIcon from '../../assets/icons/whatsapp-colored-icon.svg';
import twiterColoredIcon from '../../assets/icons/twiter-colored-icon.svg';
import emailColoredIcon from '../../assets/icons/email-colored-icon.svg';
import { AiOutlineMail } from 'react-icons/ai';
import girlboobs from '../../assets/images/girlboobs.png'
import beardman from '../../assets/images/beard-man.png';

const ArticleContainer = ({ image }) => {
    return (
        <div className='bg-white rounded-md p-4 mt-[18px] w-[100vw] sm:w-[837px]'>
            <h1 className="text-[20px] sm:text-[36px] font-nunitoSans text-[#000000] font-semibold">Kung Fu Panda: The Dragon Knight Season 2
                Potential Release Date and More
            </h1>
            <p className="sm:text-[20px] text-[18px] text-[#6d6d6d] font-proxima font-[300]">Kung Fu Panda: The Dragon Knight Season 2 has already not been announced and here we have its Expected Release Date, Cast, and possible Plot Info.</p>
            <div className="w-[100%] my-3 border bg-gray-500 h-[1px]"></div>
            {/* author  */}
            <div>
                <div className="flex flex-row justify-between sm:items-center items-end gap-x-2">
                    <div className="flex gap-x-2 items-center">
                        <img src="author2.png" alt="" />
                        <div className="text-[13px] text-[#6d6d6d]">
                            <p className=''>by <span className="text-[16px] text-[#000000] font-nunitoSans font-semibold">Manjeet Mahato</span></p>
                            <p className="font-proxima">Published On <span className="text-black font-semibold">August 5, 2022</span> (Updated On <span className="text-black font-semibold">August 5, 2022</span>)</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-row items-center sm:gap-x-3 gap-x-2 ml-[-60px]">
                        <img src={facebookColoredIcon} alt="" />
                        <img height={24} width={24} src={linkedinColoredIcon} alt="" />
                        <img height={24} width={24} src={whatsappColoredIcon} alt="" />
                        <img height={24} width={24} src={twiterColoredIcon} alt="" />
                        <img height={24} width={24} src="email.png" alt="" />
                    </div>
                </div>
            </div>
            {/* featured img */}
            <div className="my-3 w-[95vw] sm:w-[804px] sm:h-[453px]">
                <img src={image} alt="" className="w-[100%] h-[100%]" />
            </div>

            {/* article */}
            <div className="text-[18px] mt-7 font-sans">
                It hasn’t been much time since Kung Fu Panda Dragon Knight was released, and Kung Fu Panda fans are already asking for season 2 as they would never be done with the cute Panda and his fighting styles.
                <br />
                <br />
                Are you a Kung Fu Panda fan or is your child one? Or wait have you been searching on some animated and comical web series to watch one? Well if either is the answer you are in the right place.
                <br />
                <br />
                “Kung Fu Panda: Dragon Knight” is a new-age comical, exciting, and action-filled drama series. Released in the month of July this year, the show was watched by many globally. Acquired by the streaming platform Netflix, the show has been released for only a season by now.
                <br />
                <br />
                Produced by DreamWorks Animation Television, the show is a part of the Kung Fu Panda Franchise. It was released after Kung Fu Panda: The Paws Of Destiny. Since it is an animated series, numerous voice artists also join the team of the show. To name a few: Jack Black, Rita Ora, Chris Geere, Della Saba, and some more.
            </div>

            {/* you may like */}
            <div className="sm:h-[145px] h-[300px] w-[100%] bg-[#bf912d] p-2 px-4 mt-4">
                <div className="flex items-center gap-x-2">
                    <p className="text-[#ffc700] text-[20px] font-nunitoSans">YOU MAY LIKE</p>
                    <div className="h-[2px] w-[84px] bg-[#ffc700]"></div>
                </div>
                <div className="flex sm:flex-row flex-col sm:gap-x-4 gap-y-4">
                    <div className="flex flex-row items-center cursor-pointer">
                        <div className="h-[100px] w-[181px]  overflow-hidden">
                            <img className="h-[100px] w-[181px]" src={girlboobs} alt="" />
                        </div>
                        <p className="font-nunitoSans text-[18px] text-white px-2">
                            Shama Sikander flaunts in new
                            Instagram hot Pictures

                        </p>
                    </div>
                    <div className=" sm:w-1 sm:h-[100px] w-full h-[2px] bg-white"></div>
                    <div className="flex flex-row items-center cursor-pointer">
                    <div className="h-[100px] w-[181px]  overflow-hidden">
                            <img className="h-[100px] w-[181px]" src={beardman} alt="" />
                        </div>
                        <p className="font-nunitoSans text-[18px] text-white px-2">
                            Shama Sikander flaunts in new
                            Instagram hot Pictures

                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h2 className="text-[30px] my-3 font-futura2 font-bold">Recap from Season 1</h2>
                <div className="text-[18px] font-proxima">
                    Developed by Mitch Watson and Peter Hastings, “Kung Fu Panda: Dragon Knight” began to premiere on July 14 this year. All the episodes of the first season were released on the same day i.e on the 14th of July.
                    <br />
                    <br />
                    It comprised 11 episodes and each had a running time of 24 minutes. Streamed on the virtual screening platform Netflix, the show was loved among children and was a decent watch for adults.
                    <br />
                    <br />
                    Let us have a recap on the episodes of the same :
                    <br />
                    <br />

                    <ul className="font-semibold font-nunitoSans">
                        <li> 1. A Cause for the Paws</li>
                        <li>2. The Knight’s Code</li>
                        <li>3. The Lotus</li>
                        <li>4. The Legend of Master Longtooth</li>
                        <li>5. The Gateway to Desert</li>
                        <li>6. The Lost City</li>
                        <li>7. The Last Guardian</li>
                        <li> 8. A Thread in the Dark</li>
                        <li>9. Slow Boat to England</li>
                        <li>10. The Knight’s Fall Part 1</li>
                        <li>11. The Knight’s Fall Part 2</li>
                    </ul>

                    <div className="my-6 w-[95vw] sm:w-[804px] sm:h-[453px]">
                        <img src="Layer15.png" alt="" className="w-[100%] h-[100%]" />
                    </div>

                    <p className='text-[18px]'>
                        Po might just be the laziest, clumsiest panda in the Valley of Peace, but he secretly dreams of becoming a kung fu legend. When the villainous snow leopard Tai Lung threatens Po's homeland, the hapless panda is chosen to fulfil an ancient prophecy and defend the Valley from attack.
                    </p>

                    <h3 className="font-bold font-nunitoSans my-6">Official Synopsis of Kungfu Panda:</h3>
                    <div className="bg-gray-200 p-2">
                        <p className="text-[18px] text-[#202020] font-bold font-nunitoSans">
                            <span className="font-newsbt text-[#feae00] text-[74px] leading-[50px] italic">"</span>
                            Po might just be the laziest, clumsiest panda in the Valley of Peace, but he secretly dreams of becoming a kung fu legend. When the villainous snow leopard Tai Lung threatens Po's homeland, the hapless panda is chosen to fulfil an ancient prophecy and defend the Valley from attack.

                        </p>
                    </div>

                    <div className="text-[18px] mt-6 text-[#202020] font-sans">
                        Streamed not more than a month ago, the fans of “Kung Fu Panda: Dragon Knight” already need a season 2. With its comical and exciting situations, the show was loved by the little ones.
                        <br />
                        <br />
                        Since it has not been much time since the show made a debut, the show-runners have not yet made anything clear. However, do not let that concern you. As soon as we receive any update on season 2, we will be here to instantly tell you.
                        <br />
                        <br />
                        Since the show is a part of the Kung Fu Panda Franchise, why not watch pick up something out of it? Till we deliver you updates on season 2 grab some popcorn and enjoy the Kung Fu Panda movies with your tiny ones.
                    </div>
                </div>

            </div>

            <div className="mt-12">
                {/* tags */}
                <div className="flex items-center gap-x-1">
                    <p className="text-[#bf912d] text-[20px] font-nunitoSans">TAGS</p>
                    <div className="w-[84px] h-[2px] bg-[#bf912d]"></div>
                </div>
                {/* tag list */}
                <div>
                    <ul className='text-[16px] flex justify-between sm:justify-around flex-wrap gap-2'>
                        <li className="bg-[#f4f4f4] rounded-md p-[1px] px-3">Kungfu Panda</li>
                        <li className="bg-[#f4f4f4] rounded-md p-[1px] px-3 border-2">Kung Fu Panda: Dragon Knight Season 2</li>
                        <li className="bg-[#f4f4f4] rounded-md p-[1px] px-3">Netflix</li>
                    </ul>
                </div>

                {/* subscribe */}
                <div className="flex justify-center items-center my-[39px] text-[14px]">
                    <div className="border-t border-b border-[#e4e4e4] flex sm:flex-row flex-col justify-between gap-x-6 items-center py-[19px]">
                        <div className="flex items-center gap-x-1">
                            <p>Please Subscribe us at <span>Google News</span></p>
                            <img src="Layer16.png" alt="" />
                        </div>
                        <div className="flex gap-x-2 my-2">
                            <p className="whitespace-nowrap">Follow us:</p>
                            <img height={24} width={24} src="insta.png" alt="" />
                            <img height={24} width={24} src="facebook.png" alt="" />
                            <img height={24} width={24} src="twitter.png" alt="" />
                            <img height={24} width={24} src="youtube.png" alt="" />
                            <img height={24} width={24} src="linkedin.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* author */}
                <div className="flex items-center bg-gray-200 p-4 gap-x-2">
                    <img src="Layer17.png" alt="" />
                    <div>
                        <p className="text-[16px] text-[#bf912d] font-nunitoSans">Manjeet Mahato</p>
                        <p className="text-[14px] text-[#4b4b4b]">Well, a Marvel and DC Comics Nerd by Passion, Content Writer, and Designer by Profession. Completed BSc. Graphic and animation from MCU, Bhopal</p>

                        <div className="flex items-center gap-x-2">
                            <p className="text-[#bf912d] text-[12px]">Reach me at :</p>
                            <div className="flex gap-x-2 items-center">
                                <img src={facebookColoredIcon} alt="" />
                                <img height={24} width={24} src={linkedinColoredIcon} alt="" />
                                <img height={24} width={24} src={whatsappColoredIcon} alt="" />
                                <img height={24} width={24} src={twiterColoredIcon} alt="" />
                                <img height={24} width={24} src="email.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-[32px] mb-[53px]">
                    <button className="rounded-[5px] w-[297px] h-[37px] bg-[#bf912d] text-white text-[16px] font-nunitoSans">POST A COMMENT</button>
                </div>
            </div>
        </div>
    )
}

export default ArticleContainer