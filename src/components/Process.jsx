import React from 'react'
import Twinkle from '../assets/icons/Twinkle'
import RightOpen from '../assets/icons/RightOpen'
import DownOpen from '../assets/icons/DownOpen'
import LeftOpen from '../assets/icons/LeftOpen'

const Process = () => {
  return (
    <div className='text-white flex flex-col gap-10 mt-15'>
        <div className='flex gap-[29px] items-center pb-10'>
            <h2 className='font-normal text-[40px] leading-14'>My process to design</h2>
            <Twinkle/>
        </div>
        <div className='w-full max-w-[735px]'>
            <ol className="relative space-y-16">
                <li className="relative flex items-start gap-15">
                    
                    <div className='w-14 h-14 rounded-full shrink-0 border border-white flex justify-center items-center text-white'>
                        1
                    </div>
                    <div className="absolute left-7 top-[68px] -bottom-12 w-0.5 bg-gray-700"></div>

                    <div className="h-[296px] flex flex-col justify-between">
                        <div className='w-14 h-14'>
                            <RightOpen/>
                        </div>
                        <p className='font-normal text-[22px] leading-[33px]'>Step 1: Product design Research</p>
                        <p className='text-[#FFFFFFCC] font-normal text-[19px] leading-7'>This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.</p>
                        <div className='gradient-border-wrapper w-[177px] h-[49px] rounded-[100px]'>
                            <button className='w-full h-full bg-[#101111] rounded-[100px] flex justify-center items-center text-white'>
                                <p className='font-normal text-[18px] leading-7'>See Examples</p>
                            </button>
                        </div>
                    </div>
                </li>

                <li className="relative flex items-start gap-15">
                    
                    <div className='w-14 h-14 rounded-full shrink-0 border border-white flex justify-center items-center text-white'>
                        2
                    </div>

                    <div className="absolute left-7 top-[68px] -bottom-12 w-0.5 bg-gray-700"></div>

                    <div className="flex flex-col gap-4">
                        <div className='w-14 h-14'>
                            <DownOpen/>
                        </div>
                        <p className='font-normal text-[22px] leading-[33px]'>Step 2: UI design in figma</p>
                        <p className='text-[#FFFFFFCC] font-normal text-[19px] leading-7'>This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.</p>
                    </div>
                </li>

                <li className="relative flex items-start gap-15">
                    
                    <div className='w-14 h-14 rounded-full shrink-0 border border-white flex justify-center items-center text-white'>
                        3
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className='w-14 h-14'>
                            <LeftOpen/>
                        </div>
                        <p className='font-normal text-[22px] leading-[33px]'>Step 3: No-code develop in webflow</p>
                        <p className='text-[#FFFFFFCC] font-normal text-[19px] leading-7'>This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.</p>
                    </div>
                </li>

            </ol>
        </div>
    </div>
  )
}

export default Process


