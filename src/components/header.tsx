'use client';

import { Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Header = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/');
    }
  };

  return (
    <header className="bg-indigo-600 border-b-2 border-gray-200 sticky top-0 z-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          
          {/* Logo - Left */}
          <div className="flex items-center mr-4">
            <Link href="/">
              <Image 
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto hover:cursor-pointer"
              />
            </Link>
          </div>

          {/* Search Bar - Center */}
          <div className="flex-1 flex justify-center">
            <form onSubmit={handleSearch} className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-2.5">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>
          </div>

          {/* Cart - Right */}
          <div className="ml-4">
            <Link href='/cart'>
              <button className="hover:cursor-pointer gap-2 relative py-2 px-5 flex text-white bg-blue-800 rounded-md font-bold capitalize">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};