import Home from '../assets/icons/Home'
import People from '../assets/icons/People'
import GradientButton from '../assets/ui/GradientBtn'

const Navbar = () => {
  const navItems = [
    { id: 1, label: 'Home', icon: <Home/>, isActive: true, href: '#home' },
    { id: 2, label: 'About', icon: null, isActive: false, href: '#about' },
    { id: 3, label: 'Projects', icon: null, isActive: false, href: '#projects' },
    { id: 4, label: 'Contact me', icon: null, isActive: false, href: '#contact' }
  ]

  const handleScroll = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0'>
      
      {/* Logo */}
      <div className='w-[117px] h-11 flex items-center gap-3'>
        <img className='w-11 h-11' src="/src/assets/logo.png" alt="" />
        <h1 className='font-normal text-[24px] leading-[100%] text-white'>znisa</h1>
      </div>
      
      {/* Routes Buttons */}
      <div className='gradient-border-wrapper w-full max-w-[418px] h-12 rounded-[290px] mx-auto md:mx-0'>
        <div className='w-full h-full bg-[#1C1C1C] rounded-[290px] flex justify-between items-center gap-5 py-1.5 pl-1.5 pr-1.5 lg:pr-8 text-white'>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`${item.icon ? 'w-[52px]' : 'px-3'} h-9 rounded-[40px] flex justify-center items-center ${item.isActive ? 'bg-[#292929]' : ''} ${item.label === 'Contact me' ? 'whitespace-nowrap' : ''} cursor-pointer hover:bg-[#292929] transition-colors`}
            >
              {item.icon ? item.icon : <p className='font-normal text-[10px] md:text-[16px] leading-[100%]'>{item.label}</p>}
            </a>
          ))}
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