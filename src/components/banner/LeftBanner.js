import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaPython } from "react-icons/fa";
import { SiJavascript, SiMicrosoftsqlserver, SiTableau } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Data Engineer.", "Data Analyst.", "Programmer.", "Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
      });
  return (
    <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WEBSITE</h4>
        <h1 className="text-6xl font-bold text-white">
            Hi, I'm {" "}
            <span className="text-designColor capitalize">
            Terrence Chan
            </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
            I use animation as a third dimension by which to simplify experiences
            and kuiding thro each and every interaction. I'm not adding motion
            just to spruce things up, but doing it in ways that.
        </p>
        </div>
        <div className="flex justify-between">
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
            </h2>
            <div className="flex gap-4">
            <span className="bannerIcon">
                <FaFacebookF />
            </span>
            <span className="bannerIcon">
                <FaInstagramSquare />
            </span>
            <span className="bannerIcon">
                <FaLinkedinIn />
            </span>
            </div>
        </div>
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
            </h2>
            <div className="flex gap-4">
            <span className="bannerIcon">
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