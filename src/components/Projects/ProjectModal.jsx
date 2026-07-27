import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
const ProjectModal = ({ project, onClose }) => {
  console.log(project);
  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [onClose]);
  if (!project) return null;
  

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-green-500/30 bg-[#0F172A]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 hover:bg-red-500 transition"
          >
            <X size={20} />
          </button>

          {/* Image */}
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover"
            />
          )}

          <div className="p-8">
            <h2 className="mb-4 text-4xl font-bold text-green-400">
              {project.title}
            </h2>

            <p className="mb-8 text-gray-300 leading-8">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-8 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Key Features
            </h3>

            <div className="mb-8 grid gap-3 md:grid-cols-2">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="text-green-400">✔</span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-green-500 px-6 py-3 hover:bg-green-500 hover:text-black transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400 transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;