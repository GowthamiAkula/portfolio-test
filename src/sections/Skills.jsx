import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    title: "Programming",
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "SQL",
      "OOP Concepts",
    ],
  },

  {
    title: "Cloud & Tools",
    skills: [
      "AWS",
      "Git",
      "GitHub",
      "Vite",
      "Bootstrap",
      "VS Code",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 section-padding relative overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

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
            Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies, programming languages, and tools I use to build modern applications.
          </p>

        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm"
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;