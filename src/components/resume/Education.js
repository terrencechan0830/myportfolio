import React from 'react'
import { motion } from "framer-motion"
import EducationCard from './EducationCard'
 
const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}> 
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className='mt-14 w-full h-[900px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <EducationCard
                title="Bachelor of Science"
                subTitle="The University of Hong Kong (2015 - 2020)"
                result="3.14/4.3"
                des="Relevant coursework: Machine Learning, Time Series Analysis, Statistical Computing, Econometrics"
            />
            <EducationCard
                title="High School Education"
                subTitle="King Ling College (2009 - 2015)"
                result="27/35"
                des="Achieved outstanding results in Hong Kong Diploma of Secondary Examination, including 5* in Mathematics, M2 and Physics, demonstrating my strong analyical and problem-solving skills"
            />
        </div>
    </motion.div>
  )
}

export default Education