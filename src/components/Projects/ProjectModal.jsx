import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project || !project.details) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      flex
      justify-center
      items-center
      z-50"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        bg-[#111827]
        p-8
        rounded-3xl
        max-w-2xl
        w-full
        border
        border-green-400"
      >
        <h2 className="text-4xl font-bold text-green-400 mb-4">
          {project.title}
        </h2>

        <p className="mb-6">
          {project.description}
        </p>

        <h3 className="font-bold text-xl mb-2">
          Features
        </h3>

        <ul className="mb-6">
          {project.details.features.map((feature, index) => (
            <li key={index}>
              ✓ {feature}
            </li>
          ))}
        </ul>

        <h3 className="font-bold text-xl mb-2">
          Challenges
        </h3>

        <p className="mb-6">
          {project.details.challenges}
        </p>

        <div className="flex gap-4">
          <a
            href={project.details.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-5
            py-2
            bg-green-500
            text-black
            rounded-xl"
          >
            Github
          </a>

          <button
            onClick={onClose}
            className="
            px-5
            py-2
            border
            border-red-400
            rounded-xl"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;