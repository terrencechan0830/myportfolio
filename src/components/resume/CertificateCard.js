import React from 'react'

const CertificateCard = ({title,logo,result,des}) => {
  return (
    <div className='w-full h-auto group flex'>
        <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
            <span className='absolute bg-black w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-opacity-60'>
                <span className='w-3 h-3 bg-bodyColor rounded-full inline-flex group-hover:bg-designColor duration-300'></span>
            </span>
        </div>
        <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex  flex-col justify-center gap-10 shadow-shadowOne'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-2xl font-semibold group-hover:text-white duration-300'>{title}</h3>
                    <img src={logo} alt={logo} className="h-32 w-32 mb-4" />
                </div>
                <div>
                    <p className='w-20 h-10 bg-black bg-opacity-25 rounded-lg flex items-center justify-center shadow-shadowOne text-designColor text-sm font-medium'>{result}</p>
                </div>
            </div>
            <p>{des}</p>
        </div>
    </div>
  )
}

export default CertificateCard