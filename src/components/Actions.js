import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FiShoppingCart } from "react-icons/fi"
import { useProducts } from '../context/productContext';

function Actions({ producId, options, productInfo }) {


  const { storages, colors } = options;
  const  {price, brand, model } = productInfo;

  const [storage, setStorage] = useState(storages.length===1?storages[0].code:null)
  const [color, setColor] = useState(colors.length===1?colors[0].code:null)
  const [loadingCart, setLoadingCart] = useState(false)

  const {addToCart} = useProducts();

  function handleColorSelect(code) {
    setColor(code);
  }

  function handleStorageSelect(code) {
    setStorage(code);
  }

  async function handleAddToCart() {
    if (!producId || !color || !storage) {
      toast('Please select storage and color', {
        icon: 'ℹ',
      });
      return;
    }

    const body = {
      id: producId,
      colorCode: color,
      storageCode: storage
    }

    // Data to show in shoppingCart
    const productData = {
      price,
      name:brand + " - " + model
    }
    setLoadingCart(true)

    toast.promise(addToCart(body,productData), {
      loading: 'Loading',
      success: 'Product added to cart sucessfully!',
      error: 'Could not add to cart',
    }).finally(()=>{
      setLoadingCart(false)
    })

  }

  return (
    <div className='border-t-2 pt-4 mt-2 text-center'>
      <div ><span>Storage:</span> </div>
      <div className='flex items-baseline mt-2 mb-4  border-slate-200 '>
        <div className='space-x-4 flex text-sm justify-center  m-auto'>
          {storages.map((e, idx) => <label key={idx}>
            <input onChange={(evt) => { handleStorageSelect(evt.target.value) }} checked={storage == e.code} className="sr-only peer" name="memory" type="radio" value={e.code} />
            <div className="p-2 cursor-pointer rounded-lg flex items-center justify-center text-blue-600 ring-1 ring-blue-600 peer-checked:font-semibold peer-checked:bg-blue-600 peer-checked:text-white">
              {e.name}
            </div>
          </label>)}
        </div>
      </div>
      <div ><span>Color:</span></div>
      <div className='flex items-baseline mt-2 mb-6   border-slate-200'>
        <div className='space-x-4 flex text-sm m-auto' >
          {colors.map((e, idx) => <label key={idx}>
            <input onChange={(e) => { handleColorSelect(e.target.value) }} checked={color == e.code} className="sr-only peer" name="color" type="radio" value={e.code} />
            <div className="p-2 cursor-pointer rounded-lg flex items-center justify-center text-blue-600 ring-1 ring-blue-600 peer-checked:font-semibold peer-checked:bg-blue-600 peer-checked:text-white">
              {e.name}
            </div>
          </label>)}
        </div>
      </div>

      <div className='flex justify-center'>
        <button disabled={!productInfo.price || loadingCart} onClick={() => { handleAddToCart() }} className='p-2 cursor-pointer rounded-lg text-lg bg-yellow-600  text-white flex items-center gap-2 disabled:opacity-40'><FiShoppingCart /> Add to cart </button>
      </div>
     
    </div>
  )
}

export default Actions