import React from 'react'
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from '../../assets'

const LeftContact = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
        <img className="w-full h-auto object-cover rounded-lg mb-2" src={contactImg} alt="contactImg" />
        <div className='flex flex-col gap-4'>
            <h3 className='text-3xl font-bold text-white'>Terrence Chan</h3>
            {/* <p className='text-lg font-normal text-gray-400'>Full Stack Developer</p> */}
            <p className='text-base text-gray-400 tracking-wide'>
                I'm always open to new opportunities and partnerships. Send me a message and let's connect!
            </p>
            <p className='text-base text-gray-400 flex items-center gap-2'>
            Phone: <span className='text-lightText'>+852 98363086</span>
            </p>
            <p className='text-base text-gray-400 flex items-center gap-2'>
            Email: {" "}
            <span className='text-lightText'>terrencechan0830@gmail.com</span>
            </p>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-base uppercase font-titleFont mb-2'>
            Find me in
            </h2>
            <div className="flex gap-4">
            <a href='https://www.facebook.com/chan.terrence.7/' target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                        <FaFacebookF />
                    </span>
                </a>
                <a href='https://www.instagram.com/terrence_ctf/' target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                        <FaInstagramSquare />
                    </span>
                </a>
                <a href='https://www.linkedin.com/in/terrence-chan-86228a159' target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                </a>
                <a href='https://github.com/terrencechan0830' target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                        <FaGithub />
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default LeftContact