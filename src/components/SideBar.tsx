'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductCategory } from '../../data/types';

export const SideBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = (searchParams.get('category') as ProductCategory) || 'all';
  const currentMaxPrice = searchParams.get('maxPrice') || '1000';
  const [priceValue, setPriceValue] = useState(currentMaxPrice);

  const categories: { id: ProductCategory; name: string }[] = [
    { id: 'all', name: 'All' },
    { id: 'phone', name: 'Phone' },
    { id: 'ipad', name: 'iPad' },
    { id: 'headphone', name: 'Headphone' },
    { id: 'laptop', name: 'Laptop' },
    { id: 'camera', name: 'Camera' }
  ];

  useEffect(() => {
    setPriceValue(currentMaxPrice);
  }, [currentMaxPrice]);

  const buildQueryString = (category: ProductCategory, maxPrice: string) => {
    const params = new URLSearchParams();
    if (category !== 'all') params.set('category', category);
    params.set('maxPrice', maxPrice);
    return params.toString();
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(e.target.value);
  };

  const applyPriceFilter = () => {
    const queryString = buildQueryString(currentCategory, priceValue);
    router.push(`/?${queryString}`);
  };

  return (
    <div className="sticky top-4 flex flex-col gap-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
      <h2 className="text-lg font-bold">Filters</h2>
      
      <div className="space-y-2">
        <h3 className="font-medium">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/?${buildQueryString(category.id, priceValue)}`}
              className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 ${
                currentCategory === category.id ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <input
                type="radio"
                id={category.id}
                checked={currentCategory === category.id}
                readOnly
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor={category.id} className="cursor-pointer">
                {category.name}
              </label>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Price Range</h3>
        <div className="px-2 space-y-2">
          <input
            type="range"
            min="1"
            max="1000"
            value={priceValue}
            onChange={handlePriceChange}
            onMouseUp={applyPriceFilter}
            onTouchEnd={applyPriceFilter}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">$1</span>
            <span className="font-medium">Up to ${priceValue}</span>
            <span className="text-sm text-gray-600">$1000</span>
          </div>
        </div>
      </div>

      {(currentCategory !== 'all' || currentMaxPrice !== '1000') && (
        <Link
          href="/"
          className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2"
        >
          Clear all filters
        </Link>
      )}
    </div>
  );
};