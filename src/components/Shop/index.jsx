import React, { useEffect } from "react";
import bgShop from "../../assets/Banner shop.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addElcho, sortProduct } from "../../redux/reducers/addProductSlice";
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
    window.scrollTo(0, 10);
  }, []);

  return (
    <>
      {/* <div
        style={{
          minHeight: "50vh",
          backgroundImage: `url(${bgShop})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      ></div> */}
      <div className="">
        <div className="container">
          <div className="flex items-center justify-end mt-[50px]">
            <select
              className="block py-2.5 px-0 w-[200px] text-xl text-black bg-transparent border-0 border-b-2 border-black appearance-none  focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              onChange={(e) => dispatch(sortProduct(e.target.value))}
            >
              <option selected>Product Sort</option>
              <option value="cheap">Cheap</option>
              <option value="expensive">Expensive</option>
              <option value="best">Best</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
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
      </div>
    </>
  );
};

export default Shop;
