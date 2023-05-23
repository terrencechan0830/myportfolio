import React from "react";
import { motion } from 'framer-motion'
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            {/* <p className="text-sm text-designColor tracking-[4px]">2015 - 2020</p> */}
            <h2 className="text-3xl md:text-4xl font-bold">Working Experience</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ExperienceCard
                title="Senior Data Engineer"
                subTitle="Lenevo PCCW Solutions (LPS)"
                result="Mar 2022 - Now"
                des=""
            />
            <ExperienceCard
                title="Data Engineer"
                subTitle="Hong Kong Jockey Club (HKJC)"
                result="Nov 2021 - Mar 2022"
                des={["Manage and develop data integration process and ETL with data warehouse in Python and MS SQL Server that ingest positional and risk data of different portfolio managers to assess the portfolio performance",
                    "Work with operation team to understand the requirement and develop BI reports using Excel and Tableau",
                    "Enhance data collection procedure to include information that is relevant for building analytic systems", 
                    "Aggregate unstructured data from different data source and perform data wrangling with Alteryx to deliver data in clean and organized manner",
                    "Develop API to import and export portfolio risk data to risk analytic provider MSCI"]}
            />
            <ExperienceCard
                title="Financial Data Analyst"
                subTitle="TSImagine"
                result="Jul 2020 - Nov 2021"
                des={["Developed general understanding of financial market instruments encompassing equity, derivatives, convertibles, fixed income and other derivatives",
                        "Leveraged scripting skills in Perl, Shell, Python and JavaScript and scheduling skills in AutoSys to build data pipeline jobs to acquire data from vendor such as Reuters and transfer market data to system for pricing",
                        "Manage and support Imagine Softwares production financial databases covering worldwide securities markets",
                        "Investigate and troubleshoot production issues such as job failures or discrepancies in data from clients",
                        "Maintain clients position and security life cycle including corporate actions, resets, unwinds and conversions"]}
            />
        </div>
    </motion.div>
  );
};

export default Experience;
