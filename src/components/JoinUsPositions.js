import React from "react";
import pic from "../assets/chevron-down.png";
import { useState } from "react";
import classNames from "classnames";

const JoinUsPositions = ({ data }) => {
  const [visible, setVisible] = useState(Array(data.length).fill(false));
  const handleExpandDropdown = (index) => {
    const newVisible = visible.map((item, i) => {
      if (index === i) {
        return !item;
      } else {
        return false;
      }
    });
    setVisible(newVisible);
  };
  return (
    <div className="flex flex-col items-center gap-12 px-4 pt-16 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="flex max-w-[35rem] flex-col text-center lg:max-w-[46rem]">
        <h6 className="text-[#00378A]">Positions List</h6>
        <h2 className="mt-2">Join Our Team</h2>
        <p className="mt-7 text-[#838B93]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pretium hendrerit nunc non viverra. Nulla ipsum felis, suscipit in
          dolor sit amet, porttitor pulvinar lectus. Aliquam et sem eget.
        </p>
      </div>
      <div className="w-full max-w-[75rem]">
        <div className="flex flex-col gap-6">
          {data.slice(0, data.length).map((item, i) => (
            <div className="shadowContainer flex flex-col gap-4 rounded-lg px-8 py-5">
              <div className="flex items-center justify-between">
                <h4 className="text-[#00378A]">{item.position}</h4>
                <h4 className="rounded-2xl bg-[#00378A] px-4 py-2 text-white">
                  {item.location}
                </h4>
              </div>
              <p>{item.description}</p>
              <div
                className="flex w-[9rem] cursor-pointer items-center"
                onClick={() => handleExpandDropdown(i)}
              >
                <h6 className="w-[90%]">Learn More</h6>
                <img
                  src={pic}
                  className={classNames(
                    " w-[24px] transition-transform duration-500",
                    {
                      "-rotate-180 ": visible[i],
                    },
                  )}
                />
              </div>
              <div
                className={classNames(
                  "flex flex-col gap-6 overflow-hidden transition-[max-height] duration-500",
                  { "max-h-[20rem]": visible[i] },
                  { "max-h-0": !visible[i] },
                )}
              >
                <p className="text-[#838B93]">{item.insight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUsPositions;
