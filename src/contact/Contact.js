import React from 'react'
import Title from '../components/layouts/Title'
import LeftContact from './LeftContact'


const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Contact With Me" />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex justify-between'>
            <LeftContact />
            <div className='w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-ShadowOne'>
              <form className='w-full flex flex-col gap-6 py-2'>
                <div className='w-full flex gap-10'>
                  <div className='w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</p>
                    <input className='contactInput' type='text' />
                  </div>
                  <div className='w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                    <input className='contactInput' type='text' />
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                  <input className='contactInput' type='email' />
                </div>
                <div className='flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                  <input className='contactInput' type='text' />
                </div>
                <div className='flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Message</p>
                  <textarea cols='30' rows="10" type='text' />
                </div>
              </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact