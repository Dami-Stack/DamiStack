import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { IconBrandCodepen } from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  const { section } = SectionMotion;
  const sectionDescription = "List of my portfolio projects";
  const portfolios = [
    {
      id: 1,
      name: "BeerTech Community Website",
      image: "/image copy.png",
      link: "https://beer-tech-community.vercel.app/",
      description:
        "A community website(Reddit clone) for company employees to share ideas, resources, learn from experience and innovate.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "Figma"],
    },
    {
      id: 2,
      name: "PENSiVE Business Website",
      image: "/image copy 2.png",
      link: "https://pensive.com.ng/",
      description:
        "A business website for PENSiVE, a company that provides software solutions and services.",
      techStack: ["NextJs", "TypeScript", "TailwindCSS", "Express.js"],
    },
    {
      id: 12,
      name: "Social Links Card",
      image: "/image copy 3.png",
      link: "https://github.com/Dami-Stack/Social-link",
      description:
        "A social links card that displays various social media links in a card format.",
      techStack: ["HTML5", "JavaScript", "CSS3"],
    },
    {
      id: 13,
      name: "Calculator App",
      image: "/image copy 4.png",
      link: "https://github.com/Dami-Stack/calculator/tree/master",
      description:
        "A simple calculator app that performs basic arithmetic operations.",
      techStack: ["React", "JavaScript", "TailwindCSS"],
    },
    {
      id: 15,
      name: "Lead Tracker Browser Extension",
      image: "/image copy 5.png",
      link: "https://github.com/Dami-Stack/Lead-Tracker/",
      description:
        "A browser extension that helps track leads and store valued URL's.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Chrome Extension API"],
    },
    {
      id: 16,
      name: "QR Code Generator",
      image: "/image copy 6.png",
      link: "https://github.com/Dami-Stack/Qr-code/tree/main/qr-code-component-main",
      description:
        "A QR code generator that allows users to create QR codes for various purposes.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
    },
  ];
  return (
    <>
      <Helmet>
        <title>Projects | Damilola Nengi</title>
        <meta
          name="description"
          content="Browse portfolio projects by Damilola Nengi, including web apps, business sites, browser extensions, and more."
        />
      </Helmet>
      <motion.section
        initial={section.initial}
        animate={section.animated}
        transition={section.transition}
        className="space-y-6"
      >
        <SectionHeader
          icon={<IconBrandCodepen />}
          label="Portfolio"
          description={sectionDescription}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio) => (
            <ProjectCard key={portfolio.id} {...portfolio} />
          ))}
        </div>
        <p className="text-center text-teal-400 font-semibold mt-8">
          Check out my{" "}
          <a
            href="https://github.com/Dami-Stack"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-teal-300"
          >
            GitHub
          </a>{" "}
          for more projects!
        </p>
      </motion.section>
    </>
  );
};
