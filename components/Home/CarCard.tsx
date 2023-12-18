import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa";
function CarCard(props:any) {
  const [car,setCar]=useState<any>()
  useEffect(()=>{
    if(props.car){
   setCar(props.car)
    }
  },[props.car])
  return car && (
    <div className='group bg-gray-50 hover:bg-white p-2 m-1 sm:m-5 sm:p-5 rounded-3xl hover:border-[1px] cursor-pointer duration-[50] border-blue-500 '>
        <h2 className='text-[20px] font-medium mb-2' >
          {car.name}
        </h2>
        <h2 className='text-[28px] font-bold mb-2'>
          <span className='text-[12px] font-light'>
            $
          </span>
          {car.price}
          <span className='text-[12px] font-light'>
            /day
          </span>
        </h2>
        <div className='flex justify-center'>
        <Image src={car.image?.url}
         alt={car.name}
         width={220}
         height={200}
         className='w-[250px] h-[150px]  mb-3 object-contain'
         />
         </div>
         <div className='flex justify-around group-hover:hidden'>
            <div className='text-center text-gray-500'>
              <PiSteeringWheelFill className='w-full text-[22px] mb-2'/>
              <h2 className='font-light text-[14px] line-clamp-5'>{car.carType}</h2>

            </div>
            <div className='text-center text-gray-500'>
              <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-2'/>
              <h2 className='font-light text-[14px] line-clamp-5'>Seat</h2>

            </div>
            <div className='text-center text-gray-500'>
              <FaGasPump className='w-full text-[22px] mb-2'/>
              <h2 className='font-light text-[14px] line-clamp-5'>{car.carAvg}MPG</h2>

            </div>
         </div>
         <div className=' flex px-5 justify-center items-center'>

         {/* <button className="btn text-center items-center w-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900   my-2">Book Now</button> */}
         </div>
    </div>
  )
}

export default CarCard