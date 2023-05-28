import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
        <div className='w-full lgl:w-1/2'>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                {/* <p className="text-sm text-designColor tracking-[4px]">Features</p> */}
                <h2 className="text-3xl text-center md:text-4xl font-bold">Programming Languages</h2>
            </div>
            <div className="mt-6 w-full flex flex-col gap-4">
                <SkillCard skill='Python' percentage='95%' width='w-[90%]' />
                <SkillCard skill='SQL' percentage='80%' width='w-[80%]' />
                <SkillCard skill='Javascript' percentage='70%' width='w-[70%]' />
                <SkillCard skill='VBA' percentage='60%' width='w-[60%]' />
                <SkillCard skill='Bash' percentage='50%' width='w-[50%]' />
                <SkillCard skill='Nodejs' percentage='50%' width='w-[50%]' />
            </div>
        </div>

        <div className='w-full lgl:w-1/2'>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                {/* <p className="text-sm text-designColor tracking-[4px]">Features</p> */}
                <h2 className="text-3xl text-center md:text-4xl font-bold">Software & Tools</h2>
            </div>
            <div className="mt-6 w-full flex flex-col gap-4">
                <SkillCard skill='SAS' percentage='90%' width='w-[90%]' />
                <SkillCard skill='Tableau' percentage='80%' width='w-[80%]' />
                <SkillCard skill='Oracle' percentage='60%' width='w-[60%]' />
                <SkillCard skill='Alteryx' percentage='50%' width='w-[50%]' />
                <SkillCard skill='Microsoft Azure' percentage='50%' width='w-[50%]' />
                <SkillCard skill='SSIS' percentage='40%' width='w-[40%]' />
            </div>
        </div>
  </motion.div>
  )
}

export default Skills