import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import {FaBars, FaCodeBranch, FaTerminal, FaChartBar} from "react-icons/fa"

const Features = () => {
  return (
    <section id="features" className="w-full h-[700px] py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Features" des="What I Do"/>
      </div>
      <div className="grid grid-cols-3 gap-20">
        <Card title="App Development"
        des="Developing custom applications that are reliable, scalable, and tailored to meet specific business needs to deliver innovative solutions that exceed expectations."
        icon={<FaTerminal />}/>
        <Card title="Pipeline Architecture"
        des="Specializing in designing robust pipeline architectures that enable efficient and scalable data processing using cloud-based platforms, ETL tools, and data warehousing solutions."
        icon={<FaCodeBranch />}/>
        <Card title="Data Visualization"
        des="With a passion for transforming complex data into easily digestible visualizations that drive business insights by create dynamic dashboards, which help stakeholders make informed decisions."
        icon={<FaChartBar />}/>
      </div>
    </section>
  )
}

export default Features