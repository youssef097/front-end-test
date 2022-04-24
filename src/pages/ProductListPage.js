import React, { useEffect, useState } from 'react'
import { getProducts } from "../services/ProductService"





function ProductListPage() {
  useEffect(() => {
    (async () => {
      const products = await getProducts()

      console.log(products);
    })()
  }, [])




  return (
    <div className='bg-slate-200 p-4'>
      <div className='flex justify-between'>
        <h2>LIST VIEW</h2>
        <div>
          <input type="text" placeholder='Search' name="search" />
        </div>
      </div>

    </div>
  )
}

export default ProductListPage