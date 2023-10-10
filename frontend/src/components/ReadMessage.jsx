import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ReadMessage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getMessageById();
  }, []);

  const getMessageById = async () => {
    const response = await axios.get(`http://127.0.0.1:3000/messages/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setMessage(response.data.message);
  };

  //   const updateMessage = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await axios.patch(`http://127.0.0.1:3000/messages/${id}`, {
  //         name,
  //         email,
  //         message,
  //       });
  //       navigate('/messages');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <>
      <section className="bg-[#fff] h-auto mt-5 md:mt-3 px-10 py-2">
        <div className="text-5xl text-center font-bold">
          <h2>Message</h2>
        </div>
        <form className="flex flex-col items-center mt-2">
          <div className="pt-3">
            <input className="outline outline-2 outline-offset-2 rounded-md text-justify h-10 w-72 px-2 pt-1 text-lg md:text-2xl md:w-[685px] md:h-14" type="text" value={name} onChange={(e) => setName(e.target.value)} readOnly={true} />
          </div>
          <div className="pt-5">
            <input className="outline outline-2 outline-offset-2 rounded-md text-justify h-10 w-72 px-2 pt-1 text-lg md:text-2xl md:w-[685px] md:h-14" type="email" value={email} onChange={(e) => setEmail(e.target.value)} readOnly={true} />
          </div>
          <div className="pt-5">
            <textarea
              className="outline outline-2 outline-offset-2 rounded-md text-justify px-2 h-60 w-72 pt-3 text-lg md:text-2xl md:w-[685px] md:h-72"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
              readOnly={true}
            ></textarea>
          </div>
          <div className="rounded-b-xl mt-3">
            <Link to={'/messages'} type="submit" className="py-3 px-10 my-3 bg-alpha text-[#fff] rounded-lg text-center text-xl md:w-60">
              Back
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default ReadMessage;
