import React from "react";
import {Link} from "react-router-dom";
const companylogo = [
  { id: 1, img: "/images/company/brand1.png" },
  { id: 2, img: "/images/company/brnad2.png" },
  { id: 3, img: "/images/company/brand3.png" },
  { id: 4, img: "/images/company/brnad4.png" },
  { id: 5, img: "/images/company/brand5.png" },
];
const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/* branch logo */}
      <div className=" flex items-center justify-around flex-wrap gap-5 py-5">
        {companylogo.map(({ id, img }) => (
          <div key={id}>
            {" "}
            <img src={img} alt="" />{" "}
          </div>
        ))}
      </div>
      {/* category */}
      <div className=" mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className=" font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
           <Link to="/" > <img src="/public/images/category/img1.png" alt=""  className=" w-full hover:scale-105 transition-all duration-200"/> </Link>
        </div>
        <div className=" md:w-1/2"> 
         <div className=" grid grid-cols-2 gap-2 ">
            <Link to="/" > <img src="/public/images/category/img2.png" alt="" className=" w-full hover:scale-105 transition-all duration-200"/> </Link>
            <Link to="/" > <img src="/public/images/category/img3.png" alt="" className=" w-full hover:scale-105 transition-all duration-200"/> </Link>
            <Link to="/" > <img src="/public/images/category/img4.png" alt="" className=" w-full hover:scale-105 transition-all duration-200"/> </Link>
            <Link to="/" > <img src="/public/images/category/img5.png" alt="" className=" w-full hover:scale-105 transition-all duration-200"/> </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
