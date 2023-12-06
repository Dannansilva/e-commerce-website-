import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respose = await fetch("/Products.json");
        const data = await respose.json();
        const product = data.filter((products) => products.id == id);
        console.log(product);
        setProducts(product[0]);
      } catch (error) {
        console.log("ERROR FETCHING DATA:", error);
      }
    };
    fetchData();
  }, [id]);
  const { title, category, price, image, status } = products;
  return (
    <div className=" mt-28 max-w-screen-2xl container mx-auto  xl:px-28 px-4">
      <div className=" p-3 max-w-7xl m-auto">
        <div className=" mt-6 sm:mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
            <div>
              <img src={image} alt="" className=" w-full" />
            </div>
            {/* Products details */}
            <div>
              <h1 className=" title text-left">{title}</h1>
              <p className=" mt-3 text-gray-600 text-base leading-6  text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati provident placeat perspiciatis nam veniam repudiandae.
                Dolores, asperiores! Animi sint ipsam delectus consequatur, hic
                fugit obcaecati neque, ratione ex cumque culpa mollitia iste
                suscipit illo at.</p>
                <span className=" my-2 text-xl text-yellow-500 flex items-center gap-2 sm:my-4">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </span>
              <p className=" text-xl text-red-500 font-semibold sm:text-2xl">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
