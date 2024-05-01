import { useState, useRef, useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../component/Footer";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      mirror: false,
      duration: 1000,
      once: true,
    })
  }, []);
  
  return (
    <div>
        <div className="w-[95vw] md:w-full flex items-center justify-center py-20 px-16 overflow-hidden">
          <div className="flex flex-col items start justify-center gap-12">
            <div
            data-aos="zoom-in-down"
            data-aos-easing="ease"
            data-aos-duration="1500"
            data-aos-delay="0.5"
            data-aos-mirror="false"
            className="md:p-0 p-4">
              <h1 className="font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7">Get in touch</h1>
              <p className='text-[18px]'>Let's build something awesome!</p>
            </div>

            <div 
            data-aos="zoom-in"
            data-aos-easing="ease"
            data-aos-duration="1500"
            data-aos-delay='0.5'
            data-aos-mirror="false"
            className="form border-[0.3px] border-[#808080] rounded-2xl px-5 md:px-10 md:w-[600px] xl:h-[610px] lg:w-[800px] md:h-690px h-[750px] w-[330px]">

              <div className="flex gap-16 md:gap-60 p-4 items-center border-b-[0.3px] border-[#808080] w-full">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#F63636] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#F6C136] rounded-full"></div>
                <div className="w-3 h-3 bg-[#68F636] rounded-full"></div>
            </div>
            <p>New Message</p>
          </div>

          <form className="mt-6 flex flex-col gap-10 justify-center">
            <label htmlFor="name" className="flex flex-wrap gap-5">
            <span className='flex items-center'>Your Name:</span>
            <input type="text" name='name' id='name' placeholder="What's your name?" required 
            className='outline-none p-2 border-b-[0.5px] border-[#808080]'  
            aria-label='name'/>
            </label>

            <label htmlFor="email" className="flex flex-wrap items-center gap-5">
              <span className="flex items-center">Your Email</span>
              <input type="text" name="email" id="name" placeholder="Your email" required
              className='outline-none p-2 border-b-[0.5px] border-[#808080]' />
            </label>
            
        <label htmlFor="" className="flex flex-col">
          <span className="font-medium mb-4">Your Message:</span>
          <textarea name="message" cols="30" rows="7" placeholder="Write your message here" 
          className='placeholder:text-[#808080] bg-tranparent outline-none p-4  border-[0.5px] border-[#808080] rounded-2xl'></textarea>
        </label>

        <div className="w-full flex  justify-center items-center">
            <button type='submit' className='main-button w-[80%] md:w-[40%] lg:w-[30%]'>Send</button>
            </div>

          </form>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact