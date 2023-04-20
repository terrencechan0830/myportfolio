import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className='w-full h-1/2 group flex'>
        <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
            <span className='absolute bg-black w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-opacity-60'>
                <span className='w-3 h-3 bg-bodyColor rounded-full inline-flex group-hover:bg-designColor duration-300'></span>
            </span>
        </div>
        <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex  flex-col justify-center gap-10 shadow-shadowOne'>
            <div className='flex justify-between bg-blue-500'>
                <div>
                    <h3 className='text-2xl font-semibold group-hover:text-white duration-300'>{title}</h3>
                    <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{subTitle}</p>
                </div>
                <div>
                    <p>{result}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResumeCard