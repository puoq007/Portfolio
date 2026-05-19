// src/components/Navbar.tsx
import { useState } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="navbar-wrapper">
      <header className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          &lt;PORTFOLIO /&gt;
        </Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        {/* Links */}
        <nav className={`navbar-links ${isOpen ? 'nav-open' : ''}`}>
          {/* Language toggle */}
          <div className="language-switcher">
            <div className={`lang-switch ${i18n.language}`} onClick={toggleLanguage} aria-label="Switch language">
              <div className="lang-slider" />
              <span className="lang-label">EN</span>
              <span className="lang-label">TH</span>
            </div>
          </div>

          <Link
            to="/activity_page"
            className={isActive('/activity_page') ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.activity')}
          </Link>
          <Link
            to="/mywork_page"
            className={isActive('/mywork_page') ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.works')}
          </Link>
          <Link
            to="/skills"
            className={isActive('/skills') ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.skills')}
          </Link>
          <Link
            to="/certificates_page"
            className={isActive('/certificates_page') ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.certificates')}
          </Link>
          <Link
            to="/contact"
            className={`contact${isActive('/contact') ? ' active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.contact')}
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;