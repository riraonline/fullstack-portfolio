import React from 'react';
import { Link } from 'react-router-dom';

const Status = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-alpha to-beta">Message is sent Successfully</span>
      </div>
      <div className="rounded-b-xl mt-10">
        <Link to={'/'} className="py-3 px-10 my-3 bg-alpha text-[#fff] rounded-lg text-center text-xl md:w-60">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Status;
