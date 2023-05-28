import React from 'react';
import {AiOutlineCloudDownload} from "react-icons/ai";

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-12">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">{title}</h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
        {
          des === "My Resume" ? 
          <a href='https://cvws.icloud-content.com/B/AVgdoDJoII5kpEq2PiLhY5nynKquAfmfLtdwtYLLhbIuskbL2AR4CTG_/CV+-+Tsz+Fung+Chan.pdf?o=Agx3CQqQDXuwpPdvhwsGcrG_oXPfxI8_zRzXnZ1AZ0e5&v=1&x=3&a=CAogf89ZEz-U48-L9ZJS-g7PSDk6x-sZthNkl8WvDXmYFcESbRDJuoeMhTEYyZfjjYUxIgEAUgTynKquWgR4CTG_aiaNcIFbkc2DA5Ai5DNNJSAF-wgsRM-79sxIhPw5Z7XEHD0nZCFFnXIm7Gwi-7R0BCQf4IKqQAJ3ZCVuFK7fZrKHaowqeMlJMzUKtUQx2oM&e=1684998245&fl=&r=91d8a50a-ec97-41f3-b82b-9b644b781f16-1&k=HhBpjgdbkXkME5YqC7r1LA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=37&s=y8j2T0j7SoQWZAdUjuZ_Guc46Ug&cd=i' download className='flex justify-center items-center font-semibold hover:text-designColor hover:underline duration-300'>
            <span className='text-2xl'><AiOutlineCloudDownload /></span>
            <p>Download CV</p>
          </a>
          :
          ""
        }
    </div>
  )
}

export default Title