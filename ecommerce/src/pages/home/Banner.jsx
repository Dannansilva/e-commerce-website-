import React from "react";
import Bannerimg from "../../../public/images/banner.png";
import { FaShoppingBag } from "react-icons/fa";
const Banner = () => {
  return (
    <div className=" bg-slate-400 py-12  xl:px-28 px-4">
      <div className=" py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        {/* Image  */}
        <div className=" md:w-1/2">
          <img src={Bannerimg} alt="" />{" "}
        </div>
        {/* text */}
        
        <div className=" md:w-1/2">
          <h1 className=" text-5xl font-light mb-5">Collections</h1>
          <p className=" text-xl mb-7">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className=" bg-black text-white  hover:bg-white hover:text-black px-6 py-2 font-semibold  rounded-sm flex items-center gap-4">
            <FaShoppingBag className=" inline-flex " /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
