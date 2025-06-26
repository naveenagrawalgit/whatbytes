import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

import React from 'react'

export const Footer = () => {
  return (

    <>
    
    <div className='pt-2 text-white shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300 border-t-2 border-gray-300   w-full font-bold h-50 flex justify-around bg-indigo-600' >
        <div  >Filters

            <div className=' mt-4 hover:cursor-pointer font-medium  flex gap-2 flex-col'>
                <Link href='/All' >All</Link>
                <Link href="/Whatbytes">Whatbyets</Link>
            </div>


        </div>
        <div>About us
            <div className='mt-4 hover:cursor-pointer gap-2 font-medium flex-col flex'>
          <Link href="/About Us" >About us</Link>
          <Link href="/Contact Us" >Contact us</Link>
            </div>
         

        </div>
        <div>Follow Us
            <div className=' mt-4 gap-2 flex hover:cursor-pointer '>
                <Facebook/>
            <Twitter/>
            <Instagram/>

            </div>
            
        </div>
        

        </div>
    
    </>



  )
}
