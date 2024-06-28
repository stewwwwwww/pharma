import React from "react";
import { isDesktop } from "react-device-detect";
import classNames from "classnames";
import { useAnimateContainer } from "../hooks/useAnimateContainer";

const Research = ({ data }) => {
  const animationRef = useAnimateContainer();
  return (
    <div className="flex flex-col items-center pt-16 text-center md:pt-20 lg:pt-24 xl:pt-36">
      <div
        className="flex flex-col items-center gap-5 pb-10 "
        ref={animationRef}
      >
        <h6 className="text-[#00378A]">Research</h6>
        <h2 className="max-w-[50rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>
      <div
        className="mx-4 flex max-w-[75rem] flex-col flex-wrap gap-8 
      md:flex-row md:items-center  md:justify-between md:gap-6 lg:justify-between 
      lg:gap-2 xl:gap-6"
      >
        {data.slice(0, 3).map((item, i) => {
          return (
            <div
              className={classNames(
                "shadowContainer mx-4 flex flex-col items-start gap-5 rounded-[0.625rem] border-2 p-5 text-start sm:p-8 md:mx-0 md:w-[48%] lg:w-[31.2%] lg:p-5",
                { containerHover: isDesktop },
                {
                  "md:left-1/2 md:translate-x-1/2 lg:left-0 lg:translate-x-0":
                    i === 2,
                },
              )}
            >
              <img
                src={item.img}
                className=" h-[20rem] w-full rounded object-cover"
              />
              <h4 className="text-[#00378A]">{item.name}</h4>
              <p className="text-[#838B93]">{item.description}</p>
              <a className="text-[#00378A]">Learn More</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Research;
