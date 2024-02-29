import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiMenuFoldFill, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const NavBar = () => {
  return (
    <>
      <nav className='nav-full sticky top-0 left-[4.5vw] rounded-b-2xl lg:w flex justify-center pt-5 z-10'>
        <div className='nav-container flex justify-between w-[65%] mx-auto'>

          <Logo />

          <ul className='flex justify-around w-[9cm] pt-2 text-[15px] items-center h-12'>
            <li>
              <Link to="/about" className='cursor-pointer'>
                About
              </Link>
            </li>
            <li className='nav-full-li'>
              <Link to="/#projects" className='cursor-pointer' >
                Projects
              </Link>
            </li>
            <li>
            <Link to="/stack" className='cursor-pointer'>
              Stack
            </Link>
            </li>
            <li>
            <Link to="contact" className='cursor-pointer'>
                Contact
              </Link>
          </li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default NavBar