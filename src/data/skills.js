import {
  Code2,
  Server,
  Layout,
  Database,
  Cloud,
  Wrench,
  GitBranch,
  Brain,
  Layers,
  Terminal,
  Users,
  FolderKanban,
} from "lucide-react";

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "Java", "C++", "SQL", "C", "PHP"],
  },
  {
    category: "Backend Development",
    icon: Server,
    items: [
      "Django",
      "Django REST Framework (DRF)",
      "REST API Development",
      "Authentication Systems",
      "JWT Authentication",
      "OAuth2 Authentication",
      "Session Handling",
      "API Integration",
      "Scalable Backend Systems",
    ],
  },
  {
    category: "Frontend & UI",
    icon: Layout,
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "UI Integration"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    category: "Deployment & Cloud Platforms",
    icon: Cloud,
    items: ["Render", "Railway", "Vercel", "Netlify", "Cloudflare", "Heroku"],
  },
  {
    category: "Testing & Debugging",
    icon: Wrench,
    items: [
      "Pytest",
      "Unit Testing",
      "Logging",
      "Monitoring",
      "Debugging",
      "Error Handling",
    ],
  },
  {
    category: "Version Control & Development Tools",
    icon: GitBranch,
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "Machine Learning & AI",
    icon: Brain,
    items: [
      "Machine Learning Integration",
      "Recommendation Systems",
      "Chatbot Development",
      "Context-Aware Systems",
    ],
  },
  {
    category: "Software Engineering Concepts",
    icon: Layers,
    items: [
      "RESTful API Design",
      "Backend Architecture",
      "Authentication & Authorization",
      "Clean Code Practices",
      "System Development",
    ],
  },
  {
    category: "Operating Systems",
    icon: Terminal,
    items: ["Linux", "Windows"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Fast Learning",
      "Adaptability",
      "Time Management",
      "Motivation",
      "Punctuality",
    ],
  },
  {
    category: "Project Expertise",
    icon: FolderKanban,
    items: [
      "Movie Recommendation Systems",
      "Django Chatbots",
      "Web-Based Games",
      "Calculator Applications",
      "Backend API Systems",
    ],
  },
];

/** Flat list for marquee / highlights on home */
export const HIGHLIGHT_SKILLS = [
  "Python",
  "Django",
  "DRF",
  "REST API",
  "PostgreSQL",
  "JavaScript",
  "Tailwind CSS",
  "JWT",
  "Machine Learning",
  "Git",
  "Docker",
  "React",
];
