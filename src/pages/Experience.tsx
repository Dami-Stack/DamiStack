import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { IconClockPlay } from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { CommonCard } from "../components/CommonCard";

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = "My proffesional career journey";
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: "/image.png",
      name: "PENSiVE",
      position: "Frontend Developer",
      startDate: "Mar 2020",
      endDate: "October 2023",
      duration: "3 years 6 months",
      location: "Port-Harcourt, Nigeria",
    },
    {
      id: 2,
      image: "/image.svg",
      name: "AbInbev",
      position: "Web Developer Intern",
      startDate: "June 2024",
      endDate: "Present",
      duration: "Ongoing",
      location: "Banana Island Lagos, Nigeria (Remote)",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Experience | Damilola Nengi</title>
        <meta
          name="description"
          content="Explore the professional experience of Damilola Nengi, including roles at PENSiVE and AbInbev."
        />
      </Helmet>
      <motion.section
        initial={section.initial}
        animate={section.animated}
        transition={section.transition}
        className="space-y-6"
      >
        <SectionHeader
          icon={<IconClockPlay />}
          label="Experience"
          description={sectionDescription}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((experience) => (
            <CommonCard key={experience.id} {...experience} />
          ))}
        </div>
      </motion.section>
    </>
  );
};
