// src/App.tsx

import { Suspense, useEffect } from 'react'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import './i18n';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Activity_page from './components/page/Activity_page';
import MyWork_page from './components/page/MyWork_page';
import Skills_page from './components/page/Skills_page';
import Certificates_page from './components/page/Certificates_page';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div style={{ padding: '50px', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;