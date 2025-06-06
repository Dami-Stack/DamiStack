import { motion } from "framer-motion";

export const Blog = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center min-h-[60vh] space-y-4"
  >
    <h1 className="text-3xl font-bold text-teal-500">Blog</h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl">
      🚧 This blog page is still in production.
      <br />
      Please check back soon for updates and articles!
    </p>
  </motion.section>
);
