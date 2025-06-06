import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHeadphones,
  IconMail,
} from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription =
    "Let's connect! Feel free to reach out for collaborations, questions, or just to say hi.";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data to Formspree
    const response = await fetch("https://formspree.io/f/xrbkebqr", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target as HTMLFormElement),
    });
    if (response.ok) {
      setShowConfirmation(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setShowConfirmation(false), 4000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Damilola Nengi</title>
        <meta
          name="description"
          content="Contact Damilola Nengi for collaborations, freelance work, or just to connect. Available via email and social media."
        />
      </Helmet>
      <motion.section
        initial={section.initial}
        animate={section.animated}
        transition={section.transition}
        className="space-y-10"
      >
        <SectionHeader
          icon={<IconHeadphones />}
          label="Contact"
          description={sectionDescription}
        />

        <p className="text-center text-lg text-gray-700 dark:text-gray-200">
          Have a project in mind or just want to say hi? I’d love to hear from
          you!
        </p>

        <form
          className="max-w-xl mx-auto bg-gray-900 rounded-lg p-6 flex flex-col gap-4 shadow"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 rounded bg-gray-800 text-gray-100"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 rounded bg-gray-800 text-gray-100"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-2 rounded bg-gray-800 text-gray-100"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
          {showConfirmation && (
            <div className="text-center text-teal-400 font-semibold mt-2">
              Thank you! Your message has been received.
            </div>
          )}
        </form>

        {/* Direct Contact Info */}
        <div className="text-center space-y-2">
          <a
            href="mailto:damiactuary@gmail.com"
            className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:underline"
          >
            <IconMail size={20} /> damiactuary@gmail.com
          </a>
          <div className="text-gray-400">Lagos, Nigeria</div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Dami-Stack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <IconBrandGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/damilola-akinrodoye/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <IconBrandLinkedin size={32} />
          </a>
          <a
            href="https://x.com/StackDami"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <IconBrandX size={32} />
          </a>
        </div>

        <p className="text-center text-teal-400 font-semibold mt-8">
          Available for hire, freelance, remote, and collaborative
          opportunities!
        </p>
      </motion.section>
    </>
  );
};
