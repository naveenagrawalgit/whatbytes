import React from 'react'
import Image from 'next/image'
import products from '../../data/product'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import AddCartButton from './AddCartButton'
const Card = () => {

    

    return (
        <div className='flex flex-wrap justify-center gap-6 p-4'>
  {products.map((product, index) => (

    <div 
      key={index}
      className='w-full sm:w-[50%] lg:w-[30%] xl:w-[23%] rounded-lg border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white'
    >
      {/* Product Image */}

      <Link href={`/product/${product.id}`}>

       <div className='h-48 flex items-center justify-center p-4 bg-gray-50'>
        <Image
          src={
            product.category === "phone" ? "/phone.webp" :
            product.category === "camera" ? "/camera.webp" :
            product.category === "ipad" ? "/tablet.webp" :
            product.category === "headphone" ? "/headphone.webp" :
            product.category === "laptop" ? "/laptop.webp" :
            "/logo.png"
          }
          alt={product.name}
          width={200}
          height={200}
          className="h-auto w-auto max-h-full object-contain hover:cursor-pointer"
        />
      </div>



     

      {/* Product Info */}
      <div className='p-4 space-y-3'>
        <h3 className='text-black font-bold text-lg capitalize line-clamp-2 min-h-[3rem]'>
          {product.name}
        </h3>
        <p className=' font-bold text-2xl text-gray-800'>${product.price}</p>
        <p className='text-gray-600 text-sm line-clamp-2'>
          {product.description}
        </p>
      </div>

      {/* Add to Cart Button */}
      {/* <div className='p-4 pt-2'>
        <button className=' hover:cursor-pointer w-full bg-blue-800 hover:bg-blue-900 text-white rounded-lg py-2 px-4 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2'>
          <ShoppingCart className="h-5 w-5"   />
          Add to cart
        </button>
      </div> */}
      <AddCartButton/>

      </Link>

      
    </div>
  ))}
</div>
    )
    
}

export default Card