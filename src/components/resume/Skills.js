import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex gap-20'>
        <div className='w-1/2'>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">Features</p>
                <h2 className="text-3xl md:text-4xl font-bold">Programming Languages</h2>
            </div>
            <div className="mt-14 w-full flex flex-col gap-6">
                <SkillCard skill='Python' percentage='70%' />
                <SkillCard skill='Javascript' percentage='50%' />
                <SkillCard skill='SQL' percentage='80%' />
                <SkillCard skill='Shell' percentage='50%' />
                <SkillCard skill='Nodejs' percentage='40%' />
            </div>
        </div>

        <div className='w-1/2'>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">Features</p>
                <h2 className="text-3xl md:text-4xl font-bold">Software</h2>
            </div>
            <div className="mt-14 w-full">
     
            </div>
        </div>
  </motion.div>
  )
}

export default Skills