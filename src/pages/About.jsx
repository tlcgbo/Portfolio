import { Link } from "react-router-dom"
import Logo from "../assets/Logo";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className="flex flex-col gap-10 py-[150px] justify-center items-center">

      <div className="px-10">
        <h1 className="font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7">A little bit about ME</h1>
        <p className="text-[#808080]">Who am I and what I do.</p>
      </div>

      <div className="bg-[#808080] h-[1px] w-full"></div>

      <div className="text-[18px] max-w-[700px] px-10 lg:px-0 flex flex-col justify-center w-full gap-14">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">WHO I AM</h2>
          <p>Hey there, I'm <span className='font-bold'>Igbagbo Olufiranye</span>, a passionate self-taught front-end developer based in the UK. My journey into the world of web development has been a thrilling adventure filled with curiosity and a drive to create beautiful, interactive, and user-friendly digital experiences.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I DO</h2>
          <p>As a Front End Developer, I specialize in crafting high-quality web interfaces using cutting-edge technologies. I believe in the power of code to transform ideas into visually stunning and functional websites. My work is centered around user-centric design, ensuring that every project delivers an outstanding web experience.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I DID</h2>
          <p>I delved into content creation, built a BMI Calculator and a Weather Application.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>EDUCATION</h2>
          <p>I embarked on a Javascript, HTML5, CSS and REACT journey.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>SKILLS</h2>
          <p>My toolkit includes a variety of skills such as Javascript, HTML5, CSS, SQL, Python. In content creation, my toolkit includes Photoshop, Premier Pro and Creative Writing.</p>
        </div>
      </div>

      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>
        Feel free to reach out to me via <span> </span>
        <a href="mailto:iolufiranye@gmail.com" className='font-bold underline underline-offset-4'>
          email  
          </a>  
        . <span> </span>
      </p>

      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>Let's collaborate and build something great together,</p>

      <Logo />

      <Link to="/contact" className="touch-btn flex items-center h-[50px] md:w-[30%] w-[60vw] justify-center bg-[#181818] rounded-[1.87rem] text-[18px]">
          <button className=" flex items-center font-semibold">Get in touch</button>
          </Link>

      </div>

  )
}

export default About;