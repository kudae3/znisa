import { useState, useEffect } from 'react'
import Home from '../assets/icons/Home'
import People from '../assets/icons/People'
import GradientButton from '../assets/ui/GradientBtn'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 1, label: 'Home', icon: <Home/>, href: '#home', section: 'home' },
    { id: 2, label: 'About', icon: null, href: '#about', section: 'about' },
    { id: 3, label: 'Projects', icon: null, href: '#projects', section: 'projects' },
    { id: 4, label: 'Contact me', icon: null, href: '#contact', section: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if user is near bottom of page
      if (windowHeight + window.scrollY >= documentHeight - 50) {
        setActiveSection('contact')
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollClick = (e, href) => {
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
        <img className='w-7 h-7 md:w-11 md:h-11' src="/logo.png" alt="" />
        <h1 className='font-normal text-[18px] md:text-[24px] leading-[100%] text-white'>znisa</h1>
      </div>
      
      {/* Routes Buttons */}
      <div className='gradient-border-wrapper w-[80%] md:max-w-[418px] h-10 md:h-12 rounded-[290px] mx-auto fixed top-13 md:top-10 left-1/2 -translate-x-1/2 z-50'>
        <div className='w-full h-full bg-[#1C1C1C] rounded-[290px] flex justify-between items-center gap-2 md:gap-5 py-1.5 pl-1.5 pr-1.5 lg:pr-8 text-white'>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleScrollClick(e, item.href)}
              className={`${item.icon ? 'w-[52px]' : 'px-2 md:px-3'} h-8 md:h-9 rounded-[40px] flex justify-center items-center ${activeSection === item.section ? 'bg-[#292929]' : ''} ${item.label === 'Contact me' ? 'whitespace-nowrap' : ''} cursor-pointer hover:bg-[#292929] transition-colors`}
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