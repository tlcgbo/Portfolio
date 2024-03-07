import { useState } from "react";
import Logo from "./Logo.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../utils/motion.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMenuFoldFill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen
  }

  return (
    <>
      <nav className="nav-full sticky top-0 left-[4.5vw] rounded-b-2xl lg:w-[90vh] flex justify-center pt-5 z-10">
        <div className="nav-container flex justify-between w-[65%] mx-auto">
          <Link to='/' className="cursor-pointer">
            <Logo />
          </Link>

          <ul className="flex justify-around w-[9cm] pt-2 text-[15px] items-center h-12">
            <li>
          <Link to="/about" className="cursor-pointer">
            About
          </Link>
            </li>
          <li className="nav-full-li">
            <Link to="/projects" className="cursor-pointer" onClick={() => {
              setActive(true);
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/stack" className="cursor-pointer">
              Stack
            </Link>
          </li>
          <li>
            <Link to="/contact" className="cursor-pointer">
              Contact
            </Link>
          </li>
          </ul>
          <div className="w-100px h-[50px] p-4 flex justify-between items-center ">
            <a href="https://github.com/tlcgbo" target="blank">
              <FaGithub style={{ fontSiz: '25px' }}/>
            </a>
          </div>
        </div>
      </nav>


      <nav className="mobile-nav md:hidden flex justify-center z-10 h-[12vh] fixed bottom-0 w-[88vw] pt-4 left-6 rounded-t-2xl items-center">
        <div className="nav-container flex justify-between w-[90%]">
          <div className="">
            <Link to='/' className="cursor-pointer">
              <Logo />
            </Link>
          </div>

          <div className="w-[120px] h-[50px] p-5 flex mb-2 justify-between items-end ">
            <a href="https://github.com/tlcgbo" target="_blank">
              <FaGithub style={{ fontSize: '25px' }}/>
            </a>
          </div>

              <div onClick={handleMobileMenuToggle} className="flex justify-center items-center h-[100%]">
                {isMobileMenuOpen ? (
                  <RiCloseLine style={{ fontSize: '40px', cursor: 'pointer' }}/>
                ) : (
                  <RiMenuFoldFill style={{ fontSize: '38px', cursor: 'pointer' }}/>
                )}
              </div>
        </div>
      </nav>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
            <><motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 500
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          ><motion.div
            initial="closed"
            animate="open"
            exit="closed"
            // variants={sideVariants}
            className="md:hidden flex flex-col fixed bottom-16 pb-10 w-full z-10">
              <ul className="text-[20px] items-center flex flex-col w-[95vw] justify-center p-5">
                <motion.li variants={itemVariants} className="nav-link w-full flex justify-center p-2 h-12 items-center rounded-[10px]">
                  <Link to="/about" onClick={closeMobileMenu}>
                    About
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants} className="mt-3 p-2 nav-links w-full justify-center h-12 items-center rounded-[10px]">
                  <Link 
                  to="/#projects"
                  className=""
                  onClick={() => {
                    closeMobileMenu
                    setActive(true);
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });

                  }}>
                    Projects
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants} className="mt-3 p-2 nav-links w-full flex justify-center h-12 items-center h-12 items-center rounded-[10px]">
                  <Link to="/stack" onClick={closeMobileMenu}>
                    Tech Stack
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants} className="mt-3 p-2 nav-links w-full flex justify-center h-12 items-center rounded-[10px]">
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Contact
                  </Link>  
                </motion.li>
              </ul>
            </motion.div>
            </motion.aside>
            </>
        )}
        
      </AnimatePresence>
      
    </>
  )

}
  

export default NavBar;