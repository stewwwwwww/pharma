import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import Contact from "../components/Contact";
import { useLoaderData } from "react-router-dom";
const ProductsDetailPage = () => {
  const data = useLoaderData();

  return (
    <div>
      {data ? (
        <>
          <NavBar />
          <ProductDetail data={data} />
          <Contact />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductsDetailPage;
