import React from 'react'
import Container from '../components/Container'
import Sidebar from '../components/Sidebar'

export default function page() {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <div className="flex ">
        <div className="sm:flex hidden">
          <div className="w-[80px] fixed  border-r-[1px] border-[#989bac] bg-[#F7F8FA] dark:border-[#34CAA5] dark:bg-black ">
            <Sidebar />
          </div>
        </div>
        <div className="w-full sm:pl-[80px]">
          <Container />
        </div>
      </div>
    </div>
  );
}
