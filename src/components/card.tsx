import Image from 'next/image';
import Link from 'next/link';
import products from '../../data/product';
import { ProductCategory } from '../../data/types';
import AddCartButton from './AddCartButton';

interface CardProps {
  searchParams: {
    category?: ProductCategory;
    maxPrice?: string;
    search?: string;
  };
}

const Card = ({ searchParams }: CardProps) => {
  const categoryFilter = searchParams?.category || 'all';
  const maxPrice = searchParams?.maxPrice ? Number(searchParams.maxPrice) : 1000;
  const searchQuery = searchParams?.search?.toLowerCase() || '';

  const filteredProducts = products.filter((product) => {
    // Apply category filter
    if (categoryFilter !== 'all' && product.category !== categoryFilter) {
      return false;
    }
    // Apply price filter
    if (product.price > maxPrice) {
      return false;
    }
    // Apply search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery)) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="w-full sm:w-[50%] lg:w-[30%] xl:w-[23%] rounded-lg border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
          >
            <Link href={`/product/${product.id}`}>
              <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
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

              <div className="p-4 space-y-3">
                <h3 className="text-black font-bold text-lg capitalize line-clamp-2 min-h-[3rem]">
                  {product.name}
                </h3>
                <p className="font-bold text-2xl text-gray-800">${product.price}</p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Link>
            
            {/* Add to Cart Button - Placed outside the Link to avoid nested links */}
            <div className="p-4 pt-0">
              <AddCartButton  />
            </div>
          </div>
        ))
      ) : (
        <div className="w-full text-center py-10">
          <p className="text-gray-500 text-lg">No products found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Card;