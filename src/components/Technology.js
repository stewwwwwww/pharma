import React from "react";
import pic from "../assets/research.jpg";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import point from "../assets/point.png";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
const Technology = () => {
  const animationRef1 = useAnimateContainer()
  const animationRef2 = useAnimateContainer()
  return (
    <div
      className="relative flex items-center w-full flex-col bg-cover bg-no-repeat 
      pt-16 md:pt-20 lg:pt-24 xl:pt-36 mt-16 md:mt-20 lg:mt-24 xl:mt-36"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
      }}
    >
      <div className="flex flex-col items-center gap-7 px-4 w-full max-w-[75rem]
       lg:items-start lg:text-start" ref={animationRef1}>
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
        <button className="mt-8 h-16 w-[11rem] rounded-[2rem] border-[0.1rem] border-white text-white">
          <a href="http://localhost:3000/">Learn More</a>
        </button>
      </div>
      <div
        className="mt-10 flex w-full flex-wrap justify-around gap-2 
         px-2 py-5 backdrop-blur-md backdrop-brightness-[1.15]
         sm:mt-14 sm:gap-9 md:gap-14 lg:gap-24 sm:px-[calc((100%-32rem)/2)] 
         md:mt-16 md:px-[calc((100%-36rem)/2)]  lg:mt-24 
         lg:px-[calc((100%-48rem)/2)] xl:mt-20" ref={animationRef2}
      >
        <img
          src={partner1}
          className="h-[4rem] w-[4rem] sm:h-[6rem] sm:w-[6rem] lg:h-[7.5rem] lg:w-[7.5rem]"
        />
        <img
          src={partner2}
          className="h-[4rem] w-[4rem] sm:h-[6rem] sm:w-[6rem] lg:h-[7.5rem] lg:w-[7.5rem]"
        />
        <img
          src={partner3}
          className="h-[4rem] w-[4rem] sm:h-[6rem] sm:w-[6rem] lg:h-[7.5rem] lg:w-[7.5rem]"
        />
        <img
          src={partner4}
          className="h-[4rem] w-[4rem] sm:h-[6rem] sm:w-[6rem] lg:h-[7.5rem] lg:w-[7.5rem]"
        />
      </div>
    </div>
  );
};

export default Technology;
