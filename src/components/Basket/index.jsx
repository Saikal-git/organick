import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import empty from "../../assets/empty-cart.png";
import CountUp from "react-countup";
import { removeAll } from "../../redux/reducers/addProductSlice";

const Basket = () => {
  const { basket, product } = useSelector((s) => s.add);
  console.log(basket, "bas");
  const dispatch = useDispatch();

  let totalPrice = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);
  return (
    <div className="my-[40px]">
      <div className="container">
        {basket.length ? (
          <div className="">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-2xl max-[867px]:text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-16 py-3">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map((el) => (
                    <BasketCard el={el} key={el._id} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between max-[867px]:justify-around">
              <h1 className="text-[30px] max-[867px]:text-[25px]">
                Total Price:
                <CountUp
                  start={0}
                  end={totalPrice}
                  duration={0.7}
                  separator=" "
                ></CountUp>
                c
              </h1>
              <button
                onClick={() => dispatch(removeAll())}
                className="text-white mx-auto   mt-[30px] bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Remove All
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img src={empty} alt="img" width={600} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
