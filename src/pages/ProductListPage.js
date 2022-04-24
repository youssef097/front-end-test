import React, { useEffect, useState } from 'react'
import { getProducts } from "../services/ProductService"
import Item from "../components/Item"
import Search from '../components/Search'
import { useProducts } from '../context/productContext'




function ProductListPage() {

  const {products} = useProducts()
  const [searchText, setSearchText] = useState("")


  function handleSearch(text) {
    setSearchText(text.toLowerCase())
  }


  return (
    <div className="p-4">
      <Search handleSearch={handleSearch} />
      <div className='mb-4'>
        {searchText && <h2>Resultados para "<b>{searchText}</b>"  </h2>}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {
          products.filter(product => {
            return (
              product.brand.toLowerCase().includes(searchText) || product.model.toLowerCase().includes(searchText)
            )
          }).map(product => <Item key={product.id} product={product} />)
        }

      </div>
    </div>
  )
}

export default ProductListPage