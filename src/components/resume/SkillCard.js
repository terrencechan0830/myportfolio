import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({skill, percentage, width}) => {
  return (
    <div>
        <div className='overflow-x-hidden'>
            <p className='text-base Captalize font-medium'>{skill}</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span
                initial={{ x: "-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.3}}
                className={`${width} h-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-sm relative`}>
                    <span className='absolute -top-7 right-0'>{percentage}</span>
                </motion.span>
            </span>
        </div>
    </div>
  )
}

export default SkillCard