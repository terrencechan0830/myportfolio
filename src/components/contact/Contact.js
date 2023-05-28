import React from 'react'
import Title from '../layouts/Title'
import LeftContact from './LeftContact'
import RightContact from './RightContact';

const Contact = () => {
  
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-600">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Contact With Me" />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
            <LeftContact />
            <RightContact />
        </div>
      </div>
    </section>
  )
}

export default Contact