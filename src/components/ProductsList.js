import React from "react";
import { Link } from "react-router-dom";
import { isDesktop } from "react-device-detect";
import pic from "../assets/research2.jpg";
import classNames from "classnames";

const ProductsList = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-20 py-16 md:py-20 lg:py-24 xl:py-36">
      <h6 className="text-[#00378A]">Products</h6>
      {data.map((category) => {
        return (
          <div className="mx-4 flex max-w-[75rem] flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-between md:col-span-2 md:col-start-1 lg:md:col-span-3 lg:flex-row">
              <h1>{category.productCategory}</h1>
              <p className="text-[#838B93] md:w-[68%] lg:w-[33%] lg:self-end lg:text-end">
                {category.categoryDescription}
              </p>
            </div>
            {category.productList.map((product, j) => {
              return (
                <div
                  className="group relative flex h-[26rem] flex-col items-center
                   justify-center rounded-[1.25rem] border-[0.0625rem] bg-cover
                   bg-center bg-no-repeat px-0 py-8 lg:h-[28rem]"
                  style={{
                    backgroundImage: `url(${pic})`,
                  }}
                >
                  <div
                    className={classNames(
                      {
                        "absolute inset-0 rounded-[1.25rem] bg-[#6D52FF] opacity-30 transition-opacity duration-[0.7s] ease-in-out group-hover:opacity-75":
                          isDesktop,
                      },
                      {
                        "absolute inset-0 rounded-[1.25rem] bg-[#6D52FF] opacity-30":
                          !isDesktop,
                      },
                    )}
                  ></div>
                  <div className="z-10 mt-10 flex flex-col items-center">
                    <h4
                      className={classNames("relative text-white", {
                        "translate-y-24 transition-transform duration-500 ease-in-out group-hover:translate-y-0":
                          isDesktop,
                      })}
                    >
                      {product.name}
                    </h4>
                    <p
                      className={classNames(
                        "sm:h-18 mb-3 mt-5 text-center text-white  lg:max-w-[70%]",
                        {
                          "forwards opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100":
                            isDesktop,
                        },
                      )}
                    >
                      {product.description}
                    </p>
                    <Link
                      className={classNames("text-white", {
                        "forwards opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100":
                          isDesktop,
                      })}
                      onClick={() => {
                        console.log(
                          `${category.productCategory.replaceAll(/\s/g, "-")}/${product.name.replaceAll(/\s/g, "-")}`,
                        );
                      }}
                      to={`/Products/${category.productCategory.replaceAll(/\s/g, "-")}/${product.name.replaceAll(/\s/g, "-")}`}
                    >
                      Read more
                    </Link>

                    <div className="mt-14 flex justify-between gap-2">
                      <button>
                        <h5 className="w- text-nowrap rounded-[0.625rem] border-[0.15rem] px-4 py-[0.375rem] text-white">
                          Add to Cart
                        </h5>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
