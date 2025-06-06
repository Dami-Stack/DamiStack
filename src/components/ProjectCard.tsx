import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface ProjectCardProps {
  id: number;
  image: string;
  name: string;
  link: string;
  description?: string;
  techStack?: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { image, name, link, description, techStack } = props;
  return (
    <Link to={link} target="_blank">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
        transition={{ duration: 0.2 }}
        className="relative flex flex-col items-center max-w-full md:max-w-lg overflow-hidden rounded-xl bg-gray-900 group"
      >
        <img src={image} alt={name} className="object-cover w-full h-60" />
        <div className="flex flex-col justify-start p-4 text-gray-400 text-sm">
          <h2 className="text-lg font-bold text-white">{name}</h2>
          <p className="text-gray-400 text-sm">
            {description || "No description provided."}
          </p>
        </div>
        {/* Tech stack overlay on hover */}
        {techStack && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-teal-400 font-bold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-teal-700 text-white px-2 py-1 rounded text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
};
