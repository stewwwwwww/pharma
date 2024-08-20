import React from "react";
import pic from "../assets/companyLogo.png";
import tiktokBlack from "../assets/tiktokblack.svg";
import facebookBlack from "../assets/facebookblack.svg";
import zaloBlack from "../assets/zaloblack.svg";
const Footer = () => {
  const handleOpenFacebook = () => {
    window.open("https://www.facebook.com/Phuongminhpharma123", "_blank");
  };
  const handleOpenTiktok = () => {
    window.open("  https://www.tiktok.com/@gamucidntc.pharma", "_blank");
  };
  const handleOpenZalo = () => {
    window.open("https://zalo.me/4122427993092412872", "_blank");
  };
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
          <div className={"h-8 gap-6 flex"} >
            <img className="w-8 h-8 cursor-pointer"
              src={facebookBlack}
              onClick={handleOpenFacebook}
            ></img>
            <img className="w-8 h-8 cursor-pointer"
              src={tiktokBlack}
              onClick={handleOpenTiktok}
            ></img>
            <img className="w-8 h-8 cursor-pointer"
              src={zaloBlack}
              onClick={handleOpenZalo}
            ></img>
          </div>
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
      <div className="flex w-full max-w-[75rem] flex-col items-center justify-between gap-5 px-4 py-6 lg:flex-row">
        <div className="flex flex-wrap justify-center gap-10">
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
