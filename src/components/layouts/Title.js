import React from 'react';
import {AiOutlineCloudDownload} from "react-icons/ai";

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-12">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">{title}</h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
        {
          des === "My Resume" ? 
          <a href='https://www.dropbox.com/scl/fi/4m0iydxvkbjz5qwlbtouw/Terrence-Chan-CV.pdf?rlkey=7lx5pa706xzw6nvnmcq0ud3ka&dl=1' className='flex justify-center items-center font-semibold hover:text-designColor hover:underline duration-300'>
            <span className='text-2xl'><AiOutlineCloudDownload /></span>
            <p className='text-xs'>Download CV</p>
          </a>
          :
          ""
        }
    </div>
  )
}

export default Title

