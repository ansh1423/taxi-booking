import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='p-5 sm:px-10 md:px-20'>

    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=''>
         <h2 className='font-bold text-[40px] md:text-[60px]'>Premium Car<span className='text-[#3563E9]'>Rental</span>  in Your Area</h2>
         <h6 className='text-[20px] text-gray-500 pr-20 mt-5'>Book the selected car effortlessly, Pay for driving only, Book the Car Now</h6>
         <button className='p-2 mt-5 bg-blue-500 text-white px-4 rounded-full  hover:scale-105 transition-all'>Explore Cars</button>
        </div>
        <div>
           <Image src='/hero.png'
            alt='hero'
            width={400}
            height={500}
            className='w-full object-cover align-middle'
           />

        </div>
        </div>
    </div>
  )
}

export default Hero