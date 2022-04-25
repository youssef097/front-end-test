import React from 'react'

function Search({handleSearch}) {
  return (
    <div className='flex justify-center   mb-5'>
      <div className="flex items-center justify-center  flex-row-reverse">
        <div className="flex  border-2 border-blue-200 rounded">
          <input onChange={(evt) => handleSearch(evt.target.value)} type="text" className="px-4 py-2" placeholder="Acer, Alcatel..." />
          <button className="px-4 text-white   bg-blue-600 border-l ">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search