import React from 'react'

export default function BottomRight() {
  return (
    <div className="w-full bg-white dark:bg-[#161619] border border-[#EDF2F7] dark:border dark:border-[#161619] p-[5%] rounded-xl mt-6 ">
      <div className="flex justify-between items-center mb-2">
        <h5 className="font-semibold text-[#26282C] dark:text-[#EDF2F6] font-plus_jakara_sans">
          Top Platform
        </h5>
        <h5 className="font-medium text-[#34CAA5] font-plus_jakara_sans">
          See All
        </h5>
      </div>
      <div className="flex gap-3 flex-col">
        <div className="skill-box relative">
          <h5 className="mb-1 font-plus_jakara_sans text-sm">Book Bazaar</h5>
          <div className="skill-bar ">
            <span className="skill-per html bg-[#6160DC]"></span>
          </div>
          <div className="font-plus_jakara_sans text-sm flex justify-between items-center">
            <h5> $2,500,000</h5>
            <h5> +15%</h5>
          </div>
        </div>
        <div className="skill-box">
          <h5 className="mb-1 font-plus_jakara_sans text-sm">Artisan Aisle</h5>
          <div className="skill-bar ">
            <span className="skill-per css bg-[#54C5EB]"></span>
          </div>
          <div className="font-plus_jakara_sans text-sm flex justify-between items-center">
            <h5> $2,500,000</h5>
            <h5> +15%</h5>
          </div>
        </div>
        <div className="skill-box">
          <h5 className="mb-1 font-plus_jakara_sans text-sm">Toy Troop</h5>
          <div className="skill-bar">
            <span className="skill-per javascript bg-[#FFB74A]"></span>
          </div>
          <div className="font-plus_jakara_sans text-sm flex justify-between items-center">
            <h5> $2,500,000</h5>
            <h5> +15%</h5>
          </div>
        </div>
        <div className="skill-box">
          <h5 className="mb-1 font-plus_jakara_sans text-sm">XStore</h5>
          <div className="skill-bar">
            <span className="skill-per nodejs bg-[#FF4A55]"></span>
          </div>
          <div className="font-plus_jakara_sans text-sm flex justify-between items-center">
            <h5> $2,500,000</h5>
            <h5> +15%</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
