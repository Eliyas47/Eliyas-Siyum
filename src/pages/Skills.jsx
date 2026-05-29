import { ScrollAnimation } from "@/components/ScrollAnimation";
import { SKILL_CATEGORIES } from "@/data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2
          className="text-4xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technical Skills
        </motion.h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="theme-text-muted mb-12 max-w-2xl leading-relaxed">
          A complete overview of my technical stack — from programming languages
          and backend systems to deployment, testing, machine learning, and
          professional soft skills.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((group, index) => {
          const Icon = group.icon;
          return (
            <ScrollAnimation key={group.category}>
              <motion.article
                className="theme-card rounded-2xl p-6 card-glow"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: "var(--color-accent-soft)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                  </div>
                  <h3 className="text-lg font-semibold theme-text">
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <span className="skill-tag">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
