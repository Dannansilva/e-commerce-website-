import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa"
import Cards from '../../components/Cards';
const Products = () => {
    const [products,setProducts]= useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const respose = await fetch("/Products.json");
                const data = await respose.json();
                // console.log(data)
                setProducts(data)
            }catch(error){
                console.log("ERROR FETCHING DATA:",error)
            }
        }
        fetchData();
    },[])
    console.log(products)
  return (
    <div  className=' max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
        <h2 className=' text-3xl font-semibold capitalize text-center my-8'>Or subscribe to the newsletter</h2>
        {/* product card */}
        <div>
        <div className=' flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
            {/* all buttons */}
            <div className=' flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                <button>All Products</button>
                <button>T shirts</button>
                <button>Hoodies</button>
                <button>Bag</button>
            </div>
            {/* sorting optins */}
            <div className=' flex justify-end rounded-sm mb-4 gap-2'>
                <div className=' bg-black p-2'>
                    <FaFilter className=' text-white h-4 w-4'/>
                </div>
               
                    <select className=' bg-black text-white px-2 py-1 rounded-sm'>
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="low-to-high">Low to Heigh</option>
                        <option value="heigh-to-low">Heigh to Low</option>
                    </select>
                
            </div>
        </div>
        <Cards/>
        </div>
    </div>
  )
}

export default Products