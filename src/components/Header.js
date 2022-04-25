import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { MdSmartphone } from "react-icons/md"
import { useProducts } from '../context/productContext';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useProducts()
  
  return (
    <>
      <div className='border-b border-blue-600 p-3 ' >
        <div className='container mx-auto p-4 flex justify-between items-center'>        
        <Link to="/" className='text-2xl font-extrabold flex items-center'> <MdSmartphone className='text-blue-600 font-extrabold text-2xl' /> Phone Store</Link>
        <div className="relative inline-block text-left">
          <div>
            <button onClick={() => { setShowCart(!showCart) }} className=" flex items-center gap-3 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
              <FiShoppingCart />
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cartItems}</span>
            </button>
          </div>
        </div>
        </div>
      </div>
     
    </>
  )
}

export default Header