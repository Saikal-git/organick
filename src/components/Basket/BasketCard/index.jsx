import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteBasket,
  desCremenet,
  inCrement,
  productDet,
} from "../../../redux/reducers/addProductSlice";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";

const BasketCard = ({ el }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const getProductDeteils = () => {
    dispatch(productDet(el));
    nav(`/productDet/${el._id}`);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img
          src={el.url}
          className="w-16 md:w-32 max-w-full max-h-full"
          alt="Apple Watch"
        />
      </td>
      <td
        onClick={() => getProductDeteils()}
        className="px-6 py-4 text-[20px] cursor-pointer font-semibold text-gray-900 dark:text-white"
      >
        {el.name}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(desCremenet(el._id))}
            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <div>
            <h1 className="bg-gray-50 text-center w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {el.quantity}
            </h1>
          </div>
          <button
            onClick={() => dispatch(inCrement(el._id))}
            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 text-[20px]  font-semibold text-gray-900 dark:text-white">
        <CountUp
          start={0}
          end={el.price * el.quantity}
          duration={0.7}
          separator=" "
        ></CountUp>
        c
      </td>
      <td className="px-6 py-4">
        <a
          onClick={() => dispatch(deleteBasket(el._id))}
          className="font-medium text-[25px] text-red-600 dark:text-red-500 hover:underline"
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default BasketCard;
