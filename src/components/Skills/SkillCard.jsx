import { motion } from "framer-motion";

const SkillCard = ({ title, items }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03
      }}
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      hover:border-green-400
      transition-all
      duration-300"
    >
      <h3 className="text-2xl font-bold text-green-400 mb-4">
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-gray-300"
          >
            ✓ {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;