import React from 'react';
import HTML from '../assets/icons8-html-5.svg';
import CSS from '../assets/icons8-css.svg';
import JavaScript from '../assets/icons8-javascript.svg';
import Bootstrap from '../assets/icons8-bootstrap.svg';
import TailwindCSS from '../assets/icons8-tailwindcss.svg';
import Sass from '../assets/icons8-sass.svg';
import JQuery from '../assets/icons8-jquery.svg';
import ReactJS from '../assets/icons8-react-js.svg';
import NodeJS from '../assets/icons8-node-js.svg';
import ExpressJS from '../assets/icons8-express-js.svg';
import MongoDB from '../assets/icons8-mongodb.svg';
import GitHub from '../assets/icons8-github.svg';
import VSCode from '../assets/icons8-vs-code.svg';
import Windows from '../assets/icons8-windows.svg';
import Linux from '../assets/icons8-linux-48.png';

const Skill = () => {
  return (
    <>
      <section className="bg-[#fff] h-auto mt-10 md:mt-10 p-10 py-36" id="skill">
        <div className="text-5xl text-center font-bold">
          <h2>Skill</h2>
        </div>
        <div className="flex flex-col mt-7 md:flex md:flex-wrap md:flex-row md:justify-center">
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={HTML} alt="Logo HTML" />
            <h3 className="text-3xl font-bold">HTML</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={CSS} alt="Logo CSS" />
            <h3 className="text-3xl font-bold">CSS</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={JavaScript} alt="Logo JavaScript" />
            <h3 className="text-3xl font-bold">JavaScript</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={Bootstrap} alt="Logo Bootstrap" />
            <h3 className="text-3xl font-bold">Bootstrap</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={TailwindCSS} alt="Logo TailwindCSS" />
            <h3 className="text-3xl font-bold">Tailwind</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={Sass} alt="Logo Sass" />
            <h3 className="text-3xl font-bold">Sass</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={JQuery} alt="Logo JQuery" />
            <h3 className="text-3xl font-bold">JQuery</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={ReactJS} alt="Logo ReactJS" />
            <h3 className="text-3xl font-bold">React JS</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={NodeJS} alt="Logo NodeJS" />
            <h3 className="text-3xl font-bold">Node JS</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={ExpressJS} alt="Logo ExpressJS" />
            <h3 className="text-3xl font-bold">Express JS</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={MongoDB} alt="Logo MongoDB" />
            <h3 className="text-3xl font-bold">MongoDB</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={GitHub} alt="Logo GitHub" />
            <h3 className="text-3xl font-bold">GitHub</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={VSCode} alt="Logo VSCode" />
            <h3 className="text-3xl font-bold">VSCode</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={Windows} alt="Logo Windows" />
            <h3 className="text-3xl font-bold">Windows</h3>
          </div>
          <div className="border-solid border-2 border-alpha w-80 rounded-md flex items-center justify-evenly m-5 self-center">
            <img width="125" src={Linux} alt="Logo Linux" />
            <h3 className="text-3xl font-bold">Linux</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
