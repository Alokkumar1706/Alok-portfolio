import timeline from "../../data/timeline";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="py-24 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          My Journey
        </h2>

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
            absolute
            left-4
            top-0
            w-1
            h-full
            bg-green-500"
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
              relative
              pl-16
              mb-12"
            >
              {/* Dot */}

              <div
                className="
                absolute
                left-0
                top-2
                w-8
                h-8
                rounded-full
                bg-green-500"
              />

              <div
               className="
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  p-6
                  rounded-2xl
                  hover:border-green-400
                  hover:-translate-y-1
                  transition-all
                  duration-300"
              >
                <span
                  className="
                  text-green-400
                  font-bold"
                >
                  {item.year}
                </span>

                <h3
                  className="
                  text-2xl
                  font-bold
                  mt-2"
                >
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Timeline;