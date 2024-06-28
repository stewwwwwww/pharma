import React from "react";
import Button from "./Button";
import pic from "../assets/pharmacist.jpg";
import { useAnimateContainer } from "../hooks/useAnimateContainer";

const About = () => {
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div
    
      className="shadowContainer relative mx-4 mt-16  flex flex-col gap-10 rounded-[0.625rem] border-2 pb-5 
      pt-10 md:mt-20 lg:mt-24 lg:flex-row lg:gap-20 lg:px-0 lg:pl-12 
    lg:pr-5 lg:pt-6 xl:mx-auto xl:mt-36 xl:max-w-[75rem]"
    >
      <div
        className="flex flex-col items-center gap-5 px-5 lg:mr-0 lg:w-[56rem] lg:items-start 
      lg:text-start"
        ref={animationRef1}
      >
        <h6 className="text-[#00378A]">About Us</h6>
        <h2 className="font-medium">Over 20 Years of Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pretium hendrerit nunc non viverra. Nulla ipsum felis, suscipit in
          dolor sit amet, porttitor pulvinar lectus. Aliquam et sem eget.
        </p>
        <Button
          bgColor="#FFFFFF"
          textColor="#FFFFFF"
          linkTo=""
          textContent="Learn More"
        />
      </div>
      <div
        style={{ backgroundImage: `url(${pic})` }}
        className="mx-5 flex h-[20rem]  w-auto flex-col justify-between rounded bg-cover bg-center
         bg-no-repeat text-start md:mx-[12%] lg:m-0 lg:h-[32.25rem] lg:w-full"
      >
        <div
          className="mt-6 flex flex-col items-start pl-7"
          ref={animationRef2}
        >
          <h2 className="font-semibold text-white">300+</h2>
          <h6 className="text-white">certificactes</h6>
          <h2 className="font-semibold text-white">300+</h2>
          <h6 className="text-white">certificactes</h6>
        </div>
        <div className="flex h-[25%] items-center pl-7 backdrop-blur-sm">
          <h6 className="text-white">
            We care Too Much about Our Customers safsa
          </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
