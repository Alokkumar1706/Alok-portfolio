import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import resume from "../../assets/resume/Alok_Kumar_Resume.pdf";
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
   <section className="min-h-[90vh] flex items-center justify-center px-8 pt-20 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-green-500/20 blur-[120px] rounded-full"></div>

      <div className="text-center z-10">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-bold"
        >
          Alok.dev
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-400"
        >
          Java Full Stack Developer
        </motion.p>

        <div className="mt-8 text-2xl text-green-400 h-12">

          <TypeAnimation
           sequence={[
  "Java Full Stack Developer",
  2000,
  "React Developer",
  2000,
  "Backend Enthusiast",
  2000,
  "Problem Solver",
  2000,
]}tell
            repeat={Infinity}
          />

        </div>

        {/* Buttons */}

        <div className="mt-10 flex justify-center gap-4">

          <a
  href={resume}
  download
  className="
  px-8
  py-4
  bg-green-500
  text-black
  rounded-2xl
  font-bold
  hover:scale-105
  transition-all"
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
  className="
  px-6 py-3
  rounded-xl
  border border-green-500
  hover:bg-green-500/20
  transition"
>
  View Projects
</button>

        </div>

        {/* Social */}

        <div className="flex justify-center gap-8 mt-10 text-3xl">

          <a
            href="https://github.com/Alokkumar1706"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/alok-kumar-4a543a281/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/aryanalok/"
            target="_blank"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.geeksforgeeks.org/profile/kumaralokadq7f"
            target="_blank"
          >
            <SiGeeksforgeeks />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;