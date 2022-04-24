import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FiShoppingCart } from "react-icons/fi"
import { useProducts } from '../context/productContext';
import { addToCartPromise } from "../services/ProductService"

function Actions({ producId, options }) {
  const { storages, colors } = options;

  const [storage, setStorage] = useState()
  const [color, setColor] = useState()

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

    toast.promise(addToCart(body), {
      loading: 'Loading',
      success: 'Product added to cart sucessfully!',
      error: 'Could not add to cart',
    }).then(({data})=>{      
      // console.log('====================================');
      console.log(data);
      // console.log('====================================');
    }).catch(({error})=>{
      console.log(error);
    });

  }

  return (
    <div className=''>
      <div ><span>Storage:</span> {storage} </div>
      <div className='flex items-baseline mt-4 mb-6  border-slate-200'>
        <div className='space-x-2 flex text-sm'>
          {storages.map((e, idx) => <label key={idx}>
            <input onChange={(e) => { handleStorageSelect(e.target.value) }} checked={storage == e.code} className="sr-only peer" name="memory" type="radio" value={e.code} />
            <div className="p-2 cursor-pointer rounded-lg flex items-center justify-center text-blue-600 ring-1 ring-blue-600 peer-checked:font-semibold peer-checked:bg-blue-600 peer-checked:text-white">
              {e.name}
            </div>
          </label>)}
        </div>
      </div>
      <div ><span>Color:</span> {color} </div>
      <div className='flex items-baseline mt-4 mb-6   border-slate-200'>
        <div className='space-x-2 flex text-sm' >
          {colors.map((e, idx) => <label key={idx}>
            <input onChange={(e) => { handleColorSelect(e.target.value) }} checked={color == e.code} className="sr-only peer" name="color" type="radio" value={e.code} />
            <div className="p-2 cursor-pointer rounded-lg flex items-center justify-center text-blue-600 ring-1 ring-blue-600 peer-checked:font-semibold peer-checked:bg-blue-600 peer-checked:text-white">
              {e.name}
            </div>
          </label>)}
        </div>
      </div>

      <div className='flex'>
        <button onClick={e => { handleAddToCart() }} className='p-2 cursor-pointer rounded-lg text-lg bg-blue-600 ring-1 text-white flex items-center gap-2'><FiShoppingCart /> Add to cart </button>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default Actions