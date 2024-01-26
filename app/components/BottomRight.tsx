import React from 'react'

export default function BottomRight() {
  return (
    <div className="w-full bg-white border border-[#EDF2F7] p-[5%] rounded-xl mt-4 ">
      <div className="flex justify-between items-center">
        <h5 className="font-semibold text-[#26282C] font-plus_jakara_sans">
          Top Platform
        </h5>
        <h5 className="font-medium text-[#34CAA5] font-plus_jakara_sans">
          See All
        </h5>
      </div>
      <div className="flex gap-5 flex-col">
        <div className="skill-box relative">
          <div className="skill-bar ">
            <span className="skill-per html bg-[#6160DC]"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-bar relative">
            <span className="skill-per css bg-[#54C5EB]"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-bar">
            <span className="skill-per javascript bg-[#FFB74A]"></span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-bar">
            <span className="skill-per nodejs bg-[#FF4A55]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
