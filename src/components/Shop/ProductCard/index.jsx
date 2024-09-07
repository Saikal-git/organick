import axios from "axios";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  productDet,
} from "../../../redux/reducers/addProductSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const arrNumbers = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const delProduct = async () => {
    const { data } = await axios.delete(
      `https://api.elchocrud.pro/api/v1/02fb04b3b8e0347fa2efebdc7072cc15/organick/${el._id}`
    );
    dispatch(deleteProduct(data));
  };
  const getProductDeteils = () => {
    dispatch(productDet(el));
    navigate(`/productDet/${el._id}`);
  };
  return (
    <div>
      <div className="container">
        <div className="w-[335px] h-[483px] rounded-[30px] bg-[#F9F8F8] flex items-center justify-between flex-col gap-[30px] py-[40px] px-[20px]">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[20px]">{el.category}</h1>
            <a onClick={delProduct} className="text-3xl cursor-pointer">
              <IoCloseCircleOutline />
            </a>
          </div>
          <img src={el.url} alt="img" width={200} />
          <div className="w-[330px] px-[20px] flex items-start flex-col gap-[7px]">
            <h1
              className="text-[21px] text-[#274C5B] font-bold cursor-pointer"
              onClick={() => getProductDeteils()}
            >
              {el.name}
            </h1>
            <div className="w-full h-[2px] bg-gray-200"></div>
            <div className="flex items-center justify-between w-full">
              <div className="relative">
                {el.price < 400 ? (
                  <h1 className="text-xl  text-[#274C5B] font-bold">
                    {el.price < 400 ? el.price : null} сом
                  </h1>
                ) : (
                  <h1 className="text-xl text-red-500">
                    {el.price > 400
                      ? Math.floor((el.price / 100) * 80)
                      : el.price}{" "}
                    сом
                  </h1>
                )}
                {el.price > 400 ? (
                  <h1 className="text-1xl  text-[#274C5B] font-bold">
                    {el.price} сом
                  </h1>
                ) : // <h1>{el.price} сом</h1>
                null}
              </div>
              {/* <div className="flex">
                {el.price < 400 ? (
                  <h1 className="text-xl ">
                    {el.price > 400 ? el.price : null}
                  </h1>
                ) : (
                  <h1 className="text-2xl text-red-500">
                    {el.price > 400
                      ? Math.floor((el.price / 100) * 80)
                      : el.price}
                    $
                  </h1>
                )}
                {el.price > 400 ? (
                  <h1 className="text-xl absolute top-[330px] line-through right-[70px]">
                    {el.price}$
                  </h1>
                ) : (
                  <h1 className="text-2xl">{el.price}$</h1>
                )}
              </div> */}
              <div className="flex items-center">
                {arrNumbers.map((number) => (
                  <div
                    key={number}
                    className="star"
                    style={{
                      background: number <= el.rating ? "orange" : "gray",
                    }}
                  ></div>
                ))}
                <h1 className="w-[21px] h-[21px] flex items-center justify-center ml-[5px] text-[15px] font-bold bg-blue-400 rounded-[50%]">
                  {el.rating}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
