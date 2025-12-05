import React from 'react'
import Twinkle from '../assets/icons/Twinkle'
import Quote from '../assets/icons/Quote'

const Testimonials = () => {
  return (
    <div className='text-white flex flex-col gap-10 mt-20'>
        <div className='flex gap-[29px] items-center pb-10'>
            <h2 className='font-normal text-[40px] leading-14'>Client testimonials</h2>
            <Twinkle/>
        </div>

        <div className='w-[397px] h-[201px] border-[1.5px] rounded-3xl py-8 px-6 flex flex-col gap-6'>
            <div className='w-[349px] h-[50px] flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                  <div className='bg-[#878787] rounded-full w-12 h-12'></div>
                  <div>
                    <h3 className='font-normal text-[16px] leading-7'>Client Name .</h3>
                    <p className='font-normal text-[12px] leading-[100%]'>Product designer</p>
                  </div>
                </div>
                <div className='w-[43px] h-[31px]'>
                  <Quote/>
                </div>
            </div>
            <p className='font-normal text-[14px] leading-[100%]'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
        </div>

    </div>
  )
}

export default Testimonials