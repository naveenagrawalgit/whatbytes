'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductCategory } from '../../data/types';
import { Menu, X } from 'lucide-react';

export const SideBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = (searchParams.get('category') as ProductCategory) || 'all';
  const currentMaxPrice = searchParams.get('maxPrice') || '1000';
  const [priceValue, setPriceValue] = useState(currentMaxPrice);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const categories: { id: ProductCategory; name: string }[] = [
    { id: 'all', name: 'All' },
    { id: 'phone', name: 'Phone' },
    { id: 'ipad', name: 'iPad' },
    { id: 'headphone', name: 'Headphone' },
    { id: 'laptop', name: 'Laptop' },
    { id: 'camera', name: 'Camera' }
  ];

  // Close sidebar when route changes
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [currentCategory, currentMaxPrice]);

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
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="lg:hidden fixed top-20 right-4 z-50 p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center gap-2"
        aria-label="Toggle filters"
      >
        {isMobileSidebarOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <Menu className="w-5 h-5" />
            <span className="text-sm">Filters</span>
          </>
        )}
      </button>

      {/* Sidebar Content */}
      <div className={`
        lg:sticky lg:top-4 flex flex-col gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 h-fit
        fixed inset-y-0 left-0 z-40 w-72 lg:w-auto lg:relative transform transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto lg:overflow-visible
        mt-0 lg:mt-0
      `}>
        <h2 className="text-lg font-bold flex justify-between items-center">
          Filters
          <button 
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </h2>
        
        <div className="space-y-3">
          <h3 className="font-medium">Category</h3>
          <div className="grid gap-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/?${buildQueryString(category.id, priceValue)}`}
                className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 ${
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
                <label htmlFor={category.id} className="cursor-pointer text-sm">
                  {category.name}
                </label>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium">Price Range</h3>
          <div className="px-1 space-y-3">
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
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">$1</span>
              <span className="font-medium">Up to ${priceValue}</span>
              <span className="text-gray-600">$1000</span>
            </div>
          </div>
        </div>

        {(currentCategory !== 'all' || currentMaxPrice !== '1000') && (
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block"
          >
            Clear all filters
          </Link>
        )}
      </div>

      {/* Overlay for mobile */}
      {isMobileSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </>
  );
};