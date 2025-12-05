import React from 'react'
import Twinkle from '../assets/icons/Twinkle'

const projectsData = [
  {
    id: 1,
    name: 'Project Name',
    icon: '/src/assets/1.png'
  },
  {
    id: 2,
    name: 'Project Name',
    icon: '/src/assets/2.png'
  },
  {
    id: 3,
    name: 'Project Name',
    icon: '/src/assets/3.png'
  }
]

const Projects = () => {
  return (
    <div className='text-white flex flex-col gap-10 mt-5 md:mt-20'>
        <div className='flex gap-3 md:gap-[29px] items-center pb-0 md:pb-10'>
            <h2 className='font-normal text-[20px] md:text-[30px] lg:text-[40px] leading-14'>Some Featured projects</h2>
            <Twinkle/>
        </div>

        <div className='flex flex-col gap-10'>
          {projectsData.map((project) => (
            <div key={project.id} className='py-5 md:py-[30px] lg:py-[55px] px-5 flex gap-5 lg:gap-0 lg:justify-around items-center bg-[#151515]'>
                <div className='w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[545px] lg:h-[545px] gradient-bg'></div>
                <div className='flex flex-col gap-5'>
                    <div className='w-[30px] h-[30px] md:w-[53px] md:h-[53px]'>
                        <img src={project.icon} alt={project.name} />
                    </div>
                    <h2 className='font-bold text-[18px] md:text-[24px] lg:text-[36px] leading-[18px] md:leading-[22px]'>{project.name}</h2>
                </div>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Projects