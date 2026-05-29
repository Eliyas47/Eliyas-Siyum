import { VercelLogo } from "@/components/TechLogos";
import SkillMarquee from "@/components/SkillMarquee";
import AnimatedHeroSubtitle from "@/components/AnimatedHeroSubtitle";
import ProfileAvatar from "@/components/ProfileAvatar";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  User,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  Award,
  Mail,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useSWR from "swr";
import cvPdf from "@/assets/files/cv_pdf/Eliyas_Siyum_Resume.pdf";
import { CONTACT_INFO } from "@/config/contact";
import { useNavigation } from "../context/NavigationContext";
import { HIGHLIGHT_SKILLS, SKILL_CATEGORIES } from "@/data/skills";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BENTO = [
  {
    id: "about",
    to: "/about",
    icon: User,
    label: "About",
    title: "Who I am",
    desc: "Software engineering student passionate about backend systems and clean code.",
    accent: "text-yellow-500",
  },
  {
    id: "education",
    to: "/education",
    icon: GraduationCap,
    label: "Education",
    title: "ASTU · Software Engineering",
    desc: "Final-year BSc with CGPA 3.34 at Adama Science and Technology University.",
    accent: "text-cyan-500",
  },
  {
    id: "experience",
    to: "/experience",
    icon: Briefcase,
    label: "Experience",
    title: "Internships & projects",
    desc: "INSA Ethiopia, Oromia Seed Enterprise, and hands-on Django development.",
    accent: "text-yellow-500",
  },
  {
    id: "skills",
    to: "/skills",
    icon: Code2,
    label: "Skills",
    title: "12+ skill categories",
    desc: "Python, Django, DRF, databases, cloud deployment, ML, and more.",
    accent: "text-amber-500",
  },
  {
    id: "projects",
    to: "/projects",
    icon: FolderGit2,
    label: "Projects",
    title: "Built & shipped",
    desc: "Chatbots, marketplaces, recommendation systems, and API backends.",
    accent: "text-blue-500",
  },
  {
    id: "certificates",
    to: "/certificates",
    icon: Award,
    label: "Certificate",
    title: "University degree",
    desc: "BSc Software Engineering credential from ASTU, Ethiopia.",
    accent: "text-rose-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  const [copied, setCopied] = useState(false);
  const { setActivePath } = useNavigation();
  const email = CONTACT_INFO.email;
  const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, "")}`;

  const { data: githubData } = useSWR(
    "https://api.github.com/users/Eliyas47",
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60000 }
  );

  const displayRepos =
    githubData?.public_repos >= 5
      ? `${Math.floor(githubData.public_repos / 5) * 5}+`
      : String(githubData?.public_repos ?? "—");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  useEffect(() => {
    const sectionMap = {
      home: "/",
      about: "/about",
      education: "/education",
      experience: "/experience",
      skills: "/skills",
      projects: "/projects",
      certificates: "/certificates",
      contact: "/contact",
    };

    const observed = Object.keys(sectionMap)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!observed.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActivePath(sectionMap[visible.target.id]);
      },
      { threshold: 0.3, rootMargin: "-12% 0px -50% 0px" }
    );

    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [setActivePath]);

  return (
    <div className="w-full">
      {/* ─── Hero ─── */}
      <section
        id="home"
        className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="hero-orb hero-orb-3" aria-hidden="true" />

        <motion.div
          className="text-center relative z-10 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-card text-sm theme-text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Available for internships &amp; collaborations
          </motion.div>

          <motion.div variants={item} className="hero-identity">
            <ProfileAvatar size="hero" priority className="shrink-0" />
            <h1 className="hero-name text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Eliyas Siyum
            </h1>
          </motion.div>

          <AnimatedHeroSubtitle />

          <motion.div variants={item} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 w-full max-w-lg mx-auto px-1">
            <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm sm:text-base flex-1 sm:flex-none min-w-[8.5rem] justify-center">
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
            <Link to="/projects" className="btn-secondary text-sm sm:text-base flex-1 sm:flex-none min-w-[8.5rem] justify-center">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary text-sm sm:text-base flex-1 sm:flex-none min-w-[8.5rem] justify-center">
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </motion.div>

          <motion.button
            variants={item}
            onClick={handleEmailClick}
            className="group inline-flex flex-wrap items-center justify-center gap-2 py-2 px-3 sm:px-4 rounded-lg theme-card text-xs sm:text-sm theme-text-muted hover:theme-text transition-colors mb-10 max-w-full"
            aria-label={`Email: ${email}`}
          >
            <VercelLogo />
            <span className="font-mono break-all text-center">{email}</span>
            {copied ? (
              <Check className="w-4 h-4 text-yellow-400" />
            ) : (
              <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </motion.button>

          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 w-full max-w-lg sm:max-w-xl mx-auto"
          >
            {[
              { href: CONTACT_INFO.github, icon: Github, value: displayRepos, label: "GitHub Projects" },
              { href: CONTACT_INFO.linkedin, icon: Linkedin, value: "500+", label: "LinkedIn Network" },
              { href: whatsappLink, icon: MessageCircle, value: "24/7", label: "WhatsApp" },
            ].map((stat) => (
              <motion.a
                key={stat.label}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-card rounded-lg sm:rounded-xl p-2.5 sm:p-4 card-glow flex flex-col items-center gap-1 sm:gap-2 min-w-0"
                whileHover={{ y: -4 }}
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 theme-text-muted shrink-0" />
                <span className="text-sm sm:text-lg font-bold theme-text">{stat.value}</span>
                <span className="text-[10px] sm:text-xs theme-text-subtle text-center leading-tight px-0.5">{stat.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 theme-text-subtle" />
        </motion.div>
      </section>

      {/* ─── Skill marquee ─── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <p className="text-center text-xs uppercase tracking-widest theme-text-subtle pt-6 pb-2">
          Core technologies
        </p>
        <SkillMarquee />
      </section>

      {/* ─── Bento explore ─── */}
      <section className="page-wrap py-16 sm:py-28 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label">Explore</p>
          <h2 className="text-3xl sm:text-4xl font-bold theme-text mb-3">
            Everything in one portfolio
          </h2>
          <p className="theme-text-muted max-w-xl mx-auto">
            Navigate my background, skills, projects, and university credential — built for recruiters, clients, and collaborators.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {BENTO.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                id={card.id}
                className="scroll-mt-28"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={card.to} className="bento-card group block">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${card.accent}`}>
                      {card.label}
                    </span>
                    <div className="p-2 rounded-lg theme-card">
                      <Icon className="w-4 h-4 theme-text-muted group-hover:theme-text transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold theme-text mb-2 group-hover:opacity-90">
                    {card.title}
                  </h3>
                  <p className="theme-text-muted text-sm leading-relaxed flex-grow">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium theme-text-muted group-hover:gap-2 transition-all">
                    Open <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── Skills preview ─── */}
      <section id="skills-preview" className="px-4 pb-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="theme-card rounded-2xl p-8 sm:p-12 text-center"
        >
          <p className="section-label">Skills snapshot</p>
          <h2 className="text-2xl sm:text-3xl font-bold theme-text mb-6">
            {SKILL_CATEGORIES.length} skill categories across the stack
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
            {HIGHLIGHT_SKILLS.map((skill) => (
              <motion.span
                key={skill}
                className="skill-tag"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <Link to="/skills" className="btn-gradient inline-flex items-center gap-2 text-sm">
            View all skill categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section
        id="contact"
        className="scroll-mt-28 px-4 pb-28 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="theme-card rounded-3xl p-10 sm:p-14 card-glow"
        >
          <h2 className="text-2xl sm:text-3xl font-bold theme-text mb-4">
            Let&apos;s build something great
          </h2>
          <p className="theme-text-muted mb-8 max-w-lg mx-auto leading-relaxed">
            Open to internships, freelance work, and collaborations. I respond
            quickly and deliver with professionalism.
          </p>
          <Link to="/contact" className="btn-gradient inline-flex items-center gap-2">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
