import React from 'react'

function Image({src,width}) {  
  return (
    <div><img width={width} className="mx-auto max-w-full"  src={ src} /></div>
  )
}

export default Image