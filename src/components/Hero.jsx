import React from 'react'

const Hero = () => {
  return (
    <div className='text-white h-[567px] bg-gray-700'>
        <div className='text-center mx-auto w-full max-w-[882px] h-[166px] flex flex-col gap-[11px] px-[175px] mt-[117px]'>
            <h2 className='font-normal text-[32px] leading-14'>I design and build clean websites</h2>
            <p className='font-normal text-[16px] leading-[23px]'>Write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
            <div className='gradient-border-wrapper w-[118px] h-[42px] rounded-[40px] mx-auto'>
                <button className='gradient-bg w-full h-full rounded-[40px]'>
                    <p className='font-medium text-[16px] leading-[100%] text-[#000000]'>Hire Me</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero