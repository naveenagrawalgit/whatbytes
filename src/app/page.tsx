import products from '../../data/product'
import Image from 'next/image';
import Card from '@/components/card';
import { SideBar } from '@/components/SideBar';

export default function Home() {

  return (



    <div className=" flex   pt-12 ">

        <SideBar/>
        <Card/>

    </div>
  );
}
