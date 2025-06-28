import React from 'react'
import products from '../../../../data/product'
import Image from 'next/image'

const ProductPage = async ({params} : {params: Promise<{productId : string}>}) => {
  
  
  const id = await params;
  
  console.log(id, 'value of id')

  return (
    <div className='w-full h-screen flex pt-10 justify-center items-center' >

        <div className='border-2 border-gray-300 hover:cursor-pointer ' >
            <Image
            src={'/phone.webp'}
            height={300}
            width={200}
            alt='product image'
            className="h-auto w-auto max-h-full object-contain hover:cursor-pointer"
            />
        </div>


        
        page product Id is:-- {id.productId} </div>
  )
}

export default ProductPage