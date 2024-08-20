import React from "react";
import { useAnimateContainer } from "../hooks/useAnimateContainer.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = ({ data }) => {
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  const [productImg, setProductImg] = useState(data[0].productList[0].img);
  const [productName, setProductName] = useState(data[0].productList[0].name);
  const [productDescription, setProductDescription] = useState(
    data[0].productList[0].description,
  );
  const handleToggleProdyct = (e) => {
    setProductImg(
      data[0].productList[e.target.getAttribute("data-productIdx")].img,
    );
    setProductName(
      data[0].productList[e.target.getAttribute("data-productIdx")].name,
    );
    setProductDescription(
      data[0].productList[e.target.getAttribute("data-productIdx")].description,
    );
  };

  return (
    <div className="flex flex-col items-center gap-10 pt-16 md:pt-20 lg:mx-auto lg:max-w-[77rem] lg:flex-row lg:items-start lg:gap-20 lg:px-4 lg:pt-24 xl:pt-36">
      <div
        className="relative flex flex-col items-center gap-5 lg:w-[32%] lg:items-start lg:text-start"
        ref={animationRef1}
      >
        <h6 className="text-[#00378A]">Products</h6>
        <h2>Our Company's Popular Products</h2>
        <Link
          to="/AboutUs"
          className="shadowContainer p-auto mt-16 flex h-16 w-[11rem] items-center justify-center rounded-[2rem] border-[0.1rem] bg-[#00378A] text-white transition-colors duration-300
        ease-in-out hover:border-none hover:bg-white hover:text-[#00378A]"
        >
          Learn more
        </Link>
      </div>
      <div ref={animationRef2}>
        <div className="lg:b-[#e5e7eb] relative mb-12 flex flex-wrap justify-center gap-5 lg:justify-between lg:gap-0 lg:border-b">
          {data[0].productList.slice(0, 4).map((item, idx) => {
            return (
              <div className="md:max-w-[22%]">
                <h5
                  className="cursor-pointer text-nowrap border-b border-[#00378A] px-5 pb-5"
                  data-productIdx={idx}
                  onClick={handleToggleProdyct}
                >
                  {item.name}
                </h5>
              </div>
            );
          })}
        </div>
        <div className="mx-4 flex max-w-[75rem] flex-col gap-14 md:flex-row-reverse lg:mx-0">
          <img
            src={productImg}
            className="h-[19rem] object-cover md:h-auto md:w-[50%]"
          />
          <div className="flex flex-col gap-5 text-start">
            <h4 className="text-[#00378A]">{productName}</h4>
            <p className="text-[#838B93]">{productDescription}</p>
            <Link
              to={`/Products/${data[0].category.replaceAll(/\s/g, "-")}/${productName.replaceAll(/\s/g, "-")}`}
              className="mt-7 text-[#00378A]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
