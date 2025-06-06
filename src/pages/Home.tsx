import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { LeaveCard } from "../components/LeaveCard";
import { HomeMotion } from "../common/motion/Home";
import { Link } from "react-router-dom";

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  return (
    <>
      <Helmet>
        <title>Damilola Nengi | Fullstack Developer</title>
        <meta
          name="description"
          content="Portfolio of Damilola Nengi, a passionate fullstack developer building impactful digital experiences with modern web technologies."
        />
      </Helmet>
      <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
        <motion.div
          className="flex flex-1 flex-col space-y-6 items-center md:items-start"
          initial={description.initial}
          animate={description.animated}
          transition={description.transition}
        >
          <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
            <span>Welcome!</span>{" "}
            <div className="ml-1 animate-waving-hand">👋</div>
          </div>
          <h1 className="font-extrabold text-4xl md:text-6xl text-black dark:text-white">
            Damilola Nengi
          </h1>
          <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
            Fullstack Developer
          </h2>
          <div className="text-center md:text-start text-xs md:text-base">
            <p className="text-center md:text-start text-xs md:text-base">
              I’m a developer, passionate about building impactful digital
              experiences. I love working with modern web technologies and
              creating solutions that make a difference.
            </p>
          </div>
          <Link to="./Damilola Resume (1).pdf" target="_blank">
            <motion.div
              initial={resume.initial}
              animate={resume.animated}
              transition={resume.transition}
              className="rounded-3xl w-max border px-4 py-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500"
            >
              Download Resume
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          initial={wrapImg.initial}
          animate={wrapImg.animated}
          transition={wrapImg.transition}
          className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden"
        >
          <motion.img
            initial={image.initial}
            animate={image.animated}
            transition={image.transition}
            src="/profiledami.jpg"
            alt="profile"
            width="100%"
            height="100%"
          />
        </motion.div>

        <LeaveCard label="Fullstack Dev" />
      </section>
    </>
  );
};
