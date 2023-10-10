import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const saveMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:3000/messages', {
        name,
        email,
        message,
      });
      navigate('/status');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="bg-[#fff] h-auto mt-20 md:mt-10 px-10 py-36" id="contact">
        <div className="text-5xl text-center font-bold">
          <h2>Contact</h2>
        </div>
        <form onSubmit={saveMessage} className="flex flex-col items-center mt-10">
          <div className="pt-3">
            <input
              className="outline outline-2 outline-offset-2 rounded-md text-justify h-10 w-72 px-2 pt-1 text-lg md:text-2xl md:w-[685px] md:h-14"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              placeholder="Write Your Name, Please!"
            />
          </div>
          <div className="pt-5">
            <input
              className="outline outline-2 outline-offset-2 rounded-md text-justify h-10 w-72 px-2 pt-1 text-lg md:text-2xl md:w-[685px] md:h-14"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="Write Your Email, Please!"
            />
          </div>
          <div className="pt-5">
            <textarea
              className="outline outline-2 outline-offset-2 rounded-md text-justify px-2 h-60 w-72 pt-3 text-lg md:text-2xl md:w-[685px] md:h-72"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="message"
              placeholder="Write the message, Please"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="rounded-b-xl mt-3">
            <button type="submit" className="py-3 px-10 my-3 bg-alpha text-[#fff] rounded-lg text-center text-xl md:w-60">
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
