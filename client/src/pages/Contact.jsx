import React, { useState } from "react";
import { services } from "../data/services.js";
import SimpleHeader from "../components/SimpleHeader.jsx";
import Footer from "../components/Footer.jsx";


const Contact = () => {
  const [service, setSelectedService] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handlemessageChange= (event) => setMessage(event.target.value);
  const handleEmailChange  = (event) => setEmail(event.target.value);
  const handleSubjectChange = (event) => setSubject(event.target.value);

  const sendEmail = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    const response = await fetch('http://localhost:3333/contact', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setMessage('');
      setEmail('');
      setSubject('');
    }
  };

  const handleSendBtnClick = () => {
    sendEmail();
  };
  return (
    <>
      <SimpleHeader />
      <div className="flex flex-col pt-[4rem] items-center h-screen w-full">
        <h2>Get in Touch</h2>
        <p>If you have any questions, suggestions, or need support, feel free to reach out to us. We'd love to hear from you!</p>
        <p>And if you have a skill that does not exist in the category, you can contact us.</p>
        <div className="flex flex-col gap-2 sm:mt-[3rem] items-center">

          <div className=" flex items-center gap-[4rem]">
            <label className="font-semibold">Email: </label>
            <input type="email" name="email" required className="input-style w-[12rem] sm:w-[18rem]" value={email} onChange={handleEmailChange}/>
          </div>

          <div className=" flex items-center gap-[3.2rem]">
            <label for="subject" className="font-semibold">subject:</label>
            <input type="text" name="subject" required className="input-style w-[12rem] sm:w-[18rem]" value={subject} onChange={handleSubjectChange}/>
          </div>

          <div className=" flex items-center gap-[2.4rem]">
            <label className="font-semibold">Message:</label>
            <textarea name="message" rows="5" required className="input-style w-[12rem] sm:w-[18rem]" value={message} onChange={handlemessageChange}></textarea>
          </div>
            <button type="submit" className="py-2 px-10 bg-slate-100 w-[14rem] border-2 border-slate-400 hover:bg-slate-200 font-semibold mt-[1rem] ml-[7rem]" onClick={handleSendBtnClick}>Send Message</button>
          <div className="flex flex-col contact-info items-center gap-4 mt-2">
            <p>Email: contact@servicehub.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex md:flex-row flex-col items-center gap-2">
              <p>Follow us on social media:</p>
              <a className="hover:bg-slate-100 p-2 cursor-pointer" onClick={() => {
                alert("we don't have any account on the Facebook platform yet");
              }}>Facebook</a>
              <a className="hover:bg-slate-100 p-2 cursor-pointer" onClick={() => {
                alert("we don't have any account on the X(twitter) platform yet");
              }}>Twitter</a>
              <a className="hover:bg-slate-100 p-2 cursor-pointer" onClick={() => {
                alert("we don't have any account on the Instagram platform yet");
              }}>Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
