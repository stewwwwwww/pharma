import React from "react";
import pic from "../assets/research.jpg";

const ArticlesIntro = () => {
  return (
    <div
      className="relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat 
          py-24 md:py-32 lg:py-40"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
      }}
    >
      <div
        className="flex w-full max-w-[75rem] flex-col items-center gap-6 px-4"
      >
        <h6 className=" text-white">Articles</h6>
        <h1 className="lg:w-[68%] text-white">Revolutionizing Medical Science</h1>
        <p className="lg:w-[68%] text-white">
          Discover how groundbreaking research, innovative technologies, and
          cutting-edge treatments are shaping the future of medicine.
        </p>
      </div>
    </div>
  );
};

export default ArticlesIntro;
