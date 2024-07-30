import React from "react";
import pic from "../assets/research.jpg";
import deleteIcon from "../assets/delete.svg";
import { CartContext } from "../App";
import { useContext } from "react";
const OrderSummary = () => {
  const {
    cartContext,
    handleRemoveFromCart,
    handleIncrementCartItem,
    handleDecrementCartItem,
  } = useContext(CartContext);
  return (
    <div className="flex flex-col items-center gap-10 px-4 pt-16 md:gap-12 md:pt-20 lg:pt-24 xl:pt-36">
      <h2 className="text-center">Order Summary</h2>
      <h5 className="text-center">
        You have added {cartContext.quantity} items
      </h5>
      <div className="flex w-full max-w-[75rem] flex-col items-start justify-between gap-4 md:flex-row">
        <div className="flex flex-col gap-4 md:w-[66%]">
          {cartContext.cartList.map((item) => {
            return (
              <div className="flex gap-3 rounded-xl border-[0.1rem] p-2 sm:gap-6 sm:p-4">
                <img
                  src={pic}
                  className="hidden aspect-square w-28 rounded-md object-cover min-[420px]:block sm:w-48 md:w-40 "
                />
                <div className="flex w-full justify-between">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h4>{item.itemName}</h4>
                      <h6>{item.itemTotal} VND</h6>
                    </div>
                    <div className="flex h-fit w-24 items-start justify-between gap-1 rounded-[0.625rem] border-[0.15rem] border-[#00378A] px-3 py-2">
                      <h6>{item.itemQuantity}</h6>
                      <div className="flex flex-col justify-center gap-[0.35rem]">
                        <div
                          onClick={() => {
                            handleIncrementCartItem(
                              item.itemId,
                              item.itemSubtotal,
                              item.itemTotal,
                            );
                          }}
                          className="h-0 w-0 cursor-pointer border-b-[10.5px] border-l-[7px]
                    border-r-[7px] border-black border-l-transparent border-r-transparent"
                        ></div>
                        <div
                          onClick={() => {
                            handleDecrementCartItem(
                              item.itemId,
                              item.itemSubtotal,
                              item.itemTotal,
                            );
                          }}
                          className="h-0 w-0 cursor-pointer border-l-[7px] border-r-[7px]
                  border-t-[10.5px] border-black border-l-transparent border-r-transparent"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between text-end">
                    <h6>{item.itemTotal * item.itemQuantity} VND</h6>
                    <img
                      src={deleteIcon}
                      className="w-6 cursor-pointer"
                      onClick={() => {
                        handleRemoveFromCart(
                          item.itemId,
                          item.itemQuantity,
                          item.itemSubtotal,
                          item.itemTotal,
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 rounded-xl border-[0.1rem] p-3 sm:p-4 md:w-[32%]">
          <h4>Price Summary</h4>
          <div className="flex justify-between">
            <h6>SubTotal:</h6>
            <h6>{cartContext.subtotal}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Total:</h6>
            <h6>{cartContext.total}</h6>
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
