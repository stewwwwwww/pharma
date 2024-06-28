import React from "react";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import About from "../components/About";
import Technology from "../components/Technology";
import Products from "../components/Products";
import Research from "../components/Research";
import Contact from "../components/Contact";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Location from "../components/Location";
import SimpleMap from "../components/SimpleMap";
import ScrollToTop from "../utils/ScrollToTop";

import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Intro />
      <About />
      <Technology />
      {data ? <Research data={data.research} /> : <></>}
      {data ? <Products data={data.product} /> : <></>}
      <Contact />
      {data ? <Articles data={data.article} /> : <></>}
      <Location />
      <SimpleMap />

      <Footer />
    </div>
  );
};

export default HomePage;
