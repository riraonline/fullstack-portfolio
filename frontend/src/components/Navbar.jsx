import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className="bg-[#fff] h-20 w-full shadow-md z-50 fixed">
      <input type="checkbox" id="check" hidden />
      <label htmlFor="check" className="float-right leading-[80px] text-delta mr-10 text-2xl xl:hidden">
        <box-icon name="menu"></box-icon>
      </label>
      <Link to={'/messages'} className="text-3xl xl:text-4xl font-bold pl-12 xl:pl-24 leading-[80px] xl:leading-[80px] text-beta">
        RICHARD
      </Link>
      <ul className="xl:float-right mr-10 flex flex-col xl:flex-row space-x-4 leading-[80px] fixed xl:relative h-[100vh] xl:h-0 w-[100%] xl:w-fit top-20 xl:top-0 left-[-100%] xl:left-0 transition-all xl:transition-none duration-300 text-center justify-items-center bg-[#fff]">
        <li className="hover:bg-beta">
          <a href="#home" className="p-[10px] hover:rounded-[5px] hover:text-[#000] xl:text-alpha text-xl">
            Home
          </a>
        </li>
        <li className="hover:bg-beta">
          <a href="#about" className="p-[10px] hover:rounded-[5px] hover:text-[#000] xl:text-alpha text-xl">
            About
          </a>
        </li>
        <li className="hover:bg-beta">
          <a href="#skill" className="p-[10px] hover:rounded-[5px] hover:text-[#000] xl:text-alpha text-xl">
            Skill
          </a>
        </li>
        <li className="hover:bg-beta">
          <a href="#portfolio" className="p-[10px] hover:rounded-[5px] hover:text-[#000] xl:text-alpha text-xl">
            Portfolio
          </a>
        </li>
        <li className="hover:bg-beta">
          <a href="#contact" className="p-[10px] hover:rounded-[5px] hover:text-[#000] xl:text-alpha text-xl">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
