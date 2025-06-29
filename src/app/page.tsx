// app/page.tsx
import { Suspense } from 'react';
import Card from '../components/card';
import { SideBar } from '../components/SideBar';

export default function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="flex flex-col lg:flex-row pt-16 gap-6 px-4">
      {/* Sidebar - hidden on mobile, shown on desktop */}
      <div className="hidden lg:block lg:w-1/4 sticky top-16 h-fit">
        <Suspense fallback={<div className="p-4 bg-white rounded-lg">Loading filters...</div>}>
          <SideBar />
        </Suspense>
      </div>
      
      {/* Mobile Sidebar will appear as overlay when toggled */}
      <Suspense fallback={null}>
        <div className="lg:hidden">
          <SideBar />
        </div>
      </Suspense>
      
      {/* Content area */}
      <div className="w-full lg:w-3/4">
        <Suspense fallback={<div>Loading products...</div>}>
          <Card searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}