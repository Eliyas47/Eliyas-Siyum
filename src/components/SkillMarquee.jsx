import { motion } from "framer-motion";
import { HIGHLIGHT_SKILLS } from "@/data/skills";

const SkillMarquee = () => {
  const items = [...HIGHLIGHT_SKILLS, ...HIGHLIGHT_SKILLS];

  return (
    <div className="marquee-wrap w-full overflow-hidden py-4">
      <motion.div
        className="marquee-track flex gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 28, ease: "linear" },
        }}
      >
        {items.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="marquee-pill shrink-0 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillMarquee;
