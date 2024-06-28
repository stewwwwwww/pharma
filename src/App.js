import React, { useEffect } from "react";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useRouteError,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ResearchPage from "./pages/ResearchPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import OurTeamPage from "./pages/OurTeamPage";
import FaqPage from "./pages/FaqPage";
import ContactUsPage from "./pages/ContactUsPage";
import JoinUsPage from "./pages/JoinUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurRetailers from "./pages/OurRetailersPage";
import OrderPage from "./pages/OrderPage";

import {
  fetchProduct,
  fetchProducts,
  fetchResearch,
  fetchResearchs,
  fetchArticle,
  fetchArticles,
  fetchHome,
  fetchAboutUs,
  fetchOurTeam,
  fetchFaq,
  fetchJoinUs,
  fetchRetailers,
  fetchContactUs,
} from "./utils/fetchData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <HomePage />, loader: fetchHome },
      { element: <OrderPage />, path: "Order" },
      {
        path: "AboutUs",
        children: [
          { index: true, element: <AboutUsPage />, loader: fetchAboutUs },
          { path: "OurTeam", element: <OurTeamPage />, loader: fetchOurTeam },
          { path: "FAQ", element: <FaqPage />, loader: fetchFaq },
          {
            path: "ContactUs",
            element: <ContactUsPage />,
            loader: fetchContactUs,
          },
          { path: "JoinUs", element: <JoinUsPage />, loader: fetchJoinUs },
        ],
      },
      {
        path: "Products",
        children: [
          { index: true, element: <ProductsPage />, loader: fetchProducts },
          {
            path: ":CategoryId",
            children: [
              {
                index: true,
                element: <ProductsPage />,
                loader: fetchProducts,
              },
              {
                path: ":ProductId",
                element: <ProductDetailPage />,
                loader: fetchProduct,
              },
            ],
          },
        ],
      },
      {
        path: "Insights",
        children: [
          {
            path: "Researchs",
            children: [
              {
                index: true,
                element: <ResearchPage />,
                loader: fetchResearchs,
              },
              {
                path: ":ResearchId",
                element: <ResearchDetailPage />,
                loader: fetchResearch,
              },
            ],
          },
          {
            path: "Articles",

            children: [
              { index: true, element: <ArticlePage />, loader: fetchArticles },
              {
                path: ":ArticleId",
                element: <ArticleDetailPage />,
                loader: fetchArticle,
              },
            ],
          },
        ],
      },
      {
        path: "/OurRetailers",
        element: <OurRetailers />,
        loader: fetchRetailers,
      },
    ],
  },
]);
const App = () => {
  if (localStorage.getItem("quantity") === 0) {
    localStorage.setItem("quantity", 0);
  }
  useEffect(() => {
    console.log("test", localStorage.getItem("quantity"));
    return () => {};
  });

  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
};

export default App;
