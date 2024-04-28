import React from "react";
import StaticNavBar from "../components/StaticNavBar";
import FaqIntro from "../components/FaqIntro";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const FaqPage = () => {
  return (
    <div>
      <StaticNavBar />
      <FaqIntro />
      <FAQ />
      <Footer />
    </div>
  );
};

export default FaqPage;
