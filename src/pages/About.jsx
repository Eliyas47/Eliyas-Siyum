import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Briefcase, GraduationCap, Server } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import ExpandableSection from "@/components/ExpandableSection";
import { profilePhoto as profileImg } from "@/components/ProfileAvatar";
import cvPdf from "@/assets/files/cv_pdf/Eliyas_Siyum_Resume.pdf";

const achievements = [
  { icon: <Server className="w-6 h-6" />, title: "Django & DRF", description: "2+ years · REST APIs" },
  { icon: <Briefcase className="w-6 h-6" />, title: "2 Internships", description: "INSA & Oromia Seed" },
  { icon: <GraduationCap className="w-6 h-6" />, title: "CGPA 3.34", description: "Software Engineering, ASTU" },
  { icon: <Code2 className="w-6 h-6" />, title: "5+ Projects", description: "Full-stack & ML" },
];

const interests = [
  "Backend Engineering",
  "REST APIs",
  "System Design",
  "Cloud & DevOps",
  "Machine Learning",
  "Clean Code",
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-2 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl theme-card">
            <img
              src={profileImg}
              alt="Eliyas Siyum"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <ExpandableSection
            preview="Full Stack Developer and Software Engineering student at ASTU — I build secure, scalable backends with Django and REST APIs."
          >
            <div className="space-y-3 theme-text-muted leading-relaxed">
              <p>
                Final-year at{" "}
                <strong className="theme-text">Adama Science and Technology University</strong>{" "}
                with 2+ years shipping production APIs using{" "}
                <strong className="theme-text">Django</strong>,{" "}
                <strong className="theme-text">DRF</strong>, JWT auth, and PostgreSQL.
              </p>
              <p>
                Two internships (INSA Ethiopia, Oromia Seed Enterprise). Five+ projects
                across chatbots, marketplaces, and ML systems. I deploy on Render, Railway,
                Vercel, and Heroku — and I test with Pytest.
              </p>
              <p>
                Based in Adama. Fluent in English, Amharic, and Afaan Oromo. Motivated,
                punctual, and ready to contribute to real engineering teams.
              </p>
            </div>

            <ul className="flex flex-wrap gap-2 mt-4 text-sm">
              {["Adama, Ethiopia", "Final Year · CGPA 3.34", "Open to internships"].map(
                (fact) => (
                  <li key={fact} className="skill-tag">
                    {fact}
                  </li>
                )
              )}
            </ul>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {achievements.map((a) => (
                <div key={a.title} className="theme-card p-4 rounded-xl">
                  <div className="theme-text mb-2">{a.icon}</div>
                  <h4 className="font-semibold theme-text text-sm">{a.title}</h4>
                  <p className="theme-text-muted text-xs mt-0.5">{a.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold theme-text mb-2">Focus areas</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="skill-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </ExpandableSection>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CV
            </a>
            <Link to="/skills" className="btn-secondary">
              My Skills
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
