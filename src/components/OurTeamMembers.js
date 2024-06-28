import React from "react";
import pic from "../assets/phuong.jpg";
const OurTeamMembers = ({data}) => {
  return (
    <div className="flex flex-col items-center gap-10 px-4 pt-16 text-center md:gap-12 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="flex flex-col gap-5 ">
        <h6 className="text-[#00378A]">Core Team</h6>
        <h2>Operation and Department of Marketing</h2>
      </div>
      <div className="flex max-w-[75rem] grid-cols-2 flex-col gap-10 sm:grid">
        {data.map((item) => {
          return (
            <div className="flex flex-col gap-3 px-4 sm:px-0">
              <img
                src={item.img}
                className="aspect-[4/3] rounded object-cover"
              />
              <h5 className=" text-[#00378A]">{item.name}</h5>
              <p className="text-[#838B93">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeamMembers;
