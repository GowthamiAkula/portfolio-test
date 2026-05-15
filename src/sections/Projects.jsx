import { motion } from "framer-motion";

const projects = [
  {
    title: "Food Court Web Application",
    description:
      "A responsive online food ordering platform with menu display, cart functionality, feedback system, and modern UI deployed using AWS EC2.",
    tech: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap", "AWS"],
    github: "https://github.com/GowthamiAkula",
    demo: "#",
  },

  {
    title: "Smart Visitor & Threat Detection",
    description:
      "An AI-powered security system using AWS Rekognition for face analysis with automated alerts through AWS Lambda and SNS integration.",
    tech: ["AWS", "Lambda", "SNS", "Rekognition", "DynamoDB"],
    github: "https://github.com/GowthamiAkula",
    demo: "#",
  },

  {
    title: "Campus Affiliate Marketplace",
    description:
      "A centralized affiliate platform for college students to explore products, generate affiliate revenue, and improve digital commerce engagement.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Frontend"],
    github: "https://github.com/GowthamiAkula",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 section-padding relative overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

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
            Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Some of the real-world projects I have built using modern technologies.
          </p>

        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
            >

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">

                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.08 }}
                  >
                    {tech}
                  </motion.span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                  whileHover={{ scale: 1.05 }}
                >
                  GitHub
                </motion.a>

                <motion.a
                  href={project.demo}
                  className="secondary-button"
                  whileHover={{ scale: 1.05 }}
                >
                  Live Demo
                </motion.a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;