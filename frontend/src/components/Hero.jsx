import React from 'react';
import Img from '../assets/img/Img';

const Hero = () => {
  return (
    <>
      <section className="xl:flex xl:flex-row-reverse xl:justify-between xl:pt-10 pt-20 bg-[#fff]" id="home">
        <div className="xl:px-24 xl:me-14 xl:self-center">
          <Img />
        </div>
        <div className="text-center xl:my-36 justify-self-center mx-10 xl:mx-20 xl:p-10 xl:content-center">
          <h1 className="text-2xl md:text-4xl xl:text-4xl font-bold xl:font-extrabold">Hello, I,m Richard</h1>
          <div className="text-xl md:text-3xl xl:text-2xl my-2">Web Developer</div>
          <p className="text-md md:text-lg xl:text-xl my-2 text-center">
            A web programmer who likes to create and develop a website through several tools and programming languages that have been mastered, both simple websites and specific websites.
          </p>
          <button className="bg-alpha text-[#fff] py-2 px-5 md:w-40 text-center xl:text-2xl my-2 rounded-md">
            <a href="#contact">Hire Me</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
