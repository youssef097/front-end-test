import React from 'react'

function Description({productData}) {
  return (
    <div className=''>
      <h3 className=' '>Caracteristicas</h3>
      <hr className='w-5 bg-blue-600' />
      <ul>
        <li><span>Marca: </span>{productData.brand}</li>
        <li><span>Modelo: </span>{productData.model}</li>
        <li><span>Precio: </span>{productData.price}</li>
        <li><span>CPU: </span>{productData.cpu}</li>
        <li><span>RAM: </span>{productData.ram}</li>
        <li><span>Sistema Operativo: </span>{productData.os}</li>
        <li><span>Resolucion de pantalla: </span></li>
        <li><span>Bateria: </span></li>
        <li><span>Camaras: {productData.primaryCamera}  {productData.primaryCamera} </span></li>
        <li><span>Dimensiones: </span></li>
        <li><span>Peso: </span></li>
      </ul>
    </div>
  )
}

export default Description