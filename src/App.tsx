// src/App.tsx

import { Suspense, useEffect } from 'react'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import './i18n';

import Navbar from './components/layout/Navbar';
import ScrollToTopBtn from './components/layout/ScrollToTopBtn';
import Home from './pages/Home';
import Tools from './components/sections/Tools';
import Contact from './components/sections/Contact';
import Activity_page from './pages/ActivityPage';
import MyWork_page from './pages/MyWorkPage';
import Skills_page from './pages/SkillsPage';
import Certificates_page from './pages/CertificatesPage';
import JigImsCaseStudy from './pages/JigImsCaseStudy';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import NotFound from './pages/NotFound';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Page Titles
    const baseTitle = "Kanjanaroj Khamkhom";
    let pageTitle = "Full-Stack Developer";
    
    if (pathname === '/tools') pageTitle = "Tools";
    else if (pathname === '/mywork_page') pageTitle = "Projects";
    else if (pathname === '/activity_page') pageTitle = "Activities";
    else if (pathname === '/skills') pageTitle = "Skills";
    else if (pathname === '/certificates_page') pageTitle = "Certificates";
    else if (pathname.startsWith('/project/')) pageTitle = "Case Study";
    else if (pathname === '/contact') pageTitle = "Contact";
    else if (pathname !== '/') pageTitle = "404 Not Found";

    document.title = `${pageTitle} | ${baseTitle}`;

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Optional: uncomment below to only animate once
            // observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Suspense fallback={
      <div className="global-loader-container">
        <div className="custom-spinner"></div>
      </div>
    }>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/mywork_page" element={<MyWork_page />} />
          <Route path="/activity_page" element={<Activity_page />} />
          <Route path="/skills" element={<Skills_page />} />
          <Route path="/certificates_page" element={<Certificates_page />} />
          <Route path="/project/jig-ims" element={<JigImsCaseStudy />} />
          <Route path="/project/:id" element={<ProjectCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Contact />
        <ScrollToTopBtn />
      </div>
    </Suspense>
  );
};

export default App;