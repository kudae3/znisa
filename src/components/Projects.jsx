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
    <div className='text-white flex flex-col gap-10 mt-15'>
        <div className='flex gap-[29px] items-center pb-10'>
            <h2 className='font-normal text-[40px] leading-14'>Some Featured projects</h2>
            <Twinkle/>
        </div>

        <div className='flex flex-col gap-10'>
          {projectsData.map((project) => (
            <div key={project.id} className='py-[55px] px-5 flex justify-around items-center bg-[#151515]'>
                <div className='w-[545px] h-[545px] gradient-bg'></div>
                <div className='flex flex-col gap-5'>
                    <div className='w-[53px] h-[53px]'>
                        <img src={project.icon} alt={project.name} />
                    </div>
                    <h2 className='font-bold text-[36px] leading-[22px]'>{project.name}</h2>
                </div>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Projects