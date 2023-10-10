import React from 'react';
import PhotoProfil from '../assets/img/PhotoProfil';

const About = () => {
  return (
    <>
      <section className="bg-beta h-auto mt-10 xl:mt-10 px-10 py-36" id="about">
        <div className="text-5xl text-center font-bold">
          <h2>About</h2>
        </div>
        <div className="grid xl:flex justify-items-center xl:justify-around xl:items-center mt-5 xl:mt-10 mb-10">
          <div className="hidden xl:block">
            <PhotoProfil></PhotoProfil>
          </div>
          <div className="xl:w-[500px] mt-3 xl:mt-10 text-[#fff] text-xl text-justify">
            <p>
              I am a graduate of SMK Muhammadiyah 2 Andong in Boyolali majoring in Computer and Network Engineering. I also developed my skills as a web programmer through online classes from CodePolitan. I have expertise in programming and
              experience in creating and developing various types of websites with various tools and programming languages. In addition, I am proficient in using Linux operating systems, especially Ubuntu and Debian, for server purposes and
              configuration of certain applications. I am also able to solve problems and disciplined in managing time.
            </p>
            <div className="flex justify-center mt-5">
              <a href="https://github.com/riraonline" className="p-3">
                <box-icon type="logo" size="lg" name="github"></box-icon>
              </a>
              <a href="https://www.instagram.com/rira.rafi" className="p-3">
                <box-icon type="logo" size="lg" name="instagram"></box-icon>
              </a>
              <a href="https://www.linkedin.com/in/richardin-rafsanjani-6b3072294" className="p-3">
                <box-icon type="logo" size="lg" name="linkedin-square"></box-icon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
