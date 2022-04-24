import React, { useEffect, useState } from 'react'
import { getProducts } from "../services/ProductService"
import Item from "../components/Item"




function ProductListPage() {

  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    (async () => {
      const products = await getProducts()
      setProducts(products)
    })()
  }, [])

  function handleSearch(e) {    
    // setSearchText(e.target.value);
    // products.filter(product =>{
    //   if(product.brand)
    // })
    setProducts()
  }


  return (
    <div className=" p-4">
      <div className='flex justify-center   mb-5'>       
        <div className="flex items-center justify-center  flex-row-reverse">
          <div className="flex  border-2 border-gray-200 rounded">
            <input onChange={handleSearch} type="text" className="px-4 py-2" placeholder="Search..." />
            <button className="px-4 text-white bg-gray-600 border-l ">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {
          
        products.map(product => <Item key={product.id} product={product} />)
        }

      </div>
    </div>
  )
}

export default ProductListPage