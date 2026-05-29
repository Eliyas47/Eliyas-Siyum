import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PHRASE_HOLD_MS = 3800;
const FADE_S = 0.75;

const fade = {
  duration: FADE_S,
  ease: [0.22, 1, 0.36, 1],
};

const phraseMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

/** Shared look for both rotating phrases */
const phraseClass = "hero-subtitle-shimmer font-semibold";

const PHRASES = [
  {
    id: "fullstack",
    label: "Full Stack Developer",
  },
  {
    id: "student-astu",
    label: "Software engineering student at ASTU",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.35, duration: 0.5 },
  },
};

const slot = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedHeroSubtitle = () => {
  const reduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const cycleMs = PHRASE_HOLD_MS + FADE_S * 2000;

    const schedule = () => {
      timeoutRef.current = window.setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        schedule();
      }, cycleMs);
    };

    timeoutRef.current = window.setTimeout(() => {
      setPhraseIndex(1);
      schedule();
    }, FADE_S * 1000 + PHRASE_HOLD_MS);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [reduceMotion]);

  const ariaLabel =
    "Full Stack Developer and Software engineering student at ASTU";

  const phrase = PHRASES[phraseIndex];

  return (
    <motion.div
      className="hero-subtitle hero-subtitle-pro text-base sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8"
      variants={container}
      initial={reduceMotion ? "show" : "hidden"}
      animate="show"
      role="text"
      aria-label={ariaLabel}
    >
      <motion.div variants={slot} className="hero-subtitle-role-slot">
        {reduceMotion ? (
          <div className="hero-subtitle-static">
            <p className={`hero-subtitle-line-block leading-relaxed ${phraseClass}`}>
              Full Stack Developer
            </p>
            <p className={`hero-subtitle-line-block leading-relaxed mt-2 ${phraseClass}`}>
              Software engineering student at ASTU
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={phrase.id}
              className={`hero-subtitle-line-block hero-subtitle-role-text leading-relaxed ${phraseClass}`}
              {...phraseMotion}
              transition={fade}
              aria-live="polite"
            >
              {phrase.label}
            </motion.p>
          </AnimatePresence>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeroSubtitle;
