import React from "react";
import pic from "../assets/research1.jpg";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import point from "../assets/point.png";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
const ProductsIntro = () => {
  const aninmationRef1 = useAnimateContainer()
  const aninmationRef2 = useAnimateContainer()
  return (
    <div
      className="relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat 
      pt-24 md:pt-32 lg:pt-40 xl:pt-52"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
      }}
    >
      <div
        className="flex w-full max-w-[75rem] flex-col items-center gap-7 px-4
       lg:items-start lg:text-start"
       ref={aninmationRef1}
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
        <button className="mt-8 h-16 w-[11rem] rounded-[2rem] border-[0.1rem] border-white text-white">
          <a href="http://localhost:3000/">Learn More</a>
        </button>
      </div>
      <div
        className="mt-10 flex w-full flex-wrap justify-around 
         gap-2 px-2 py-5 backdrop-blur-md
         backdrop-brightness-[1.15] sm:mt-14 sm:gap-9 sm:px-[calc((100%-32rem)/2)] md:mt-16 
         md:gap-14 md:px-[calc((100%-36rem)/2)] lg:mt-24 lg:gap-24 
         lg:px-[calc((100%-48rem)/2)] xl:mt-20"
         ref={aninmationRef2}
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

export default ProductsIntro;
