import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    title: "ICT Intern",
    company: "Information Network Security Agency (INSA)",
    location: "Addis Ababa, Ethiopia",
    period: "2024",
    type: "Internship",
    description: [
      "Performed network installation, configuration, and maintenance tasks for internal systems",
      "Collaborated with the IT security team on monitoring and securing network infrastructure",
      "Gained hands-on experience with enterprise networking tools and security protocols",
    ],
  },
  {
    title: "ICT Intern",
    company: "Oromia Seed Enterprise",
    location: "Ethiopia",
    period: "2023",
    type: "Internship",
    description: [
      "Assisted in the design and deployment of internal network systems for the enterprise",
      "Installed and configured network hardware including switches and access points",
      "Documented network topology and provided support for day-to-day IT operations",
    ],
  },
  {
    title: "Backend Developer (Projects & Open Source)",
    company: "Self-Employed",
    location: "Remote",
    period: "2022 – Present",
    type: "Project Experience",
    description: [
      "Built Skill-Swap, an online microlearning platform using Django REST Framework with JWT authentication",
      "Developed a Django-powered Chatbot with persistent memory and Gemini API integration",
      "Implemented a Movie Recommendation System using machine learning and Django REST APIs",
      "Deployed applications on AWS, Heroku, and Render with Nginx and Gunicorn for production environments",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={`${exp.title}-${exp.company}`}>
            <div className="group relative theme-card rounded-xl sm:rounded-2xl overflow-hidden transition-all">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0 mt-1" style={{ background: 'var(--color-accent-soft)' }}>
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="theme-text-muted text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 theme-text-muted mb-4 sm:mb-6 text-sm sm:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium skill-tag">
                    {exp.type}
                  </span>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 theme-text-muted text-sm sm:text-base"
                    >
                      <ArrowRight className="w-5 h-5 mt-0.5 theme-text-subtle flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
