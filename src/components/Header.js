import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { useProducts } from '../context/productContext';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const {cartItems} = useProducts()
  return (
    <div className='border-b border-blue-600 p-3 flex justify-evenly items-center' >
      <Link to="/">Home</Link>

      <div class="relative inline-block text-left">
        <div>
          <button onClick={()=>{setShowCart(!showCart)}} className=" flex items-center gap-3 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <FiShoppingCart />
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cartItems}</span>
          </button>
        </div>
        {showCart && <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
            <form method="POST" action="#" role="none">
              <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
            </form>
          </div>
        </div>}
      </div>

    </div>
  )
}

export default Header