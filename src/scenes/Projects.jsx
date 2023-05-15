import LineGradient from "../components/LineGradient.jsx";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center p-16 text-red`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-red font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
      <img src={`../assets/${projectTitle}.png `} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* Headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 ">
          As a Frontend Developer, I've worked on a variety of projects that
          demonstrate my skills and expertise in creating intuitive and visually
          appealing web experiences. Here are a few examples of my work that I'm
          particularly proud of:
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid w-10/12 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* Row 1  */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEATIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            subtitle="It provides a platform for users to create, browse, and interact with writing prompts, fostering creativity and inspiration."
            link="https://blog-ai-app-with-nextjs.vercel.app/"
          />
          <Project
            title="Project 2"
            subtitle="This project is designed to help administrators in managing their teams by organizing relevant information."
            link="https://frontend-admin-dashboard-8hxt.onrender.com/#/dashboard"
          />

          {/* Row 2 */}

          <Project
            title="Project 3"
            subtitle="The Share Prompt App is a web application that allows users to share creative writing prompts with others."
            link="https://promptopia-k4zolexr6-seb9809.vercel.app/"
          />
          <Project
            title="Project 4"
            subtitle="Food Recipe website page using an themealdb API"
            link="https://food-recipe-lyart.vercel.app/"
          />
          <Project
            title="Project 5"
            subtitle="Weather App using OpenWeatherMap API!"
            link="https://weather-app-seb9809.vercel.app/"
          />

          {/* Row 3 */}
          <Project
            title="Project 6"
            subtitle="Classic Whack-A-Mole game"
            link="https://whack-a-mole-zeta.vercel.app/"
          />
          <Project
            title="Project 7"
            subtitle="Connect four. Created from scratch using Vanilla JS, HTML & CSS"
          />
          <div className="flex justify-center text-center items-center p-10 bg-green-400 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold  ">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
