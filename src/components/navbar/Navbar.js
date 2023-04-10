import React from 'react';
import {logo} from "../../assets/index";
import { NavLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {
            NavLinksdata.map((navlink) => (
              <li key={navlink._id}>
                {navlink.title}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar