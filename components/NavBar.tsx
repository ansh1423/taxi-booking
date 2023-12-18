import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center justify-between shadow-sm p-3 px-5 border-b-[1px]' >
        <Image src='/logo.png'
         alt='logo'
         width={100}
         height={100}
        />
        <div className='hidden md:flex gap-5'>
            <h2 className='hover:bg-blue-500 px-3 p-2 hover:text-white rounded-full '>Home</h2>
            <h2 className='hover:bg-blue-500 px-3 p-2 hover:text-white rounded-full '>About</h2>
            <h2 className='hover:bg-blue-500 px-3 p-2 hover:text-white rounded-full '>Contact</h2>

        </div>
        <UserButton/>
    </div>
  )
}

export default NavBar