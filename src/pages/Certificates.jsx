import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import ExpandableSection from "@/components/ExpandableSection";
import UniversityImage from "@/components/UniversityImage";
import astuImg from "@/assets/education/astu.jpg";
import resumePdf from "@/assets/files/cv_pdf/Eliyas_Siyum_Resume.pdf";

const certificate = {
  title: "Bachelor of Science in Software Engineering",
  institution: "Adama Science and Technology University (ASTU)",
  location: "Adama, Oromia, Ethiopia",
  period: "2022 — Present",
  grade: "CGPA: 3.34 / 4.0",
  preview:
    "Final-year Software Engineering student at ASTU — my university degree is my primary academic credential.",
  description:
    "Coursework spans software development, data structures, databases, operating systems, networking, AI, and machine learning — preparing me for professional backend and full-stack engineering roles.",
  highlights: [
    "Software Development",
    "DSA",
    "Database Systems",
    "Operating Systems",
    "Networks",
    "AI & ML",
  ],
};

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Award className="w-8 h-8 theme-text" />
          <h2 className="text-4xl font-bold gradient-text">Academic Certificate</h2>
        </motion.div>
      </ScrollAnimation>

      <ScrollAnimation>
        <motion.article
          className="theme-card rounded-2xl overflow-hidden card-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <UniversityImage src={astuImg} alt={certificate.institution} />

          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-4">
              <div
                className="p-3 rounded-xl shrink-0"
                style={{ background: "var(--color-accent-soft)" }}
              >
                <GraduationCap
                  className="w-7 h-7"
                  style={{ color: "var(--color-accent)" }}
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold theme-text">
                  {certificate.title}
                </h3>
                <p className="theme-text-muted font-medium mt-1">
                  {certificate.institution}
                </p>
              </div>
            </div>

            <ExpandableSection preview={certificate.preview}>
              <div className="flex flex-wrap gap-3 text-sm theme-text-muted mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 shrink-0" />
                  {certificate.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 shrink-0" />
                  {certificate.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  {certificate.grade}
                </span>
              </div>

              <p className="theme-text-muted leading-relaxed mb-4">
                {certificate.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {certificate.highlights.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--color-border)]">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  View Academic Record (CV)
                </a>
                <Link to="/education" className="btn-secondary text-sm">
                  Full Education Details
                </Link>
              </div>
            </ExpandableSection>
          </div>
        </motion.article>
      </ScrollAnimation>
    </div>
  );
};

export default Certificates;
