'use client'
import CarFilterOption from '@/components/Home/CarFilterOption'
import CarsList from '@/components/Home/CarsList'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import Toastmsg from '@/components/Home/Toastmsg'
import { getCarsList } from '@/services'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const [carsList,setCarsList]=useState<any>([]);
  const [carsOrgList,setCarsOrgList]=useState<any>([]);
  useEffect(()=>{
    getCarList();
  },[])
  //  console.log("dffss", getCarsList())
  const getCarList = async()=>{
      const result :any =await getCarsList();
       console.log(result)
      
      setCarsList(result?.carLists);
      setCarsOrgList(result?.carLists);
      
  }

  const filterBrandList = async(brand:string)=>{
    const filterList = carsOrgList.filter((item:any)=>
      item.carType==brand);
      setCarsList(filterList);

  }
  const orderCarList = async(order:any)=>{
     const sortedData = [...carsOrgList].sort((a,b)=>order==-1?a.price-b.price:b.price-a.price)
     setCarsList(sortedData)
  }
  // console.log("fgf",getCarList)
 
  return (
    <div className='p-5 sm:px-10 md:px-20' >

      <Hero/>
      <SearchInput/>
      <CarFilterOption carsList={carsOrgList}
       orderCarList={(value:string)=>orderCarList(value)} 
       setBrand={(value:string)=>filterBrandList(value)}/>
      <CarsList carsList={carsList}/>
      {/* <Toastmsg/> */}
    </div>
  )
}
