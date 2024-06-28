import React from "react";
import { Link } from "react-router-dom";
import { isDesktop } from "react-device-detect";
import classNames from "classnames";

const ResearchList = ({ data }) => {
  return (
    <div className="mx-4 max-w-[75rem] xl:mx-auto">
      <div className="flex flex-col items-center gap-5 pb-10 pt-16 md:pt-20 lg:pt-24 xl:pt-36">
        <h6 className="text-[#00378A]">Research</h6>
        <div className="flex flex-col items-center justify-between md:col-span-2 md:col-start-1 lg:md:col-span-3 lg:flex-row">
          <h1>Achievements</h1>
          <p className="text-[#838B93] md:w-[68%] lg:w-[33%] lg:self-end lg:text-end">
            Nam eget magna arcu. Morbi molestie, quam cursus eleifend interdum,
            lorem ante tempor nibh, efficitur dictum metus arcu vel sapien.
            Vivamus in ligula
          </p>
        </div>
      </div>
      <div
        className="flex flex-col flex-wrap gap-8 md:flex-row md:items-center
    md:justify-between md:gap-6  lg:grid lg:grid-cols-3 lg:gap-6 lg:gap-y-10"
      >
        {data.map((research) => {
          return (
            <div
              className={classNames(
                "shadowContainer flex flex-col items-start gap-5 rounded-[0.625rem] border-2 p-5 text-start sm:p-8 md:w-[48%] lg:w-full lg:p-5",
                { containerHover: isDesktop },
              )}
            >
              <img
                src={research.img}
                className=" h-[20rem] w-full rounded object-cover"
              />
              <h4 className="text-[#00378A]">{research.name}</h4>
              <p className="text-[#838B93]">{research.description}</p>
              <Link
                to={`${research.name.replaceAll(/\s/g, "-")}`}
                className="text-[#00378A]"
                state={research}
              >
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResearchList;
