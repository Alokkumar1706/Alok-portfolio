import { motion } from "framer-motion";
import {
  FaGithub,
} from "react-icons/fa";

import {
  ExternalLink,
  ArrowRight,
} from "lucide-react";
const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
     whileHover={{
  y: -4,
  scale: 1.01,
}}
      transition={{
        duration: 0.3,
      }}
      className="
      group
      relative
      z-0
      overflow-hidden
      rounded-3xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      hover:border-green-400
      transition-all
      duration-300
      flex
      flex-col
      hover:z-20
    "
    >
      {/* Image */}

      {project.image ? (
        <div className="overflow-hidden h-56">
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            duration-500
          "
          />
        </div>
      ) : (
        <div
          className="
          h-56
          flex
          items-center
          justify-center
          bg-gradient-to-r
          from-green-500/20
          to-cyan-500/20
        "
        >
          <span className="text-5xl">
            🚀
          </span>
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-green-400 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              px-3
              py-1
              rounded-full
              bg-green-500/20
              text-green-300
              text-sm
            "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              flex-1
              flex
              justify-center
              items-center
              gap-2
              py-3
              rounded-xl
              border
              border-green-400
              hover:bg-green-500
              hover:text-black
              transition
            "
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
              flex-1
              flex
              justify-center
              items-center
              gap-2
              py-3
              rounded-xl
              bg-green-500
              text-black
              font-semibold
              hover:bg-green-400
              transition
            "
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}
        </div>

        <button
          onClick={onClick}
          className="
          mt-5
          flex
          justify-center
          items-center
          gap-2
          text-green-400
          hover:text-green-300
          font-semibold
        "
        >
          View Details

          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;