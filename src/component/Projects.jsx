import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { projects } from "../constants";
import { FaGithub, FaEye } from "react-icons/fa";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} id="projects" className="flex flex-col items-center mt-40 md:mt- justify-center">
      <h2 className="font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]">Selected Work</h2>
      <p className="flex items-center justify-center text-justify w-[80%] mt-8 text-[20px] max-w-3xl leading-[30px]"> The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
      
      <div className="mt-20 flex flex-wrap gap-12 items-center justify-center xl:grid grid-cols-3 ">
        {projects.map((project, index) => (
          <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          animate={controls}
          initial="hidden"
          className="project-card py-[3px] rounded-[15px]" key={project.name}
        >
          
        </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects