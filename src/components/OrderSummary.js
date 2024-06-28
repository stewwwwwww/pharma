import React from "react";
import pic from "../assets/research.jpg";
import deleteIcon from "../assets/delete.svg";

const OrderSummary = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-4 pt-16 md:gap-12 md:pt-20 lg:pt-24 xl:pt-36">
      <h2 className="text-center">Order Summary</h2>
      <h5 className="text-center">You have added 28 items</h5>
      <div className="flex w-full max-w-[75rem] flex-col justify-between gap-4 md:flex-row">
        <div className="flex flex-col gap-4 md:w-[66%]">
          <div className="flex gap-3 rounded-xl border-[0.1rem] p-2 sm:gap-4 sm:p-4">
            <img
              src={pic}
              className="hidden aspect-square w-28 rounded-md object-cover min-[420px]:block sm:w-48 md:w-32 "
            />
            <div className="flex w-full justify-between">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h6>Gamucid</h6>
                  <p>100.000 VND</p>
                </div>
                <div className="flex h-fit items-start justify-between gap-1 rounded-[0.625rem] border-[0.15rem] border-[#00378A] p-1">
                  <h6>10</h6>
                  <div className="flex flex-col justify-center gap-[0.35rem]">
                    <div
                      class="h-0 w-0 border-b-[10.5px] border-l-[7px]
                    border-r-[7px] border-black border-l-transparent border-r-transparent"
                    ></div>
                    <div
                      class="h-0 w-0 border-l-[7px] border-r-[7px] 
                  border-t-[10.5px] border-black border-l-transparent border-r-transparent"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between text-end">
                <p>1.000.000 VND</p>
                <img src={deleteIcon} className="w-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border-[0.1rem] p-3 sm:p-4 md:w-[32%]">
          <h5>Price Summary</h5>
          <div className="flex justify-between">
            <p>Total:</p>
            <p>4.300.000VND</p>
          </div>
          <div className="flex justify-between">
            <p>Taxes:</p>
            <p>300.000VND</p>
          </div>
          <div className="flex justify-between">
            <p>SubTotal:</p>
            <p>4.600.000VND</p>
          </div>
          <button
            className={
              "mt-4 hidden h-12  rounded-md bg-[#00378A] text-white lg:block"
            }
          >
            <a href="http://localhost:3000/">Proceed to Order</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
