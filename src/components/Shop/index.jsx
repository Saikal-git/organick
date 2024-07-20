import React, { useEffect } from "react";
import bgShop from "../../assets/Banner shop.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addElcho } from "../../redux/reducers/addProductSlice";
import ProductCard from "./ProductCard";
import emptyProd from "../../assets/empty_cart_prod1.png";

const Shop = () => {
  const { product } = useSelector((s) => s.add);
  const dispatch = useDispatch();

  const getProd = () => {
    return async (dispatch) => {
      const res = await axios(
        `https://api.elchocrud.pro/api/v1/02fb04b3b8e0347fa2efebdc7072cc15/organick`
      );
      const { data } = res;
      dispatch(addElcho(data));
    };
  };

  useEffect(() => {
    dispatch(getProd());
  }, []);

  return (
    <>
      <div
        style={{
          height: "70vh",
          backgroundImage: `url(${bgShop})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="container">
        {product.length ? (
          <div className="my-[30px] flex items-center justify-center flex-wrap gap-[40px]">
            {product?.map((el) => (
              <ProductCard el={el} key={el._id} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img src={emptyProd} alt="img" width={600} />
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
