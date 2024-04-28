import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useRouteError,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ResearchPage from "./pages/ResearchPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import OurTeamPage from "./pages/OurTeamPage";
import FaqPage from "./pages/FaqPage";
import {
  fetchProduct,
  fetchProducts,
  fetchResearch,
  fetchResearchs,
  fetchArticle,
  fetchArticles,
  fetchHome,
} from "./utils/fetchData";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <HomePage />, loader: fetchHome },
      { path: "OurTeam", element: <OurTeamPage /> },
      { path: "FAQ", element: <FaqPage /> },
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
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
};

export default App;
