import GradientButton from '../assets/ui/GradientBtn'
import People from '../assets/icons/people'
import X from '../assets/icons/X'
import Dribble from '../assets/icons/Dribble'
import IG from '../assets/icons/IG'
import Facebook from '../assets/icons/Facebook'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center mt-10 md:mt-24 gap-3 md:gap-0'>
      
      {/* Logo */}
      <div className='w-[117px] h-11 flex items-center gap-3'>
        <img className='w-11 h-11' src="/src/assets/logo.png" alt="" />
        <h1 className='font-normal text-[24px] leading-[100%] text-white'>znisa</h1>
      </div>
      
      {/* Social Buttons */}
      <div className='gradient-border-wrapper w-fit md:w-[366px] h-12 rounded-[290px]'>
        <div className='w-full h-full bg-[#1C1C1C] rounded-[290px] flex justify-between items-center gap-10 p-1.5 text-white'>
          <div className='w-[46px] md:w-[52px] h-9 rounded-[40px] flex justify-center items-center bg-[#292929]'>
            <X/>
          </div>
          <div className='w-[46px] md:w-[52px] h-9 rounded-[40px] flex justify-center items-center bg-[#292929]'>
            <Dribble/>
          </div>
          <div className='w-[46px] md:w-[52px] h-9 rounded-[40px] flex justify-center items-center bg-[#292929]'>
            <IG/>
          </div>
          <div className='w-[46px] md:w-[52px] h-9 rounded-[40px] flex justify-center items-center bg-[#292929]'>
            <Facebook/>
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

export default Footer