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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-green-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm
            <span className="text-green-500"> Alok Kumar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl text-gray-400"
          >
            Java Full Stack Developer
          </motion.p>

          <div className="mt-6 text-2xl text-green-400 h-12">

            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">

            <a
              href={resume}
              download
              className="px-8 py-4 bg-green-500 text-black rounded-xl font-bold hover:scale-105 transition duration-300"
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
              className="px-8 py-4 border border-green-500 rounded-xl hover:bg-green-500/20 transition duration-300"
            >
              View Projects
            </button>

          </div>

          {/* Social Icons */}

          <div className="flex justify-center md:justify-start gap-7 mt-10 text-3xl">

            <a
              href="https://github.com/Alokkumar1706"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/alok-kumar-4a543a281/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/aryanalok/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/kumaralokadq7f"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <SiGeeksforgeeks />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-green-500 blur-3xl opacity-30 scale-110"></div>

            {/* Profile Image */}

            <img
              src={profile}
              alt="Alok Kumar"
              className="
                relative
                w-72
                h-72
                md:w-96
                md:h-96
                rounded-full
                object-cover
                border-4
                border-green-500
                shadow-[0_0_50px_rgba(34,197,94,0.6)]
                hover:scale-105
                transition
                duration-500
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;