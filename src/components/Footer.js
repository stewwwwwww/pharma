import React from "react";
import pic from "../assets/companyLogo.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center pt-16 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="h-[0.0625rem] w-full max-w-[75rem] bg-[#eaeef3]"></div>
      <div className="mx-4 flex max-w-[75rem] flex-col items-center gap-8 py-12 lg:flex-row">
        <div className="flex flex-col items-center gap-7 md:w-[75%] lg:w-[70%] lg:items-start lg:text-start">
          <img src={pic} className="w-[7rem]" />
          <h2 className="font-medium text-[#00378A]">Inquiries?</h2>
          <p className="text-[#838B93]">
            Maecenas vitae dignissim risus. Mauris vitae arcu eleifend,
            elementum nisi eu, porttitor quam. Nullam est felis, molestie sed
            dui ut, tincidunt iaculis enim. Donec tincidunt metus
          </p>
          <button
            className="mt-4 h-16 w-[11rem] rounded-[2rem] border-[0.1rem]
         bg-[#00378A] text-white shadow-[0_0_16px_rgba(0,55,138,0.1)]"
          >
            <a>Contact Us</a>
          </button>
        </div>
        <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:grid-rows-2 md:w-[75%] lg:w-full">
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-[#00378A]">Phone Number</h4>
            <p className="text-[#838B93]">(+84) 0912345678</p>
            <p className="text-[#838B93]">(+84) 0912345678</p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-[#00378A]">Office Location</h4>
            <p className="text-[#838B93]">
              999A Tran hung Dao, Phan Chu Trinh Disct, Hanoi, 10000
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-[#00378A]">Email</h4>
            <p className="text-[#838B93]">minhphuong@gmail.com</p>
            <p className="text-[#838B93]">phuongminh@gmail.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-[#00378A]">Certificate</h4>
            <p className="text-[#838B93]">
              Maecenas vitae dignissim risus. Mauris vitae arcu eleifend,
            </p>
          </div>
        </div>
      </div>
      <div className="h-[0.0625rem] w-full max-w-[75rem] bg-[#eaeef3]"></div>
      <div className="flex flex-col items-center justify-between gap-5 py-6 lg:flex-row px-4 w-full max-w-[75rem]">
        <div className="flex gap-10 flex-wrap justify-center">
          <a className="text-[#838B93]">About</a>
          <a className="text-[#838B93]">Services</a>
          <a className="text-[#838B93]">Research</a>
          <a className="text-[#838B93]">Insights</a>
        </div>
        <div className="flex">
          <p className="text-[#00378A]">Duc Do. &nbsp;</p>{" "}
          <p className="text-[#838B93]">All Rights Reserved 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
