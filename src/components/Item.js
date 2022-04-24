import React from 'react'
import Image from "./Image"
import {Link} from "react-router-dom"
 
function Item({ product }) {
  return (
    <Link to={"/product/"+product.id}>
    <div className='max-w-sm rounded-xl overflow-hidden cursor-pointer shadow-md p-3 hover:shadow-2xl hover:scale-105'>
      <Image src={product.imgUrl} />
      <div className="px-6 py-4 text-center">
        <div className='h-8 mb-2' >{`${product.brand} | ${product.model}`}</div>
        <div>
          {product.price?<span className='font-bold text-blue-600 text-lg'>{product.price}€</span> : <span className='text-gray-500	'>Precio no disponible</span>}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Item