'use client'

import { ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'

const AddCartButton = () => {

  const [ve,setVe] = useState(10);

    const handleCart =(e: React.MouseEvent)=>{
      e.preventDefault()
        e.stopPropagation();

        
          console.log(ve)
          setVe(ve+1)

    }

  return (
    <div className='p-4 pt-2'>
        <button onClick={handleCart} className=' hover:cursor-pointer w-full bg-blue-800 hover:bg-blue-900 text-white rounded-lg py-2 px-4 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2'>
          <ShoppingCart className="h-5 w-5"   />
          Add to cart
        </button>
        </div>
  )
}

export default AddCartButton

