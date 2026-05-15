import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen pt-32 md:pt-20 flex items-center justify-center relative overflow-hidden section-padding">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 font-semibold mb-4 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            <span className="gradient-text">
              Gowthami Akula
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold mb-6">
            Frontend Developer
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            I build modern, responsive, and futuristic web applications using
            React, Tailwind CSS, and modern frontend technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="primary-button"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="glass-card p-4 w-[340px] h-[340px] flex items-center justify-center"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >

            {/* Profile Image */}
            <div className="w-72 h-72 rounded-3xl overflow-hidden border-4 border-cyan-400/30 shadow-2xl">

              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;