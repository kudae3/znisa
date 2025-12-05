import React from 'react'
import Twinkle from '../assets/icons/Twinkle'
import RightOpen from '../assets/icons/RightOpen'
import DownOpen from '../assets/icons/DownOpen'
import LeftOpen from '../assets/icons/LeftOpen'

const Process = () => {
  const processSteps = [
    {
      id: 1,
      icon: <RightOpen/>,
      title: "Step 1: Product design Research",
      description: "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
      hasButton: true
    },
    {
      id: 2,
      icon: <DownOpen/>,
      title: "Step 2: UI design in figma",
      description: "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
      hasButton: false
    },
    {
      id: 3,
      icon: <LeftOpen/>,
      title: "Step 3: No-code develop in webflow",
      description: "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
      hasButton: false
    }
  ]

  return (
    <div className='text-white flex flex-col gap-10 mt-20'>
        <div className='flex gap-3 md:gap-[29px] items-center pb-10'>
            <h2 className='font-normal text-[20px] md:text-[40px] leading-14'>My process to design</h2>
            <Twinkle/>
        </div>
        <div className='w-full max-w-[735px]'>
            <ol className="relative space-y-16">
                {processSteps.map((step, index) => (
                  <li key={step.id} className="relative flex items-start gap-10 md:gap-15">
                    
                    <div className='w-10 h-10 md:w-14 md:h-14 rounded-full shrink-0 border border-white flex justify-center items-center text-white'>
                        {step.id}
                    </div>
                    
                    {index !== processSteps.length - 1 && (
                      <div className="absolute left-5 md:left-7 top-[68px] -bottom-12 w-0.5 bg-gray-700"></div>
                    )}

                    <div className={`${step.hasButton ? 'h-[296px] flex flex-col justify-between' : 'flex flex-col gap-4'}`}>
                        <div className='w-12 h-12 md:w-14 md:h-14'>
                          {step.icon}
                        </div>
                        <p className='font-normal text-[14px] md:text-[22px] leading-[33px]'>{step.title}</p>
                        <p className='text-[#FFFFFFCC] font-normal text-[12px] md:text-[19px] leading-7'>{step.description}</p>
                        {step.hasButton && (
                          <div className='gradient-border-wrapper w-fit md:w-[177px] h-fit md:h-[49px] rounded-[100px]'>
                              <button className='w-full h-full bg-[#101111] rounded-[100px] px-2 md:px-0 flex justify-center items-center text-white'>
                                  <p className='font-normal text-[12px] md:text-[18px] leading-7'>See Examples</p>
                              </button>
                          </div>
                        )}
                    </div>
                  </li>
                ))}
            </ol>
        </div>
    </div>
  )
}

export default Process


