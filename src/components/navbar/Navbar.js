import React, {useState} from 'react';
import { FiMenu } from "react-icons/fi";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';
import { NavLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <p className='lgl:text-xl font-semibold'>Terrence | Chan</p>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {
            NavLinksdata.map(({_id, title, link}) => (
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))
          }
        </ul>
        <span onClick={()=>setShowMenu(!showMenu)} className='text-xl mdl:hidden bg-white w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'><FiMenu />
        </span>
        {
          showMenu && (
            <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
              <div className='flex flex-col gap-4 p-2 relative'>
                <div>
                  <p className='font-semibold'>Terrence | Chan</p>
                  <p className="text-xs text-gray-400 mt-4">
                    With expertise in both batch and real-time processing, I specialize in creating robust data infrastructures that enable organizations to gain valuable insights from their data. My technical skills include proficiency in Python, SQL, and Azure cloud technologies such as Azure Data Factory, Azure Databricks, and Azure Synapse Analytics.
                  </p>
                </div>
                <ul className='flex flex-col gap-4 mt-4'>
                  {
                    NavLinksdata.map((item)=>(
                      <li key={item._id} className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
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
              </div>
              <span onClick={() => setShowMenu(false)} className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'>
                <MdClose />
              </span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar