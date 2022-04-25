import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductData } from "../services/ProductService"
import Actions from '../components/Actions'
import Description from "../components/Description"
import Image from '../components/Image'

function ProductDetailsPage({addToCart}) {
  const [productData, setProductData] = useState()

  let { id } = useParams()

  useEffect(() => {
    (async () => {
      const data = await getProductData(id)
      setProductData(data)
    })()
  }, [id])


  return (
    productData &&
    <div>
       <nav className="bg-grey-light rounded-md w-full">
        <ol className="list-reset flex">
          <li><Link to="/" className="text-blue-600 hover:text-blue-700">Product  List</Link></li>
          <li><span className="text-gray-500 mx-2">&gt;</span></li>
          <li><Link to={"/product/"+productData.id} className="text-gray-500 hover:text-blue-700">{productData.brand} {productData.model}</Link></li>
          
        </ol>
      </nav>
      <div className='p-8' >
        <div className='flex max-w-4xl m-auto justify-around  flex-col  lg:flex-row' >
          <div>
            <Image width={250} src={productData.imgUrl} />
          </div>
          <div className='flex flex-col-reverse lg:flex-col gap-3'>
            <Description productData={productData} />
            <Actions producId={productData.id} options={productData.options} productInfo={productData} addToCart={()=>addToCart} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetailsPage