import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Achievements from './Achievements'


const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setachievementData] = useState(false);
  return (
    <section id='resume' className="w-full h-auto py-20 border-b-[1px] border-b-gray-600">
        <div className="flex flex-col justify-center items-center text-center">
            <Title title="FULL-STACK DEVELOPER" des="My Resume" />
        </div>
        <div>
            <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                <li onClick={() =>
                    setEducationData(true) &
                    setSkillData(false) &
                    setExperienceData(false) &
                    setachievementData(false)} 
                    className={`${educationData? "border-designColor rounded-lg": "border-transparent"} resumeli`}>Education</li>
                <li onClick={() =>
                    setEducationData(false) &
                    setSkillData(false) &
                    setExperienceData(true) &
                    setachievementData(false)}
                    className={`${experienceData? "border-designColor rounded-lg": "border-transparent"} resumeli`}>Experience</li>
                <li onClick={() =>
                    setEducationData(false) &
                    setSkillData(true) &
                    setExperienceData(false) &
                    setachievementData(false)}
                    className={`${skillData? "border-designColor rounded-lg": "border-transparent"} resumeli`}>Professional Skills</li>
                <li onClick={() =>
                    setEducationData(false) &
                    setSkillData(false) &
                    setExperienceData(false) &
                    setachievementData(true)}
                    className={`${achievementData? "border-designColor rounded-lg": "border-transparent"} resumeli`}>Achievements</li>
            </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {experienceData && <Experience />}
        {achievementData && <Achievements />}
    </section>
  )
}

export default Resume