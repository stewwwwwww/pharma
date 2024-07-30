import React from "react";
import pic from "../assets/doctor.jpg";
import { useState } from "react";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    
  }
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div
      className="mt-16 flex flex-col items-center bg-[#00378A] py-16 md:mt-20 md:py-20 lg:mt-24 
    lg:flex-row lg:items-stretch lg:py-0 lg:text-start xl:mt-36"
    >
      <div
        className="flex w-full flex-col gap-5 px-4 sm:w-[90%] lg:w-[50%] lg:py-24 lg:pr-6 
      xl:py-36 xl:pl-[calc(50%-37.5rem)] 2xl:w-[56%] 2xl:pr-10"
        ref={animationRef1}
      >
        <h6 className="text-white">Contact Us</h6>
        <h2 className="text-white">Get In Touch To Get More Information!</h2>
        <form className="flex flex-col" ref={animationRef2}>
          <div className="mt-6 flex flex-col gap-x-5 xl:flex-row">
            <input
              className="mb-5 h-16 w-full rounded-lg 
            border-[0.0625rem] border-white bg-[rgba(255,255,255,.1)]
             px-7 text-[1.25rem] 
             text-white placeholder-white lg:font-medium"
              type="text"
              name="customerName"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First Name*"
            />
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
            border-white bg-[rgba(255,255,255,.1)] px-7
             text-[1.25rem] text-white 
             placeholder-white lg:font-medium"
              type="text"
              name="customerName"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last Name*"
            />
          </div>
          <div className="flex flex-col gap-x-5 xl:flex-row">
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
            border-white bg-[rgba(255,255,255,.1)] px-7
             text-[1.25rem] text-white 
             placeholder-white lg:font-medium"
              type="tel"
              name="customerPhoneNum"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Phone Number"
            />
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
           border-white bg-[rgba(255,255,255,.1)] px-7
           text-[1.25rem] text-white 
            placeholder-white lg:font-medium"
              type="email"
              name="customerEmail"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email*"
            />
          </div>
          <textarea
            className="h-36 rounded-lg border-[0.0625rem] border-white bg-[rgba(255,255,255,.1)] 
            px-7 pt-3
             text-[1.25rem] text-white placeholder-white 
             lg:font-medium"
            type="textarea"
            name="customerMessage"
            value={message}
            onChange={handleMessageChange}
            placeholder="Message"
          />
        </form>
        <div
          className="mt-10 flex flex-col items-center gap-5 lg:items-start xl:flex-row-reverse 
        xl:justify-end"
        >
          <p className="ml-6 text-white">A request has been sent!</p>
          <div className="flex flex-row xl:flex-col">
            <p className="text-white">Call Us at &nbsp;</p>
            <p className="text-white">(+84) 0911 229 111</p>
          </div>
          <button className="h-16 w-[17rem] rounded-[2rem] border-[0.1rem] border-white bg-white text-[#00378A]">
            <a href="http://localhost:3000/">Make An Appointment</a>
          </button>
        </div>
      </div>
      <div className="flex min-h-full justify-center lg:w-[50%] 2xl:w-[44%]">
        <img
          src={pic}
          className="mt-14 object-cover px-4 sm:w-[85%] md:w-[95%] lg:mt-0 lg:h-full lg:w-full lg:px-0"
        ></img>
      </div>
    </div>
  );
};

export default Contact;
