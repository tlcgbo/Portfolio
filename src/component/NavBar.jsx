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
        </div>
      </nav>
    </>
  )
}

export default NavBar