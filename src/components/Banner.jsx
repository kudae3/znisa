import React from 'react'
import Star from '../assets/icons/Star'

const Banner = () => {
  return (
    <div className='text-white flex justify-around items-center h-[70px] border-y border-[#FFFFFF40]'>
        <h1 className='font-normal text-[20px] leading-[100%]'>Framer</h1>
        <Star/>
        <h1 className='font-normal text-[20px] leading-[100%]'>Webflow</h1>
        <Star/>
        <h1 className='font-normal text-[20px] leading-[100%]'>Figma</h1>
        <Star/>
        <h1 className='font-normal text-[20px] leading-[100%]'>Notion</h1>
        <Star/>
    </div>
  )
}

export default Banner