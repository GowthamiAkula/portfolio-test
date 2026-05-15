import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="border-t border-white/10 py-10 section-padding bg-[#020617]/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Side */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl font-bold gradient-text mb-2">
            Gowthami Akula
          </h2>

          <p className="text-gray-400">
            Frontend Developer & Cloud Enthusiast
          </p>

        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium">

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* Social Links */}
        <div className="flex gap-5">

          <motion.a
            href="https://github.com/GowthamiAkula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-cyan-400 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/gowthamiakula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-cyan-400 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>

        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-white/10 pt-6">
        © 2026 Gowthami Akula. All rights reserved.
      </div>

    </motion.footer>
  );
}

export default Footer;