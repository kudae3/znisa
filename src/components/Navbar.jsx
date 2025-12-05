import Home from '../assets/icons/Home'
import People from '../assets/icons/people'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      
      {/* Logo */}
      <div className='w-[117px] h-11'>
        <img src="/src/assets/logo.png" alt="" />
      </div>
      
      {/* Routes Buttons */}
      <div className='gradient-border-wrapper w-[418px] h-12 rounded-[290px]'>
        <div className='w-full h-full bg-[#101111] rounded-[290px] flex justify-between items-center gap-10 py-1.5 pl-1.5 pr-8 text-white'>
          <div className='w-[52px] h-9 rounded-[40px] flex justify-center items-center bg-[#292929]'>
            <Home/>
          </div>
          <div className='h-9 rounded-[40px] flex justify-center items-center'>
            About
          </div>
          <div className='h-9 rounded-[40px] flex justify-center items-center'>
            Projects
          </div>
          <div className='h-9 rounded-[40px] flex justify-center items-center whitespace-nowrap'>
            Contact Me
          </div>
        </div>
      </div>
      
      {/* Buttons */}
      <div className='flex items-center gap-1'>
        <div className='gradient-border-wrapper w-[103px] h-[52px] rounded-[40px]'>
          <button className='gradient-bg w-full h-full rounded-[40px]'>
            <p className='font-medium text-[16px] leading-[100%] text-[#000000]'>Hire Me</p>
          </button>
        </div>
        <div className='gradient-border-wrapper w-[49px] h-[49px] rounded-full'>
          <button className='gradient-bg w-full h-full flex justify-center items-center rounded-full'>
            <People/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar