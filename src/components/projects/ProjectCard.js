import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({title, des, src, gitUrl, webUrl}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-1000">
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
            <img className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer" src={src} alt="src" />
        </div>
        <div className='w-full mt-5 flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
                <h3>{title}</h3>
                <div className='flex gap-2'>
                    <a href={gitUrl} target="_blank" rel="noopener noreferrer">
                        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <BsGithub />
                        </span>
                    </a>
                    <a href={webUrl} target="_blank" rel="noopener noreferrer">
                        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <FaGlobe />
                        </span>
                    </a>          
                </div>
            </div>
            <div>
                <p className="text-sm tracking-wide hover:text-gray-100 duration-300">{des}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard