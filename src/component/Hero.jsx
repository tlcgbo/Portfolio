import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, zoomIn, textVariant, staggerContainer } from "../utils/motion";


const Hero = () => {
  return (
    <motion.section
        id="hero"
        className="  lg:h-[80vh] pt-4 lg:pt-0 flex lg:justify-center justify-start items-start"
    >
        <div className="  flex justify-start items-start gap-5 p-5 lg:p-10 overflow-hidden flex-wrap-reverse lg:flex-nowrap">
            <div className="flex flex-col justify-center items-start gap-5 w-[1008px]">
                <motion.h1
                    variants={textVariant(0)}
                    initial="hidden"
                    animate="show"
                    className="font-black lg:text-[70px] sm:text-[60px] xs:text-[48px] text-[38px] lg:leading-[98px] mt-2 z-10"
                >
                    <span className="text-[#80800] flex flex-col">I'm</span> Igbagbo Olufiranye
                </motion.h1>
                <motion.p
                    variants={fadeIn("down", "tween", 0.5, 1)}
                    initial="hidden"
                    animate="show"
                    className="text-[15px] md:text-[25px] font-semibold w-[80vw] lg:w-[40vw] text-justify text-[#808080] lg:px-2"
                >
                    I'm proficeient in ReactJS with a bit of guidance, but I'm proficeient in HTML5, CSS3, Javascript. 
                    Let's collaborate to create something extraordinary that will make a lasting impact!
                </motion.p>
                <motion.div
                    variants={staggerContainer(0.2)}
                    initial="hidden"
                    animate="show"
                    className="flex gap-[16px] flex-wrap justify-start md:justift-normal"
                >
                    <motion.a
              href="https://flowcv.com/resume/wtdehnsde9"
              target="_blank"
              rel="noreferrer"
              variants={zoomIn(0.7, 1)}
            >
              <motion.button className="main-button flex items-center justify-center font-semibold text-white">
                See my resume
              </motion.button>
            </motion.a>
                    <motion.div
                        variants={zoomIn(0.9, 1)}
                        className="touch-btn flex items-center h-[60px] md:h-auto px-[40px] bg-[#181818] rounded-[1.87rem] text-[18px]"
                    >
                        <Link to="/contact" className="flex items-center font-semibold">
                            Get in touch
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  );
};

export default Hero;