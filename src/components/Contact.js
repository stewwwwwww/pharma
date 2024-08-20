import React from "react";
import pic from "../assets/doctor.jpg";
import { useState } from "react";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import validator from "validator";
import classNames from "classnames";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [noticeErr, setNoticeErr] = useState(false);

  const [notice, setNotice] = useState("");

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName) {
      setNoticeErr(true);
      setNotice("First Name is required");
      return;
    }
    if (!lastName) {
      setNoticeErr(true);
      setNotice("Last Name is required");
      return;
    }
    if (!phoneNumber) {
      setNoticeErr(true);
      setNotice("Phone Number is required");
      return;
    }
    if (email && !validator.isEmail(email)) {
      setNoticeErr(true);
      setNotice("Email entered is not valid");
      return;
    }
    if (!validator.isMobilePhone(phoneNumber) || phoneNumber.length < 9) {
      setNoticeErr(true);
      setNotice("Phone Number entered is not valid");
      return;
    }

    try {
      const response = await fetch(
        "https://pharmabackend.onrender.com/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            message: message,
          }),
        },
      );
      if (!response.ok) throw new Error("Failed to post contact");
      setNoticeErr(false);
      setNotice("Your request has been sent!");
    } catch (err) {
      setNoticeErr(true);
      setNotice("You can only submit 2 messages a minute!");
      console.error("Failed to post contact", err);
    }
  };

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
        <form
          className="flex flex-col"
          ref={animationRef2}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="mt-6 flex flex-col gap-x-5 xl:flex-row">
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem]
            border-white bg-[rgba(255,255,255,.1)] px-7
             text-[1.25rem] text-white 
             placeholder-white outline-0 lg:font-medium"
              type="text"
              name="customerName"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First Name *"
            />
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
            border-white bg-[rgba(255,255,255,.1)] px-7 text-[1.25rem]
             text-white placeholder-white 
             outline-0 lg:font-medium"
              type="text"
              name="customerName"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last Name *"
            />
          </div>
          <div className="flex flex-col gap-x-5 xl:flex-row">
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
            border-white bg-[rgba(255,255,255,.1)] px-7 text-[1.25rem]
             text-white placeholder-white 
             outline-0 lg:font-medium"
              type="tel"
              name="customerPhoneNum"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Phone Number *"
            />
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
           border-white bg-[rgba(255,255,255,.1)] px-7 text-[1.25rem]
           text-white placeholder-white 
            outline-0 lg:font-medium"
              type="email"
              name="customerEmail"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </div>
          <textarea
            className="h-36 resize-none overflow-hidden rounded-lg border-[0.0625rem] border-white 
            bg-[rgba(255,255,255,.1)] px-7 pt-3 text-[1.25rem] text-white placeholder-white outline-0 lg:font-medium"
            type="textarea"
            name="customerMessage"
            value={message}
            onChange={handleMessageChange}
            placeholder="Message"
          />
          <div
            className="mt-10 flex flex-col items-center gap-5 lg:items-start xl:flex-row-reverse 
        xl:justify-end"
          >
            <p
              className={classNames(
                "lg:max-w-36 xl:ml-6 xl:max-w-48 xl:text-end",
                { "text-red-500": noticeErr },
                { "text-green-500": !noticeErr },
              )}
            >
              {notice}
            </p>
            <div className="flex flex-row xl:flex-col">
              <p className="text-white">Call Us at &nbsp;</p>
              <p className="text-white">(+84) 0911 229 111</p>
            </div>
            <input
              type="submit"
              value="Send"
              className="h-16 w-[12rem] cursor-pointer rounded-[2rem] border-[0.1rem] border-white bg-white
            font-[Inter,sans-serif] text-[1.25rem] text-[#00378A] transition-colors duration-300 ease-in-out
        hover:bg-[#00378A] hover:text-white lg:font-medium"
            />
          </div>
        </form>
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
