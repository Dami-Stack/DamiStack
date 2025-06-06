import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { IconBallpen } from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { CommonCard } from "../components/CommonCard";

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = "My education history";
  // mockup education data
  const educations = [
    {
      id: 1,
      image: "/bouesti portal.png",
      name: "Bamidele Olumilua University of Education, Science and Technology, Ikere-Ekiti",
      position: "Bachelor of Science in Computer Science",
      startDate: "May 2022",
      endDate: "November 2025",
      duration: "4 years",
      location: "Ikere-Ekiti, Nigeria",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Education | Damilola Nengi</title>
        <meta
          name="description"
          content="See the education background of Damilola Nengi, including a B.Sc. in Computer Science from Bamidele Olumilua University."
        />
      </Helmet>
      <motion.section
        initial={section.initial}
        animate={section.animated}
        transition={section.transition}
        className="space-y-6"
      >
        <SectionHeader
          icon={<IconBallpen />}
          label="Education"
          description={sectionDescription}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {educations.map((education) => (
            <CommonCard key={education.id} {...education} />
          ))}
        </div>
      </motion.section>
    </>
  );
};
