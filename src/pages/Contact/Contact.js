import React, { useState } from 'react';
import { send } from 'emailjs-com';
import Lottie from 'react-lottie';
import contact from '../../animation/contact.json';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_ieo87p5',
      'template_phi2m8d',
      toSend,
      'user_0L87wnRNEwIJpNiOyhY96'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    e.target.reset();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={'350px'} width={'330px'} />
      <h2 className="text-4xl font-bold text-center my-3 text-green-500">
        Send Me Your Message
      </h2>
      <form onSubmit={onSubmit} className="md:w-2/3 mx-auto">
        <input
          type="text"
          name="from_name"
          placeholder="Enter Your Name"
          value={toSend.from_name}
          onChange={handleChange}
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <br />

        <input
          type="email"
          name="reply_to"
          placeholder="Enter Your Email"
          value={toSend.reply_to}
          onChange={handleChange}
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <br />

        <textarea
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <br />

        <button
          type="submit"
          className="border border-green-400 rounded p-2 bg-green-400 w-full mb-3 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
