import React from "react";
import pic from "../assets/research.jpg";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import point from "../assets/point.png";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { Link } from "react-router-dom";
const Technology = () => {
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div
      className="relative mt-16 flex w-full flex-col items-center bg-cover 
      bg-no-repeat pt-16 md:mt-20 md:pt-20 lg:mt-24 lg:pt-24 xl:mt-36 xl:pt-36"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
      }}
    >
      <div
        className="flex w-full max-w-[75rem] flex-col items-center gap-7 px-4
       lg:items-start lg:text-start"
        ref={animationRef1}
      >
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
        <Link
          to="/AboutUs"
          className="shadowContainer p-auto mt-16 text-white flex h-16 w-[11rem] items-center justify-center rounded-[2rem] border-[0.1rem] transition-colors duration-300
        ease-in-out hover:bg-[#00378A] hover:border-none"
        >
          Learn more
        </Link>
      </div>
      <div
        className="mt-10 flex w-full flex-wrap justify-around gap-2 
         px-2 py-5 backdrop-blur-md backdrop-brightness-[1.15]
         sm:mt-14 sm:gap-9 sm:px-[calc((100%-32rem)/2)] md:mt-16 md:gap-14 
         md:px-[calc((100%-36rem)/2)] lg:mt-24  lg:gap-24 
         lg:px-[calc((100%-48rem)/2)] xl:mt-20"
        ref={animationRef2}
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

export default Technology;
