import { Helmet } from "react-helmet-async";
import { IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { SectionMotion } from "../common/motion/Section";
import { useEffect, useState } from "react";

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = "A short story of me";

  const profileImages = [
    "/mestandjpg.jpg",
    "/medeathstare.jpg",
    "/lstyr.jpg",
    "/selfie3jpg.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [profileImages.length]);
  return (
    <>
      <Helmet>
        <title>About | Damilola Nengi</title>
        <meta
          name="description"
          content="Learn more about Damilola Nengi, a fullstack developer passionate about building modern, scalable web applications and impactful digital experiences."
        />
      </Helmet>
      <motion.section
        initial={section.initial}
        animate={section.animated}
        transition={section.transition}
        className="space-y-6"
      >
        <SectionHeader
          icon={<IconLeaf />}
          label="About"
          description={sectionDescription}
        />

        <div className="flex justify-center mb-4">
          <img
            src={profileImages[currentImage]}
            alt="Profile"
            className="w-32 h-32 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-teal-500 shadow-lg transition-all duration-500"
          />
        </div>

        <div className="flex gap-2 text-md lg:text-xl font-medium">
          <h2 className="font-semibold">Hello, I'm Damilola</h2>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <p>
          Fueled by curiosity and a drive for innovation, having a background in
          building modern, scalable web applications. The journey in tech began
          with a fascination for how things work and a deep commitment to
          creating solutions that truly make an impact. Over the years, skills
          in both frontend and backend development have been sharpened,
          leveraging cutting-edge technologies to craft seamless, intuitive user
          experiences.
        </p>
        <p>
          Currently, I specialize in JavaScript, TypeScript, and frameworks like
          React and Node.js. I enjoy crafting clean, efficient code and
          collaborating with others to bring ideas to life. My focus is on
          delivering intuitive user experiences and robust backend systems.
        </p>
        <p>
          Beyond the digital space, I enjoy watching football, playing
          basketball, and indulging in the energy of phonk music. My interest in
          food fuels my curiosity for culinary experiences, and my fascination
          with 3D animation blends my love for both art and technology. I'm
          always seeking new ways to challenge myself, create, and evolve.
        </p>
        <p>
          Based in Lagos, Nigeria, I bring a global perspective to every project
          I work on.
        </p>
        <p>
          Interested in my journey or thoughts? Check out my{" "}
          <a
            href="/blog"
            className="text-teal-500 underline hover:text-teal-700"
          >
            blog
          </a>
          !
        </p>
      </motion.section>
    </>
  );
};
