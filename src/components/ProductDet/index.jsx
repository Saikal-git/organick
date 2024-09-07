// import React from "react";
// import bgDet from "../../assets/Banner2.png";
// import { useSelector } from "react-redux";
// import { FaArrowCircleRight } from "react-icons/fa";

// const ProductDet = () => {
//   const { productDeteils } = useSelector((s) => s.add);
//   console.log(productDeteils, "prodd");
//   const arrNumbers = [1, 2, 3, 4, 5];

//   return (
//     <>
//       <div
//         style={{
//           height: "70vh",
//           backgroundImage: `url(${bgDet})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "top",
//         }}
//       ></div>
//       <div className="container">
//         <div className="flex items-center gap-[80px] justify-center mt-[50px]">
//           <div className="w-[450px]  h-[450px] rounded-[20px] shadow-2xl">
//             <img src={productDeteils.url} alt="" width={400} className="" />
//           </div>
//           <div className="flex items-start flex-col gap-[30px]">
//             <h1 className="text-[35px] font-bold">{productDeteils.name}</h1>
//             <div className="flex">
//               {arrNumbers.map((number) => (
//                 <div
//                   key={number}
//                   className="star"
//                   style={{
//                     background: number <= el.rating ? "orange" : "gray",
//                   }}
//                 ></div>
//               ))}
//             </div>
//             <h1 className="text-[30px] font-bold">{productDeteils.price} $</h1>
//             <p className="w-[600px]">{productDeteils.description}</p>
//             <div className="flex items-center gap-[20px]">
//               <h1>Quentity :</h1>
//               <h1 className="border-2 flex items-center justify-center text-[20px] border-solid border-black w-[120px] h-[58px] rounded-[10px]">
//                 {productDeteils.quantity}
//               </h1>
//               <button
//                 // onClick={() => dispatch(addToBasket(productDeteils))}
//                 className="flex items-center gap-5 bg-[#274C5B] py-[18px] text-white font-bold px-[30px] rounded-[10px] "
//               >
//                 Add To Cart <FaArrowCircleRight />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDet;

import React, { useEffect } from "react";
import bgDet from "../../assets/Banner2.png";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowCircleRight } from "react-icons/fa";
import { addToBasket } from "../../redux/reducers/addProductSlice";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductDet = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { productDeteils } = useSelector((s) => s.add);
  console.log(productDeteils, "prodd");
  const arrNumbers = [1, 2, 3, 4, 5];

  if (!productDeteils) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex items-center relative gap-[80px]  justify-center my-[70px]">
          <a
            href=""
            className="text-[40px] absolute top-[-60px] left-2"
            onClick={() => nav(`/shop`)}
          >
            <IoChevronBackCircleOutline />
          </a>
          <div className="w-[450px] h-[450px] flex items-center justify-center rounded-[20px] shadow-2xl ">
            <img src={productDeteils.url} alt="" width={300} className="" />
          </div>
          <div className="flex items-start flex-col gap-[30px]">
            <h1 className="text-[35px] font-bold">{productDeteils.name}</h1>
            <div className="flex">
              {arrNumbers.map((number) => (
                <div
                  key={number}
                  className="star"
                  style={{
                    background:
                      number <= productDeteils.rating ? "orange" : "gray",
                  }}
                ></div>
              ))}
            </div>
            <h1 className="text-[30px] font-bold">
              {productDeteils.price * productDeteils.quantity} $
            </h1>
            <p className="w-[600px]">{productDeteils.description}</p>
            <div className="flex items-center gap-[20px]">
              <h1>Quantity :</h1>
              <h1 className="border-2 flex items-center justify-center text-[25px] border-bold border-black w-[120px] h-[58px] rounded-[10px]">
                {productDeteils.quantity}
              </h1>
              <button
                onClick={() => dispatch(addToBasket(productDeteils))}
                className="flex items-center gap-5 bg-[#274C5B] py-[18px] text-white font-bold px-[30px] rounded-[10px]"
              >
                Add To Cart <FaArrowCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDet;
