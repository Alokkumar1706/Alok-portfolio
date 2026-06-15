import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  tech,
  size,
  onClick,
}) => {
  const sizeClass = "";

  return (
    <motion.div
  whileHover={{
    scale: 1.03,
  }}
  className={`
    ${sizeClass}
    min-h-75
    flex
    flex-col
    justify-between
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    p-8
    hover:border-green-400
    transition-all
  `}
>
      <h3 className="text-3xl font-bold mb-4 text-green-400">
        {title}
      </h3>

      <p className="text-gray-300 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="
            px-3 py-1
            bg-green-500/20
            rounded-full
            text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <button
  onClick={onClick}
  className="
  mt-8
  px-5
  py-2
  rounded-xl
  border
  border-green-400"
>
  View Details
</button>
    </motion.div>
  );
};

export default ProjectCard;