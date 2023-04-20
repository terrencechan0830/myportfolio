import React from 'react'
import Title from '../layouts/Title'
import ResumeCard from './ResumeCard'

const Resume = () => {
  return (
    <section id='resume' className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
            <Title title="FULL-STACK DEVELOPER" des="My Resume" />
        </div>
        <div>
            <ul className='w-full grid grid-cols-3'>
                <li className='resumeli'>Education</li>
                <li className='resumeli'>Professional Skills</li>
                <li className='resumeli'>Working Experience</li>
            </ul>
        </div>
        <div className='py-12 font-titleFont'>
            <p className='text-sm text-designColor tracking-[4px]'>2015 - 2020</p>
            <h2 className='text-4xl font-bold'>Education</h2>
        </div>
        <div className='mt-14 w-1/2 h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
                title="Bachelor of Science"
                subTitle="The University of Hong Kong (2015 - 2020)"
                result="3.14/4.3"
                des="Relevant coursework: Machine Learning, Time Series Analysis, Statistical Computing, Econometrics"
            />
            <ResumeCard
                title="High School Education"
                subTitle="King Ling College (2009 - 2015)"
                result="27/35"
                des="Achieved outstanding results in Hong Kong Diploma of Secondary Examination, including 5* in Mathematics, M2 and Physics, demonstrating my strong analyical and problem-solving skills"
            />
        </div>
    </section>
  )
}

export default Resume