import Home from '../assets/icons/Home'
import People from '../assets/icons/people'
import GradientButton from '../assets/ui/GradientBtn'

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
        <GradientButton width="w-[103px]" height="h-[52px]" rounded="rounded-[40px]">Hire Me</GradientButton>
        <GradientButton width="w-[49px]" height="h-[49px]" rounded="rounded-full">
          <People/>
        </GradientButton>
      </div>
    </div>
  )
}

export default Navbar