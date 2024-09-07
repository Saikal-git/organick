import { useSelector } from "react-redux";
import ProductCard from "../Shop/ProductCard";
import { useEffect } from "react";

const SearchProduct = () => {
  const { search } = useSelector((s) => s.add);

  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);
  return (
    <div>
      <div className="container">
     { search ?   <div className="flex items-start justify-start flex-wrap gap-7 my-[50px]">
          {search?.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div> : "НИЧЕГО НЕ НАЙДЕНО!"}
      </div>
    </div>
  );
};

export default SearchProduct;

// import React from "react";

// const SearchProduct = () => {
//   return <div>
//     <h1>Hello</h1>
//   </div>;
// };

// export default SearchProduct;
