import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description:
        "B.Tech Computer Science student at IK Gujral Punjab Technical University.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Developer",
      description:
        "Java Full Stack Developer passionate about building real-world applications.",
    },

    {
      icon: <FaRocket />,
      title: "Journey",
      description:
        "Started with Core Java, moved to JDBC, React and now learning Spring Boot.",
    },

    {
      icon: <FaBriefcase />,
      title: "Career Goal",
      description:
        "Looking for Software Developer opportunities to grow and contribute.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-5xl
          font-bold
          text-center
          mb-8"
        >
          About Me
        </h2>

        <p
          className="
          text-center
          text-gray-400
          max-w-3xl
          mx-auto
          mb-20
          text-lg"
        >
          Hi, I'm Alok Kumar, a Java Full Stack Developer and
          Computer Science student. I enjoy building applications
          using Java, React, JDBC and MySQL, and I am currently
          learning Spring Boot to become a complete Full Stack Engineer.
        </p>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              hover:border-green-400
              transition-all"
            >
              <div
                className="
                text-4xl
                text-green-400
                mb-6"
              >
                {card.icon}
              </div>

              <h3
                className="
                text-2xl
                font-bold
                mb-4"
              >
                {card.title}
              </h3>

              <p className="text-gray-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;