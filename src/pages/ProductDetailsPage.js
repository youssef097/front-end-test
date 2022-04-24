import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
  }, [])


  return (
    productData &&
    <div>

      <h2>DETAILS VIEW</h2>
      <div className='p-8 ' >
        <div className=' flex  max-w-4xl m-auto justify-around' >
          <div className=''>
            <Image width={250} src={productData.imgUrl} />
          </div>
          <div className='flex flex-col gap-3'>
            <Description productData={productData} />
            <Actions producId={productData.id} options={productData.options} addToCart={()=>addToCart} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetailsPage