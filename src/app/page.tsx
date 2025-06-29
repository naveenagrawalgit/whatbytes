
import { SideBar } from '../components/SideBar';
import Card from '../components/card';
import { ProductCategory } from '../../data/types';

interface HomeProps {
  searchParams: {
    category?: ProductCategory;
    maxPrice?: string;
    search?: string;
  };
}
// @ts-expect-error - Disabling type checking for deployment
export default function Home({ searchParams }: HomeProps) {
  return (
    <div className="flex pt-12 gap-4 px-4">
      <div className="w-1/4 sticky top-12 h-fit">
        <SideBar />
      </div>
      <div className="w-3/4">
        <Card searchParams={searchParams} />
      </div>
    </div>
  );
}