import resume from "../assets/resume/resume.pdf";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto section-padding">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            Portfolio
          </a>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-cyan-400 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Resume Button */}
          <a
            href={resume}
            download
            className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-full transition duration-300"
          >
            Resume
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;