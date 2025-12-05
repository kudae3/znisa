import React from 'react'
import GradientButton from '../assets/ui/GradientBtn'

const Hero = () => {
  return (
    <div className='text-white h-[567px] bg-gray-700'>
        <div className='text-center mx-auto w-full max-w-[882px] h-[166px] flex flex-col gap-[11px] px-[175px] pt-[117px]'>
            <h2 className='font-normal text-[32px] leading-14'>I design and build clean websites</h2>
            <p className='font-normal text-[16px] leading-[23px]'>Write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
            <div className='mx-auto'>
                <GradientButton>Hire Me</GradientButton>
            </div>
        </div>
    </div>
  )
}

export default Hero