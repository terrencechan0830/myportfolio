import React from 'react'
import Title from '../layouts/Title'
import FeatureCard from './FeatureCard'
import {FaCodeBranch, FaTerminal, FaChartBar} from "react-icons/fa"

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-gray-600">
      <div className="flex justify-center items-center text-center">
        <Title title="Features" des="What I Do"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <FeatureCard title="App Development"
        des="Developing custom applications that are reliable, scalable, and tailored to meet specific business needs to deliver innovative solutions that exceed expectations."
        icon={<FaTerminal />}/>
        <FeatureCard title="Pipeline Architecture"
        des="Specializing in designing robust pipeline architectures that enable scalable data processing using cloud-based platforms, ETL tools, and data warehousing solutions."
        icon={<FaCodeBranch />}/>
        <FeatureCard title="Data Visualization"
        des="Transforming complex data into easily digestible visualizations that drive business insights by create dynamic dashboards, which help stakeholders make informed decisions."
        icon={<FaChartBar />}/>
      </div>
    </section>
  )
}

export default Features