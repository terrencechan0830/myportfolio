import React from 'react'

const CertificateCard = ({title,logo,issuer,issuedt,url}) => {
  return (
    <div className='w-full h-1/4 group flex'>
        <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
            <span className='absolute bg-black w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-opacity-60'>
                <span className='w-3 h-3 bg-bodyColor rounded-full inline-flex group-hover:bg-designColor duration-300'></span>
            </span>
        </div>
        <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne'>
            <div className='flex flex-col lgl:flex-row text-left items-center justify-between gap-6'>
                <div className='flex gap-6 lgl:gap-20 items-center justify-center'>
                    <img src={logo} alt={logo} className="h-20 w-20 lgl:h-32 lgl:w-32" />
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-sm lgl:text-2xl font-semibold text-designColor'>{title}</h3>
                        <p className='text-xs lgl:text-sm group-hover:text-white duration-300'>{issuer}</p>
                        <p className='text-xs lgl:text-sm text-gray-400 group-hover:text-white duration-300'>Issued {issuedt}</p>
                    </div>    
                </div>
                <div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white text-xs lgl:text-base font-bold py-2 px-4 rounded-full">
                        Show Credential
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CertificateCard