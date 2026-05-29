import { Github, ExternalLink, Film, Sprout } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import djangoGeminiImg from "@/assets/projects_img/Django gemini screenshoot.jpg";
import courseMarketplaceImg from "@/assets/projects_img/coursemarkateplace1.png";
import skillSwapImg from "@/assets/projects_img/skill-swap.png";

const projects = [
  {
    title: "Django Gemini Chatbot",
    description:
      "A context-aware AI chatbot built with Django, featuring user authentication, persistent conversation memory, and deep integration with the Google Gemini API.",
    image: djangoGeminiImg,
    github: "https://github.com/Eliyas47",
    live: "",
    tags: ["Django", "Python", "Gemini API", "JWT Auth", "REST API"],
  },
  {
    title: "Course Marketplace",
    description:
      "A full-featured course marketplace platform enabling buying, selling, and managing educational content — backed by Django REST Framework with a clean, intuitive UI.",
    image: courseMarketplaceImg,
    github: "https://github.com/Eliyas47",
    live: "",
    tags: ["Django", "DRF", "PostgreSQL", "Python", "REST API"],
  },
  {
    title: "Skill-Swap",
    description:
      "An online microlearning platform for sharing practical skills and peer-to-peer knowledge exchange, built with Django REST Framework and JWT authentication.",
    image: skillSwapImg,
    github: "https://github.com/Eliyas47",
    live: "",
    tags: ["Django", "REST API", "PostgreSQL", "Python", "Microlearning"],
  },
  {
    title: "Movie Recommendation System",
    description:
      "A machine learning-powered movie recommendation engine served via Django REST APIs — uses collaborative filtering and content-based techniques for personalized results.",
    placeholder: {
      gradient: "from-yellow-900 via-amber-900 to-orange-950",
      icon: Film,
      label: "ML · Django REST API",
    },
    github: "https://github.com/Eliyas47",
    live: "",
    tags: ["Machine Learning", "Django", "REST API", "Python", "Recommendation"],
  },
  {
    title: "Agri Support System",
    description:
      "A service-oriented support platform for agricultural users with issue tracking, guidance workflows, and a robust Django backend ensuring reliable data management.",
    placeholder: {
      gradient: "from-yellow-900 via-amber-900 to-orange-950",
      icon: Sprout,
      label: "Django · Agriculture",
    },
    github: "https://github.com/Eliyas47",
    live: "",
    tags: ["Django", "Python", "Backend", "Agriculture", "Support System"],
  },
];

function ProjectCover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    );
  }

  const Icon = project.placeholder.icon;

  return (
    <div
      className={`w-full h-52 bg-gradient-to-br ${project.placeholder.gradient} flex flex-col items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-500`}
    >
      <Icon className="w-12 h-12 text-white/80" aria-hidden="true" />
      <span className="text-sm font-medium text-white/60 tracking-wide uppercase">
        {project.placeholder.label}
      </span>
    </div>
  );
}

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="theme-text-muted mb-12 max-w-2xl">
          Full-stack and ML projects demonstrating backend engineering with
          Django, REST APIs, and production-ready system design.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="group relative theme-card rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col card-glow">
              <div className="relative overflow-hidden">
                <ProjectCover project={project} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="theme-text-muted mb-4 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-2 border-t border-[var(--color-border)]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 theme-text-muted hover:theme-text transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
