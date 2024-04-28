import React from "react";
import StaticNavBar from "../components/StaticNavBar";
import Footer from "../components/Footer";
import OurTeamIntro from "../components/OurTeamIntro";
import OurTeamFounder from "../components/OurTeamFounder";
import OurTeamMembers from "../components/OurTeamMembers";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
const OurTeamPage = () => {
  return (
    <div>
      <StaticNavBar />
      <OurTeamIntro />
      <OurTeamMembers />
      <OurTeamFounder />
      <Contact />
      <FAQ />

      <Footer />
    </div>
  );
};

export default OurTeamPage;
