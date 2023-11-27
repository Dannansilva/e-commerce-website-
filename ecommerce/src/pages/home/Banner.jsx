import React from 'react'
import Bannerimg from "../../../public/images/banner.png"
const Banner = () => {
  return (
    <div className=' bg-slate-600  py-12  xl:px-28 px-4'>
        <div>
            <div className=' md:w-1/2'> 
            <img src={Bannerimg} alt="" /> </div>
        </div>
    </div>
  )
}

export default Banner