import React from "react";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import classNames from "classnames";
import { isDesktop } from "react-device-detect";

const Articles = ({ data }) => {
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div className="pt-16 md:pt-20 lg:pt-24 xl:pt-36">
      <div
        className="flex flex-col items-center gap-5 pb-10 text-center"
        ref={animationRef1}
      >
        <h6 className="text-[#00378A]">Articles</h6>
        <h2 className="max-w-[50rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>
      <div className="flex flex-col items-center gap-8" ref={animationRef2}>
        {data.slice(0, 3).map((item) => {
          return (
            <div
              className={classNames(
                "shadowContainer mx-4 flex max-w-[75rem] flex-col justify-between gap-6 rounded-[0.625rem] border-2 p-5 sm:p-8 md:flex-row md:text-start lg:gap-0 lg:p-5",
                { containerHover: isDesktop },
              )}
            >
              <img
                src={item.img}
                className="h-[18rem] object-cover sm:h-[24rem] md:w-[40%]"
              />
              <div className="flex flex-col gap-6 md:w-[54%]">
                <h2 className="text-[#00378A]">{item.name}</h2>
                <h5 className="text-[#838B93]">{item.description}</h5>
                <a className="mt-8 text-[#00378A]">Learn More</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
