import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ExpandableSection = ({
  preview,
  children,
  expandLabel = "Read more",
  collapseLabel = "Show less",
  className = "",
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <p className="theme-text-muted leading-relaxed">{preview}</p>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
        style={{ color: "var(--color-accent)" }}
        aria-expanded={expanded}
      >
        {expanded ? collapseLabel : expandLabel}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default ExpandableSection;
