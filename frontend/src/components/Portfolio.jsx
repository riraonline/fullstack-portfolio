import React from 'react';
import Photo1 from '../assets/photo1.png';
import Photo2 from '../assets/photo2.png';

const Portfolio = () => {
  return (
    <>
      <section className="bg-beta h-auto mt-28 md:mt-10 px-10 py-36" id="portfolio">
        <div className="text-5xl text-center font-bold">
          <h2>Portfolio</h2>
        </div>
        <div className="mt-10 lg:mt-0 flex flex-col md:flex md:flex-row md:flex-wrap md:justify-center">
          <div className="border-solid border-2 border-black rounded-xl text-center md:w-[600px] lg:w-[475px] md:mt-3 md:mx-5 lg:mt-32">
            <img className="rounded-t-xl" src={Photo1} alt="Proyek Pertama" />
            <div>
              <div className="bg-[#d1d5db]">
                <h3 className="text-xl font-bold py-2 text-center md:text-3xl">Project 1</h3>
              </div>
              <div className="bg-[#e5e7eb] py-5 px-2 md:py-7 md:px-7">
                <p className="text-md md:text-xl">I did this project when I was still in school, I worked on it in groups using html, css, and javascript within a period of 2 weeks.</p>
              </div>
            </div>
            <div className="bg-[#d1d5db] rounded-b-xl">
              <button className="py-2 px-4 my-5 bg-alpha text-[#fff] rounded-lg text-center md:w-40 md:text-xl">
                <a href="https://eduaction-web.web.app/" target="_blank">
                  Continue
                </a>
              </button>
            </div>
          </div>
          <div className="border-solid border-2 border-black rounded-xl text-center mt-32 md:w-[600px] lg:w-[475px]  md:mx-5">
            <img className="rounded-t-xl" src={Photo2} alt="Proyek Pertama" />
            <div>
              <div className="bg-[#d1d5db]">
                <h3 className="text-xl font-bold py-2 text-center md:text-3xl">Project 2</h3>
              </div>
              <div className="bg-[#e5e7eb] py-5 px-2 md:py-7 md:px-7">
                <p className="text-md md:text-lg">I did this project after completing react js training at an online course called CodePolitan. Here I used React JS and Bootstrap 5 within 4 days.</p>
              </div>
            </div>
            <div className="bg-[#d1d5db] rounded-b-xl">
              <button className="py-2 px-4 my-5 bg-alpha text-[#fff] rounded-lg text-center md:w-40 md:text-xl">
                <a href="https://riraonline.github.io/vite-deploy/" target="_blank">
                  Continue
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
