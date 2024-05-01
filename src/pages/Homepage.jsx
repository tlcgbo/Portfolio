import { useEffect } from "react";
import GetInTouch from "../component/GetInTouch";
import GetToKnow from "../component/GetToKnow";
import Hero from "../component/Hero";
import Projects from "../component/Projects";
import { Helmet } from "react-helmet";
import Footer from "../component/Footer";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Igbagbo Olufiranye</title>
        <meta name="description" content="Proficient in HTML5, CSS3, Javascript." />
      </Helmet>
      <div className="pt-[8%] mx-3 md:mx-0 w-[90vw]">
        <Hero />
        <Projects />
        <GetToKnow />
        <GetInTouch />
        <Footer />
      </div>
    </>
  )
}

export default Homepage