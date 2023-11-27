import React from 'react'
import { FaSearch, FaShoppingBag, FaUser,} from "react-icons/fa";
import logo from "/logo.png"

const Navbar = () => {
  const navItems = [
    {title:"Jewelry & Accessories",path: ""}
  ]
  return (
    
    <header className=' max-w-screen-2xl xl:px-28 px-4'>
      <nav className=' flex justify-between items-center container  md:py-4 pt-6 pb-3'>
        <FaSearch />
        {/* logo */}
        <a href="/"> <img src={logo} alt=''/> </a>
        {/* account and shopping button  */}
        <div className=' text-lg  text-black sm:flex  items-center gap-4 hidden'>
        <a href="/"  className=' flex items-center gap-2'><FaUser/> Account</a>
        <a href="/"  className=' flex items-center gap-2'><FaShoppingBag/> Shopping</a>
        </div>
        </nav>
        <hr />
        {/* category items */}
    </header>
  )
}

export default Navbar