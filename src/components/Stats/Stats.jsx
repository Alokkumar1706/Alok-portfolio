import { motion } from "framer-motion";

const stats = [
  {
    number: "3+",
    title: "Projects Built",
  },

  {
    number: "8+",
    title: "Technologies",
  },

  {
    number: "4",
    title: "Coding Profiles",
  },

  {
    number: "2026",
    title: "Placement Target",
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Developer Stats
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-10
              text-center
              hover:border-green-400
              transition-all"
            >
              <h3
                className="
                text-5xl
                font-bold
                text-green-400"
              >
                {item.number}
              </h3>

              <p
                className="
                text-gray-400
                mt-4"
              >
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;