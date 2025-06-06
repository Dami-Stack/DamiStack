import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MediaBarMotion } from '../common/motion/MediaBar';
import {
  IconBrandCampaignmonitor,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const MediaBar = () => {
  const media = [
    {
      icon: <IconBrandGithub />,
      link: "https://github.com/Dami-Stack",
    },
    {
      icon: <IconBrandLinkedin />,
      link: "https://www.linkedin.com/in/damilola-akinrodoye/",
    },
    {
      icon: <IconBrandX />,
      link: "https://x.com/StackDami",
    },
    { icon: <IconBrandWhatsapp />, link: "https://wa.me/2347087019089" },
    {
      icon: <IconBrandCampaignmonitor />,
      link: "mailto:damiactuary@gmail.com",
    },
  ];
  const { container } = MediaBarMotion;
  return (
    <motion.div
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="hidden md:flex absolute z-10 flex-col w-10 p-2 bg-teal-500 items-center rounded-md bottom-0 md:bottom-auto md:top-80 space-y-4 border border-white"
    >
      {media.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className="text-black hover:text-white"
          aria-label={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </motion.div>
  );
};
