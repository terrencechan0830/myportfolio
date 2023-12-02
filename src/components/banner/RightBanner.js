import React from 'react'
import { bannerImg } from '../../assets'

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img className="w-[364px] h-[405px] lgl:w-[500px] lgl:h-[550px] xl:w-[550px] xl:h-[600px] z-10" src={bannerImg} alt="bannerImg" />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-b from-[#1e2024] to-[#202327] shadow-ShadowOne flex justify-center items-center">
        </div>
    </div>
  )
}

export default RightBanner