import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaGithub, FaPython } from "react-icons/fa";
import { SiJavascript, SiMicrosoftsqlserver, SiTableau } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Data Engineer.", "Data Analyst.", "Programmer.", "Solution Developer."],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000
      });
  return (
    <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome to my website!</h4>
        <h1 className="text-5xl font-bold text-white">
            Hi, I'm{"  "}
            <span className="text-designColor capitalize">
                Terrence chan
            </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#06b5d4"
            />
        </h2>
        <p className="text-xs font-bodyFont leading-6 tracking-wide">
            With expertise in both batch and real-time processing, I specialize in creating robust data infrastructures that enable organizations to gain valuable insights from their data. My technical skills include proficiency in Python, SQL, and Azure cloud technologies such as Azure Data Factory, Azure Databricks, and Azure Synapse Analytics.
        </p>
        </div>
        <div className="flex justify-between">
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
            </h2>
            <div className="flex gap-4">
                <a href='https://www.facebook.com/chan.terrence.7/' target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                        <FaFacebookF />
                    </span>
                </a>
                <a href='https://www.instagram.com/terrence_ctf/' target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                        <FaInstagramSquare />
                    </span>
                </a>
                <a href='https://www.linkedin.com/in/terrence-chan-86228a159' target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                </a>
                <a href='https://github.com/terrencechan0830' target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                        <FaGithub />
                    </span>
                </a>
            </div>
        </div>
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
            </h2>
            <div className="flex gap-4">
                <span className="bannerIcon" title='Python'>
                    <FaPython />
                </span>
                <span className="bannerIcon">
                    <SiJavascript />
                </span>
                <span className="bannerIcon">
                    <SiMicrosoftsqlserver />
                </span>
                <span className="bannerIcon">
                    <SiTableau />
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LeftBanner