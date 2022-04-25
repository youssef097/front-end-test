import React from 'react'

function Description({ productData }) {
  return (
    <div className=''>
      <h3 className='text-black text-xl font-bold border-b-2 border-gray-500 mb-6'>Product Details</h3>
      <ul className='list-disc list-inside'>
        <li>
          <span className='text-sm font-bold'>Price: </span>
          {productData.price?<span className='text-blue-600 text-xl font-bold'>{productData.price}<small>€</small></span>:<span className='text-gray-500'>Precio no disponible</span>} </li>
        <li><span className='text-sm font-bold'>Brand: </span>{productData.brand}</li>
        <li><span className='text-sm font-bold'>Model: </span>{productData.model}</li>
        <li><span className='text-sm font-bold'>CPU: </span>{productData.cpu}</li>
        <li><span className='text-sm font-bold'>RAM: </span>{productData.ram}</li>
        <li><span className='text-sm font-bold'>OS: </span>{productData.os}</li>
        <li><span className='text-sm font-bold'>Resolution: </span>{productData.displayResolution}</li>
        <li><span className='text-sm font-bold'>Battery: </span>{productData.battery}</li>
        <li><span className='text-sm font-bold'>Cameras: </span> <ul className='list-disc list-inside'>
          <li className='ml-4'><span className='text-sm font-bold'>Primary Camera: </span>{Array.isArray(productData.primaryCamera) ? productData.primaryCamera.join(", ") : productData.primaryCamera}.</li>
          <li className='ml-4'><span className='text-sm font-bold'>Secondary Camera: </span>{Array.isArray(productData.secondaryCmera) ? productData.secondaryCmera.join(", ") : productData.secondaryCmera}.</li>
        </ul>
        </li>
        <li><span className='text-sm font-bold'>Dimentions: </span>{productData.dimentions}</li>
        <li><span className='text-sm font-bold'>Weight: </span>{productData.weight}g</li>
      </ul>
    </div>
  )
}

export default Description