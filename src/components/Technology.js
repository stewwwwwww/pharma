import React from "react";
import pic from "../assets/research.jpg";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import point from "../assets/point.png";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App.js";
import { useContext } from "react";
const Technology = () => {
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  const { languageContext } = useContext(LanguageContext);
  return (
    <div
      className="relative mt-16 flex w-full flex-col items-center bg-cover 
      bg-no-repeat pt-16 md:mt-20 md:pt-20 lg:mt-24 lg:pt-24 xl:mt-36 xl:pt-36"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
      }}
    >
      <div
        className="flex w-full max-w-[75rem] flex-col items-center gap-16 px-4
       lg:items-start lg:text-start"
        ref={animationRef1}
      >
        <h2 className="max-w-[44rem] text-white">
          {languageContext === "english" ? (
            <>Manufacture Technology</>
          ) : (
            <>Công Nghệ Sản Xuất</>
          )}
        </h2>
        <div className="flex flex-col items-start gap-8 text-start">
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <h5 className="text-white">
              {languageContext === "english" ? (
                <>
                  Multiple GMP qualified factories including Guna, 0.F.I, ...
                  with an area of up to 6000m2{" "}
                </>
              ) : (
                <>
                  Các nhà máy đạt tiêu chuẩn GMP của Guna, 0.F.I… với diện tích
                  lên tới 6000m2.
                </>
              )}
            </h5>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <h5 className="text-white">
              {languageContext === "english" ? (
                <>
                  The integrated quality management system has a structure that
                  ensures ISO 9001:2015 standards.
                </>
              ) : (
                <>
                  Hệ thống Quản lý chất lượng tích hợp có cấu trúc đảm bảo tiêu
                  chuẩn ISO 9001:2015.
                </>
              )}
            </h5>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <h5 className="text-white">
              {languageContext === "english" ? (
                <>
                  The production line is fully automated, producing both single
                  and multi-component treatment agents.
                </>
              ) : (
                <>
                  Dây chuyền sản xuất hoàn toàn tự động, sản xuất cả các chất xử
                  lý đơn chất và đa thành phần.
                </>
              )}
            </h5>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <h5 className="text-white">
              {languageContext === "english" ? (
                <>
                  In particular, all qualitative, quantitative and
                  microbiological controls required by the regulations on
                  medicinal products are fully implemented at the production
                  site, achieving the following certifications: <br />
                  <br />
                  UNI EN ISO 9001 <br />
                  UNI EN ISO 14001
                  <br />
                  UNI EN ISO 22716
                  <br />
                  OHSAS 18001
                  <br />
                  RESPONSIBLE CARE PROGRAM
                  <br />
                  FDA APPROVED
                  <br />
                  HALAL APPROVED
                  <br />
                  ICEA- ECO BIO COSMETICS
                </>
              ) : (
                <>
                  Đặc biệt, tất cả các kiểm soát định tính, định lượng và vi
                  sinh theo yêu cầu của các quy định về thuốc chữa bệnh đều được
                  thực hiện đầy đủ tại nơi sản xuất đạt được các chứng nhận sau:
                  <br />
                  <br />
                  UNI EN ISO 9001 <br />
                  UNI EN ISO 14001
                  <br />
                  UNI EN ISO 22716
                  <br />
                  OHSAS 18001
                  <br />
                  CHƯƠNG TRÌNH CHĂM SÓC TRÁCH NHIỆM
                  <br />
                  FDA PHÊ DUYỆT
                  <br />
                  HALAL ĐƯỢC PHÊ DUYỆT
                  <br />
                  ICEA- ECO BIO COSMETICS
                </>
              )}
            </h5>
          </div>
        </div>
      </div>
      <div
        className="mt-10 flex w-full flex-wrap justify-around gap-2 
         px-2 py-5 backdrop-blur-md backdrop-brightness-[1.15]
         sm:mt-14 sm:gap-9 sm:px-[calc((100%-32rem)/2)] md:mt-16 md:gap-14 
         md:px-[calc((100%-36rem)/2)] lg:mt-24  lg:gap-24 
         lg:px-[calc((100%-48rem)/2)] xl:mt-20"
        ref={animationRef2}
      >
        <img src={partner1} className="w-[4rem] sm:w-[6rem]" />
        <img src={partner2} className="w-[4rem] sm:w-[6rem]" />
        <img src={partner3} className="w-[4rem] sm:w-[6rem]" />
        <img src={partner4} className="w-[4rem] sm:w-[6rem]" />
      </div>
    </div>
  );
};

export default Technology;
