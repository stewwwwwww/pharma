import React from "react";
import pic from "../assets/chevron-down.png";
import { useState } from "react";
import classNames from "classnames";

const FAQ = () => {
  const data = [
    {
      question:
        "1Our detailed diagnostic assessments incorporate genetic testing empowering you",
      answer:
        "Our detailed diagnostic assessments incorporate genetic testing empowering youOur detailed diagnostic assessments incorporate genetic testing empowering you",
    },
    {
      question:
        "2Our detailed diagnostic assessments incorporate genetic testing empowering you",
      answer:
        "Our detailed diagnostic assessments incorporate genetic testing empowering youOur detailed diagnostic assessments incorporate genetic testing empowering you",
    },
    {
      question:
        "3Our detailed diagnostic assessments incorporate genetic testing empowering you mpowering youOur detailed diagnostic assessments incorporate genetic testing empowering you mpowering youOur detailed diagnostic assessments incorporate genetic testing empowering you ",
      answer:
        "Our detailed diagnostic assessments incorporate genetic testing empowering youOur detailed diagnostic assessments incorporate genetic testing empowering you",
    },
    {
      question:
        "4Our detailed diagnostic assessments incorporate genetic testing empowering you",
      answer:
        "Our detailed diagnostic assessments incorporate genetic testing empowering youOur detailed diagnostic assessments incorporate genetic testing empowering you",
    },
    {
      question:
        "5Our detailed diagnostic assessments incorporate genetic testing empowering you",
      answer:
        "Our detailed diagnostic assessments incorporate genetic testing empowering youOur detailed diagnostic assessments incorporate genetic testing empowering you",
    },
    {
      question:
        "6Our detailed diagnostic assessments incorporate genetic testing empowering you",
      answer:
        "Our detailed diagnostic assessments incorporate genetic testing empowering youOur detailed diagnostic assessments incorporate genetic testing empowering you",
    },
    {
      question:
        "7Our detailed diagnostic assessments incorporate genetic testing empowering you",
      answer:
        "Our detailed diagnostic assessments incorporate genetic testing empowering youOur detailed diagnostic assessments incorporate genetic testing empowering you",
    },
    {
      question:
        "8Our detailed diagnostic assessments incorporate genetic testing empowering you mpowering youOur detailed diagnostic assessments incorporate genetic testing empowering you ",
      answer:
        "Our detailed diagnostic assessments incorporate genetic testing empowering youOur detailed diagnostic assessments incorporate genetic testing empowering you ",
    },
  ];
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
    <div className="flex flex-col items-center gap-10 px-4 pt-16 md:gap-12 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="flex flex-col gap-5 px-4 text-center">
        <h6 className="text-[#00378A]">FAQ</h6>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="w-full max-w-[75rem] justify-between md:flex">
        <div className="flex flex-col gap-4 md:w-[49%]">
          {data.slice(0, Math.floor(data.length / 2)).map((item, i) => (
            <div className="shadowContainer rounded-lg px-8 py-5">
              <div
                className="flex cursor-pointer items-start justify-between py-5"
                onClick={() => handleExpandDropdown(i)}
              >
                <h6 className="w-[90%]">{item.question}</h6>
                <img
                  src={pic}
                  className={classNames(
                    "mt-1 transition-transform duration-500 ",
                    {
                      "-rotate-180 ": visible[i],
                    },
                  )}
                />
              </div>
              <h6
                className={classNames(
                  "flex overflow-hidden text-[#838B93] transition-[max-height] duration-500",
                  { "max-h-[10rem]": visible[i] },
                  { "max-h-0": !visible[i] },
                )}
              >
                {item.answer}
              </h6>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:w-[49%]">
          {data
            .slice(Math.floor(data.length / 2), data.length)
            .map((item, i) => (
              <div className="shadowContainer rounded-lg px-8 py-5">
                <div
                  className="flex cursor-pointer items-start justify-between py-5"
                  onClick={() =>
                    handleExpandDropdown(Math.floor(data.length / 2) + i)
                  }
                >
                  <h6 className="w-[90%]">{item.question}</h6>
                  <img src={pic} className="mt-1" />
                </div>
                <h6
                  className={classNames(
                    "flex overflow-hidden text-[#838B93] transition-[max-height] duration-500",
                    {
                      "max-h-[10rem]": visible[i + Math.floor(data.length / 2)],
                    },
                    { "max-h-0": !visible[i + Math.floor(data.length / 2)] },
                  )}
                >
                  {item.answer}
                </h6>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
