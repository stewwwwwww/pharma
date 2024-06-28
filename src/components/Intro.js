import React from "react";
import video from "../assets/introVideo.mp4";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
const Intro = () => {
  const animateRef = useAnimateContainer();
  return (
    <div className="relative mb-[3.75rem] flex items-center lg:justify-center">
      <video
        loop
        preload="auto"
        muted
        autoPlay
        className="relative h-[46.5rem] w-auto min-w-full object-cover brightness-75
        lg:h-[53.5rem] 2xl:h-[61.5rem]"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        className="absolute z-10 flex max-w-[75rem]  flex-col 
        items-center justify-center gap-7 px-4 lg:w-full 
        lg:items-start lg:text-start"
        ref={animateRef}
      >
        <h6 className="text-white">Lorem ipsum dolor sit</h6>
        <h1 className="max-w-[48rem] text-white">Lorem ipsum dolor sit amet</h1>
        <div className="h-[0.0625rem] w-[90%] bg-[#838b93] md:w-[630px]"></div>
        <p className="text-white lg:w-[24rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          egestas nisi, vitae ultrices magna. Sed in ex et massa rhoncus
          molestie.
        </p>
        <button className="h-16 w-[17rem] rounded-[2rem] border-[0.1rem] border-white text-white">
          <a href="http://localhost:3000/">Make An Appointment</a>
        </button>
      </div>
    </div>
  );
};

export default Intro;
