import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 section-padding relative overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate frontend developer focused on building modern,
            responsive, and user-friendly web applications.
          </p>

        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              My Journey
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I am a Computer Science Engineering student passionate about
              frontend development, UI/UX design, and building modern web
              applications using React and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              I enjoy solving real-world problems through technology and have
              worked on projects related to affiliate platforms, cloud-based
              security systems, and responsive web applications.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Along with frontend development, I also have knowledge in AWS
              cloud technologies, programming, and software development
              principles. My goal is to become a skilled full-stack developer
              and build impactful digital solutions.
            </p>

          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <motion.div
              className="glass-card p-8 w-[320px] h-[320px] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >

              <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-7xl text-black shadow-2xl">
                <FaCode />
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;