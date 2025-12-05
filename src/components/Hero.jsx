import GradientButton from '../assets/ui/GradientBtn'
import backgroundImage from '../assets/background.png'

const Hero = () => {
  return (
    <div className='text-white h-[300px] lg:h-[567px] relative bg-cover bg-center bg-no-repeat mt-5' style={{
      backgroundImage: `url(${backgroundImage})`
    }}>
        <div className='text-center mx-auto w-full max-w-[882px] h-[166px] flex flex-col gap-[11px] lg:px-[175px] pt-5 lg:pt-[117px]'>
            <h2 className='font-normal text-[18px] md:text-[20px] lg:text-[32px] leading-14'>I design and build clean websites</h2>
            <p className='font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[23px]'>Write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
            <div className='mx-auto'>
                <GradientButton>Hire Me</GradientButton>
            </div>
        </div>
    </div>
  )
}

export default Hero