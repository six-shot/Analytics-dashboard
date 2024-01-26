import Image from 'next/image'
import logo from "@/public/assets/Logo.svg"
import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <div className='min-h-screen w-full flex justify-center  '>
            <div className='pt-5'>
                <Image src={logo} alt='logo'/>
            </div>
        </div>
    </div>
  )
}
