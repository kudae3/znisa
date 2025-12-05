import React from 'react'
import Twinkle from '../assets/icons/Twinkle'
import GradientButton from '../assets/ui/GradientBtn'

const Contact = () => {
  return (
    <div className='text-white flex justify-between items-center mt-5 md:mt-20'>
        
        <div>
            <div className='flex gap-3 md:gap-5 lg:gap-[29px] items-center pb-5 md:pb-10'>
                <h2 className='font-normal text-[20px] md:text-[40px] leading-14'>Have idea about project?</h2>
                <Twinkle/>
            </div>
            <div className='flex flex-col gap-9'>
                <p className='font-normal text-[12px] md:text-[16px] leading-[100%]'>Write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
                <GradientButton width='w-fit md:w-[190px]' height='h-[35px] md:h-[43px]'>
                    <p className='px-2 text-[#000000] text-[12px]'>Send us a message</p>
                </GradientButton>
            </div>
        </div>
        
        <div className='hidden md:block w-[392px] h-[392px]'>
            <img src="/src/assets/image.png" alt="" />
        </div>
    </div>
  )
}

export default Contact