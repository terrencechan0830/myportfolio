import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import {FaBars, FaCodeBranch, FaTerminal, FaChartBar} from "react-icons/fa"

const Features = () => {
  return (
    <section id="features" className="w-full h-[700px] py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do"/>
      <div className="grid grid-cols-3 gap-20">
        <Card title="Business Strategy"
        des="The moon shone brightly in the night sky, casting a silvery glow over the deserted street. A lone figure walked, lost in thought, while the city slept peacefully around them."
        icon={<FaBars />}/>
        <Card title="App Development"
        des="The moon shone brightly in the night sky, casting a silvery glow over the deserted street. A lone figure walked, lost in thought, while the city slept peacefully around them."
        icon={<FaTerminal />}/>
        <Card title="Data Visualization"
        des="The moon shone brightly in the night sky, casting a silvery glow over the deserted street. A lone figure walked, lost in thought, while the city slept peacefully around them."
        icon={<FaChartBar />}/>
      </div>
    </section>
  )
}

export default Features