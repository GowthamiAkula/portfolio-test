import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 section-padding relative overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to connect with me for collaborations, projects, or opportunities.
          </p>

        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <motion.div
            className="glass-card p-8 text-center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
          >

            <div className="text-5xl mb-4 flex justify-center text-cyan-400">
              <FaEnvelope />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Email
            </h3>

            <p className="text-gray-300 break-all">
              akulagowthami05@gmail.com
            </p>

          </motion.div>

          {/* Phone */}
          <motion.div
            className="glass-card p-8 text-center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
          >

            <div className="text-5xl mb-4 flex justify-center text-cyan-400">
              <FaPhoneAlt />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Phone
            </h3>

            <p className="text-gray-300">
              +91 8341550640
            </p>

          </motion.div>

          {/* Location */}
          <motion.div
            className="glass-card p-8 text-center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
          >

            <div className="text-5xl mb-4 flex justify-center text-cyan-400">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Location
            </h3>

            <p className="text-gray-300">
              Andhra Pradesh, India
            </p>

          </motion.div>

        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-12 flex-wrap"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <motion.a
            href="https://github.com/GowthamiAkula"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button flex items-center gap-2"
            whileHover={{ scale: 1.08 }}
          >
            <FaGithub />
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/gowthamiakula/"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button flex items-center gap-2"
            whileHover={{ scale: 1.08 }}
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;