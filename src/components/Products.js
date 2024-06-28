import React from "react";
import { useAnimateContainer } from "../hooks/useAnimateContainer.js";

const Products = ({ data }) => {
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div className="flex flex-col items-center gap-10 pt-16 md:pt-20 lg:mx-auto lg:max-w-[77rem] lg:flex-row lg:items-start lg:gap-20 lg:px-4 lg:pt-24 xl:pt-36">
      <div
        className="relative flex flex-col items-center gap-5 lg:w-[32%] lg:items-start lg:text-start"
        ref={animationRef1}
      >
        <h6 className="text-[#00378A]">Products</h6>
        <h2>Our Company's Popular Products</h2>
        <button
          className="bottom-12 mt-4 h-16 w-[11rem] rounded-[2rem] border-[0.1rem]
         bg-[#00378A] text-white shadow-[0_0_16px_rgba(0,55,138,0.1)]"
        >
          <a>View more</a>
        </button>
      </div>
      <div ref={animationRef2}>
        <div className="lg:b-[#e5e7eb] relative mb-12 flex flex-wrap justify-center gap-5 lg:justify-between lg:gap-0 lg:border-b">
          {data[0].productList.slice(0, 4).map((item) => {
            return (
              <div>
                <h5 className="border-b border-[#00378A] px-5 pb-5">
                  {item.name}
                </h5>
              </div>
            );
          })}
        </div>
        <div className="mx-4 flex max-w-[75rem] flex-col gap-14 md:flex-row-reverse lg:mx-0">
          <img
            src={data[0].productList[0].img}
            className="h-[19rem] object-cover md:h-auto md:w-[50%]"
          />
          <div className="flex flex-col gap-5 text-start">
            <h4 className="text-[#00378A]">{data[0].productList[0].name}</h4>
            <p className="text-[#838B93]">
              {data[0].productList[0].description}
            </p>
            <a className="mt-7 text-[#00378A]">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
