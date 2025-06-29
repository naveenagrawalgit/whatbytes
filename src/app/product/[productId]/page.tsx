import React from 'react'
import products from '../../../../data/product'
import Image from 'next/image'

const ProductPage = async ({params} : {params: Promise<{productId : number}>}) => {
  
  
  let {productId} = await params;

  productId = Number(productId);
  console.log(typeof(productId), productId,'product ID')

  const data = products.find(product => product.id === productId)
      
    console.log(data, "inside data")

 return (
  <div className="w-full h-screen flex flex-col md:flex-row bg-white overflow-hidden">
    {/* Image Section - Full Height */}
    <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 flex items-center justify-center p-8">
      <div className="relative w-full h-full max-w-2xl max-h-[80vh]">
        <div className="absolute inset-0 border-2 border-gray-300 rounded-xl overflow-hidden hover:cursor-pointer">
          <Image
            src={
              data.category === "phone" ? "/phone.webp" :
              data.category === "camera" ? "/camera.webp" :
              data.category === "ipad" ? "/tablet.webp" :
              data.category === "headphone" ? "/headphone.webp" :
              data.category === "laptop" ? "/laptop.webp" :
              "/logo.png"
            }
            fill
            alt={data.name}
            className="object-contain hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>

    {/* Details Section - Full Height */}
    <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto p-6 md:p-12 flex flex-col">
      {/* Category and ID */}
      <div className="mb-4">
        <span className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-md uppercase tracking-wider">
          {data.category}
        </span>
        <span className="ml-2 text-sm text-gray-500">ID: {data.id}</span>
      </div>

      {/* Product Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {data.name}
      </h1>

      {/* Price */}
      <div className="mb-6">
        <span className="text-3xl font-bold text-blue-600">
          ${data.price.toLocaleString()}
        </span>
      </div>

      {/* Description */}
      <div className="mb-8 flex-grow">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Action Buttons - Sticky at bottom on mobile */}
      <div className="sticky md:static bottom-0 bg-white py-4 -mx-6 px-6 md:mx-0 md:px-0 border-t md:border-t-0">
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium text-lg transition-colors duration-300">
            Add to Cart
          </button>
          <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium text-lg transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
)
}

export default ProductPage