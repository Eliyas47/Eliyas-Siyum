import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { ThemeProvider } from "./context/ThemeContext";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
} from "./config/site";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const pageMeta = {
  "/": {
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  "/about": {
    title: `About - ${SITE_NAME} | Backend Developer`,
    description:
      "Learn about Eliyas Siyum — BSc Software Engineering student at ASTU with Django, REST API, and internship experience.",
  },
  "/projects": {
    title: `Projects - ${SITE_NAME} | Django & Full Stack Portfolio`,
    description:
      "Explore projects by Eliyas Siyum including Django Gemini Chatbot, Course Marketplace, Skill-Swap, and ML recommendation systems.",
  },
  "/skills": {
    title: `Skills - ${SITE_NAME} | Django, Python, REST API`,
    description:
      "Technical skills — Django, Django REST Framework, Python, PostgreSQL, AWS, Nginx, Gunicorn, React, and CI/CD.",
  },
  "/experience": {
    title: `Experience - ${SITE_NAME} | Internships & Projects`,
    description:
      "Professional experience including ICT internships at INSA Ethiopia and Oromia Seed Enterprise, plus backend development projects.",
  },
  "/education": {
    title: `Education - ${SITE_NAME} | BSc Software Engineering`,
    description:
      "Educational background — BSc Software Engineering at Adama Science and Technology University, CGPA 3.34.",
  },
  "/certificates": {
    title: `Certificate - ${SITE_NAME} | BSc Software Engineering`,
    description:
      "University certificate — BSc Software Engineering at Adama Science and Technology University (ASTU), Ethiopia.",
  },
  "/contact": {
    title: `Contact - ${SITE_NAME} | Get in Touch`,
    description:
      "Get in touch with Eliyas Siyum for collaborations and opportunities. Based in Adama, Ethiopia.",
  },
};

function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: `${SITE_NAME} - Backend Developer`,
      description: SITE_DESCRIPTION,
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute("content", `${SITE_URL}${location.pathname}`);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute("href", `${SITE_URL}${location.pathname}`);
  }, [location]);

  return null;
}

function ActiveSectionSync() {
  const location = useLocation();
  const { setActivePath } = useNavigation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname, setActivePath]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
      <NavigationProvider>
        <SEOUpdater />
        <ActiveSectionSync />
        <div className="app-shell theme-text">
          <Background3D />
          <Navbar />
          <main className="app-main">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </NavigationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
