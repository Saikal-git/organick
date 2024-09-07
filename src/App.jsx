import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Shop from "./components/Shop";
import ProductDet from "./components/ProductDet";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import Error from "./components/Error";
import SearchProduct from "./components/SearchProduct";

const App = () => {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/createProduct",
      element: <CreateProduct />,
    },
    {
      id: 3,
      link: "/shop",
      element: <Shop />,
    },
    {
      id: 4,
      link: "/productDet/:proId",
      element: <ProductDet />,
    },
    {
      id: 5,
      link: "/basket",
      element: <Basket />,
    },
    {
      id: 6,
      link: "*",
      element: <Error />,
    },
    {
      id: 7,
      link: "/search/:value",
      element: <SearchProduct />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {routes?.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
