import axios from "axios";
import React, { useState } from "react";

const CreateProduct = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");
  const [category, setCategory] = useState("");

  const createProduct = () => {
    let newProduct = {
      url: productUrl,
      name: productName,
      price: productPrice,
      description: productDes,
      category: category,
      quantity: 1,

      rating: Math.floor(Math.random() * 6),
    };
    axios.post(
      `https://api.elchocrud.pro/api/v1/02fb04b3b8e0347fa2efebdc7072cc15/organick`,
      newProduct
    );
    setProductUrl("");
    setProductName("");
    setProductPrice("");
    setProductDes("");
  };

  return (
    <div>
      <div className="container my-[50px]">
        <div className="w-[50%] flex items-center flex-col mx-auto gap-3">
          <div class="mb-5 w-full">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product (Url...)
            </label>
            <input
              onChange={(e) => setProductUrl(e.target.value)}
              value={productUrl}
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-5 w-full">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-5 w-full">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-5 w-full">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Details
            </label>
            <input
              onChange={(e) => setProductDes(e.target.value)}
              value={productDes}
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <select
            className="w-[400px] h-[50px] px-[10px] text-black text-2xl font-medium border-2 border-solid border-gray-500 rounded-xl"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fresh">Fresh</option>
            <option value="Millets">Millets</option>
            <option value="Nuts">Nuts</option>
            <option value="Health">Health</option>
          </select>
          <button
            onClick={() => createProduct()}
            className="py-[12px] px-[45px] bg-[#274C5B] text-white text-2xl rounded-lg "
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
