import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandNodejs,
  IconBrandGithub,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandWordpress,
  IconBrandFramerMotion,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandGit,
} from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { SkillCard } from "../components/SkillCard";

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription =
    "Here’s an overview of the skills I’ve developed over the years, from hands-on tools to interpersonal strengths.";

  const languagesTools = [
    { label: "HTML5", icon: <IconBrandHtml5 />, level: "99%" },
    { label: "CSS3", icon: <IconBrandCss3 />, level: "95%" },
    { label: "JavaScript", icon: <IconBrandJavascript />, level: "85%" },
    { label: "Python", icon: <IconBrandPython />, level: "80%" },
    { label: "GitHub", icon: <IconBrandGithub />, level: "95%" },
    { label: "Git", icon: <IconBrandGit />, level: "95%" },
    { label: "C", icon: <IconCodeCircle />, level: "70%" },
  ];

  const frameworks = [
    { label: "React", icon: <IconBrandReact />, level: "90%" },
    { label: "Next.js", icon: <IconBrandNextjs />, level: "90%" },
    { label: "Tailwind CSS", icon: <IconBrandTailwind />, level: "94%" },
    { label: "Bootstrap", icon: <IconBrandBootstrap />, level: "90%" },
    { label: "Node.js", icon: <IconBrandNodejs />, level: "80%" },
    { label: "Express", icon: <IconCodeCircle />, level: "75%" },
    { label: "MongoDB", icon: <IconBrandMongodb />, level: "80%" },
    { label: "Firebase", icon: <IconBrandFirebase />, level: "70%" },
    { label: "Figma", icon: <IconBrandFigma />, level: "85%" },
    { label: "WordPress", icon: <IconBrandWordpress />, level: "80%" },
    { label: "Framer Motion", icon: <IconBrandFramerMotion />, level: "60%" },
  ];

  const softSkills = [
    { label: "Collaboration" },
    { label: "Communication" },
    { label: "Problem-solving" },
    { label: "Critical Thinking" },
    { label: "Professional Foundations" },
  ];

  return (
    <>
      <Helmet>
        <title>Skills | Damilola Nengi</title>
        <meta
          name="description"
          content="Explore the technical and soft skills of Damilola Nengi, including JavaScript, React, Node.js, and more."
        />
      </Helmet>
      <motion.section
        initial={section.initial}
        animate={section.animated}
        transition={section.transition}
        className="space-y-10"
      >
        <SectionHeader
          icon={<IconCodeCircle />}
          label="Skills"
          description={sectionDescription}
        />

        <div>
          <h3 className="text-lg font-bold mb-2 text-teal-400">
            Languages & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {languagesTools.map((skill) => (
              <SkillCard
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                level={skill.level}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2 text-teal-400">
            Frameworks & Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {frameworks.map((skill) => (
              <SkillCard
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                level={skill.level}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2 text-teal-400">Soft Skills</h3>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-700 dark:text-gray-200">
            {softSkills.map((skill) => (
              <li key={skill.label}>{skill.label}</li>
            ))}
          </ul>
        </div>
        <p className="text-center text-teal-400 font-semibold mt-8">
          I am constantly learning, excited to pick up new proficiencies. The
          journey never stops!
        </p>
      </motion.section>
    </>
  );
};
