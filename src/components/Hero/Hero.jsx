import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import resume from "../../assets/resume/Alok_Kumar_Resume.pdf";
import profile from "../../assets/images/profile.jpeg";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

const Hero = () => {
  return (
  
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-20 pt-24 lg:pt-28 bg-[#050816]">
  {/* Background Glow */}

  <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-[120px]" />

  <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-[150px]" />

  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

    {/* LEFT */}

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >

      <h3 className="text-green-400 text-xl font-medium mb-4">
        👋 Hello, I'm
      </h3>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        Alok{" "}
        <span className="text-green-500">
          Kumar
        </span>
      </h1>

      <div className="mt-6 h-10 text-2xl font-semibold text-green-400">

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "React.js Developer",
            2000,
            "REST API Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          speed={55}
          repeat={Infinity}
        />

      </div>

      <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">

        Passionate Java Full Stack Developer specializing in
        Spring Boot, React.js, MySQL, JWT Authentication,
        and REST APIs. I enjoy building scalable applications,
        solving real-world problems, and continuously learning
        modern technologies.

      </p>

      {/* Buttons */}

      <div className="flex flex-wrap gap-5 mt-10">

        <a
          href={resume}
          download
          className="px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300"
        >
          Download Resume
        </a>

        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="px-8 py-4 rounded-xl border border-green-500 hover:bg-green-500/10 hover:scale-105 transition-all duration-300"
        >
          View Projects
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="px-8 py-4 rounded-xl border border-white/30 hover:border-green-500 hover:text-green-400 transition-all duration-300"
        >
          Contact Me
        </button>

      </div>

      {/* Stats */}

      <div className="flex flex-wrap gap-10 mt-12">

        <div>
          <h2 className="text-3xl font-bold text-green-500">
            300+
          </h2>
          <p className="text-gray-400">
            DSA Problems
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-500">
            5+
          </h2>
          <p className="text-gray-400">
            Major Projects
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-500">
            7.55
          </h2>
          <p className="text-gray-400">
            CGPA
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-500">
            2026
          </h2>
          <p className="text-gray-400">
            Graduate
          </p>
        </div>

      </div>

      {/* Social */}

      <div className="flex gap-8 mt-10 text-3xl">

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://github.com/Alokkumar1706"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://www.linkedin.com/in/alok-kumar-4a543a281/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://leetcode.com/u/aryanalok/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <SiLeetcode />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://www.geeksforgeeks.org/profile/kumaralokadq7f"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <SiGeeksforgeeks />
        </motion.a>

      </div>

    </motion.div>

    {/* RIGHT */}

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="relative"
      >

        <div className="absolute inset-0 rounded-full bg-green-500 blur-[80px] opacity-30"></div>

        <img
          src={profile}
          alt="Alok Kumar"
          className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full object-cover border-4 border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.45)]"
        />

      </motion.div>

    </motion.div>

  </div>

</section>
  );
};

export default Hero;