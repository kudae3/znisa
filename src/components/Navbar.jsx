import Home from '../assets/icons/Home'
import People from '../assets/icons/people'
import GradientButton from '../assets/ui/GradientBtn'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0'>
      
      {/* Logo */}
      <div className='w-[117px] h-11 flex items-center gap-3'>
        <img className='w-11 h-11' src="/src/assets/logo.png" alt="" />
        <h1 className='font-normal text-[24px] leading-[100%] text-white'>znisa</h1>
      </div>
      
      {/* Routes Buttons */}
      <div className='gradient-border-wrapper w-full max-w-[418px] h-12 rounded-[290px] mx-auto md:mx-0'>
        <div className='w-full h-full bg-[#1C1C1C] rounded-[290px] flex justify-between items-center gap-10 py-1.5 pl-1.5 pr-8 text-white'>
          <div className='w-[52px] h-9 rounded-[40px] flex justify-center items-center bg-[#292929]'>
            <Home/>
          </div>
          <div className='h-9 rounded-[40px] flex justify-center items-center'>
            <p className='font-normal text-[10px] md:text-[16px] leading-[100%]'>About</p>
          </div>
          <div className='h-9 rounded-[40px] flex justify-center items-center'>
            <p className='font-normal text-[10px] md:text-[16px] leading-[100%]'>Projects</p>
          </div>
          <div className='h-9 rounded-[40px] flex justify-center items-center whitespace-nowrap'>
            <p className='font-normal text-[10px] md:text-[16px] leading-[100%]'>Contact me</p>
          </div>
        </div>
      </div>
      
      {/* Buttons */}
      <div className='hidden md:flex items-center gap-1'>
        <GradientButton width="w-[103px]" height="h-[52px]" rounded="rounded-[40px]">Hire Me</GradientButton>
        <GradientButton width="w-[49px]" height="h-[49px]" rounded="rounded-full">
          <People/>
        </GradientButton>
      </div>
    </div>
  )
}

export default Navbar