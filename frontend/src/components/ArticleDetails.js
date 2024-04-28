import React from "react";
import pic from "../assets/research.jpg";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
const ArticleDetails = ({ data }) => {
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div>
      <div
        className="relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat 
        py-40 md:py-48 lg:py-56 xl:py-64"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
        }}
      >
        <div
          className="flex w-full max-w-[75rem] flex-col items-center gap-7 px-4
         lg:items-start lg:text-start"
          ref={animationRef1}
        >
          <h1 className="max-w-[44rem] text-white">{data.name}</h1>
          <h5 className="text-white">{data.highlight}</h5>
        </div>
      </div>
      <div
        className="mx-4 flex max-w-[75rem] flex-col gap-9 py-16 text-start
       md:py-20 lg:py-24 xl:mx-auto xl:py-36"
        ref={animationRef2}
      >
        {data.components &&
          data.components.map((item) => {
            switch (item.type) {
              case "header":
                return <h4>{item.content}</h4>;
              case "description":
                return <h6 className="mb-9 text-[#838B93]"> {item.content}</h6>;
              case "paragraph":
                return <h6>{item.content}</h6>;
              case "point":
                return (
                  <h6 className="text-[#0037A8]">
                    &#128898; &nbsp; {item.content}
                  </h6>
                );
              case "image":
                return <img src={item.content} />;
              case "linebreak":
                return Array(Number(item.content))
                  .fill(<br />)
                  .map((item) => {
                    return item;
                  });
              default:
                return;
            }
          })}
      </div>
    </div>
  );
};

export default ArticleDetails;
