import React from 'react'
import Container from '../components/Container'
import Sidebar from '../components/Sidebar'

export default function page() {
  return (
    <div>
      <div className="flex ">
        <div className='sm:flex hidden'>
          <div className="w-[80px]  border-r-[1px] border-[#989bac] bg-[#F7F8FA]">
            <Sidebar />
          </div>
        </div>
        <div className="w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}