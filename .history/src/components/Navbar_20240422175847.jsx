import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav
      className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'
      id='navbar'
    >
      {/* <div className='container px-4 mx-auto relative lg:text-sm'>
        <div className='flex justify-start '>Start</div>
        <div className='flex justify-end items-center'>
          {/* <div className='flex items-center flex-shrink-0'>
            <img className='h-10 w-10 mr-2' src={logo} alt='Logo' />

            <span className='text-xl tracking-tight'>Triangle Theorem </span>
          </div> */}
      {/* <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul> */}
      {/* </div> */}
      {/* </div> */}
      <div class='flex ...'>
        <div class='flex-none w-14 ...'>01</div>
        <div class='flex-none w-32 ...'>02</div>
        <div class='flex-1 ...'>03</div>
      </div>
    </nav>
  )
}

export default Navbar
