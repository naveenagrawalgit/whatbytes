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
    <div className="flex pt-12 gap-4 px-4">
      <div className="w-1/4 sticky top-12 h-fit">
        <Suspense fallback={<div className="p-4 bg-white rounded-lg">Loading filters...</div>}>
          <SideBar />
        </Suspense>
      </div>
      <div className="w-3/4">
        <Card searchParams={searchParams} />
      </div>
    </div>
  );
}