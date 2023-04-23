import React from 'react'
import Title from '../components/layouts/Title'
import { contactImg } from '../assets'

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Contact With Me" />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex justify-between'>
            <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne'>
                <img className="" src={contactImg} alt="contactImg" />
            </div>
            <div className='w-[60%] h-full flex flex-col justify-between '>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact