import React from "react";
import pic from "../assets/research3.jpg";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import point from "../assets/point.png";
const ReseachIntro = () => {
  return (
    <div
      className="relative flex bg-center items-center w-full flex-col bg-cover bg-no-repeat 
      pt-24 md:pt-32 lg:pt-40 xl:pt-52"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
      }}
    >
      <div className="flex flex-col items-center gap-7 px-4 w-full max-w-[75rem]
       lg:items-start lg:text-start">
        <h2 className="max-w-[44rem] text-white">
          Lorem ipsum dolor sit amet, consectetur sit amet.
        </h2>
        <div className="flex flex-col items-start gap-5 text-start">
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <p className="text-white">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <p className="text-white">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <p className="text-white">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <p className="text-white">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-10 flex flex-wrap justify-around gap-2 
         px-2 py-5 backdrop-blur-md backdrop-brightness-[1.15]
         sm:mt-14 sm:gap-9 md:gap-14 lg:gap-24 sm:px-[calc((100%-32rem)/2)] 
         md:mt-16 md:px-[calc((100%-36rem)/2)] w-full lg:mt-24 
         lg:px-[calc((100%-48rem)/2)] xl:mt-20"
      >
        <img
          src={partner1}
          className="w-[4rem] sm:w-[6rem]"
        />
        <img
          src={partner2}
          className="w-[4rem] sm:w-[6rem]"
        />
        <img
          src={partner3}
          className="w-[4rem] sm:w-[6rem]"
        />
        <img
          src={partner4}
          className="w-[4rem] sm:w-[6rem]"
        />
      </div>
    </div>
  );
};

export default ReseachIntro;
