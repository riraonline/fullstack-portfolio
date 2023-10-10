import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Message = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const response = await axios.get('http://127.0.0.1:3000/messages');
    setMessage(response.data);
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/messages/${id}`);
      getMessages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-center flex flex-col justify-center">
        <span className="text-2xl font-bold py-5">List Data Message</span>
        <table className="table-fixed mt-3 text-xl">
          <thead>
            <tr className="text-center border-solid border-4 border-[#000] bg-[#cbd5e1]">
              <th className="w-20 py-5">No.</th>
              <th className="w-56 py-5">Name</th>
              <th className="w-56 py-5">Email</th>
              <th className="w-56 py-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {message.map((data, index) => (
              <tr className="text-center border-solid border-2 border-[#000]" key={data._id}>
                <td className="text-center py-5">{index + 1}</td>
                <td className="text-center py-5">{data.name}</td>
                <td className="text-center py-5">{data.email}</td>
                <td className="flex flex-row justify-center py-5">
                  <Link to={`/messages/read/${data._id}`} className="bg-[#facc15] mx-2 px-3">
                    Read
                  </Link>
                  <button onClick={() => deleteMessage(data._id)} className="bg-[#ef4444] mx-2 px-3">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="rounded-b-xl mt-3">
          <Link to={'/'} type="submit" className="py-3 px-10 my-3 bg-alpha text-[#fff] rounded-lg text-center text-xl md:w-60">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Message;
