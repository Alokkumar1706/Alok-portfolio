import SkillCard from "./SkillCard";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16 mt-20">
          Skills
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              {...skill}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;