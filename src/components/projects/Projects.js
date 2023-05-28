import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree} from "../../assets/index"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className="w-full py-20 border-b-[1px] border-b-gray-600">
        <div className="flex justify-center items-center text-center">
            <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
            <ProjectCard
            title="Online Ordering Platform"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
            gitUrl="https://github.com/terrencechan0830/agentOrderForm"
            webUrl=""
            />
            <ProjectCard
            title="Responsive Portfolio"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
            gitUrl="https://github.com/terrencechan0830/myportfolio"
            webUrl=""
            />
            <ProjectCard
            title="Working in Progress..."
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
            />
        </div>
    </section>
  )
}

export default Projects