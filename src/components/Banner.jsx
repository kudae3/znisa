import React from 'react'
import Star from '../assets/icons/Star'

const Banner = () => {
  return (
    <div className='border-y border-[#FFFFFF40]'>
        <div className='container text-white flex justify-between items-center h-[70px]'>
            <h1 className='font-normal text-[10px] md:text-[20px] leading-[100%]'>Framer</h1>
            <Star/>
            <h1 className='font-normal text-[10px] md:text-[20px] leading-[100%]'>Webflow</h1>
            <Star/>
            <h1 className='font-normal text-[10px] md:text-[20px] leading-[100%]'>Figma</h1>
            <Star/>
            <h1 className='font-normal text-[10px] md:text-[20px] leading-[100%]'>Notion</h1>
            <Star/>
        </div>
    </div>
  )
}

export default Banner