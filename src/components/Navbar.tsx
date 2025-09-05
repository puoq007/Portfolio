import { useState } from 'react';
import './css/Navbar.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

  const toggleLanguage = () => {
    changeLanguage(i18n.language === 'en' ? 'th' : 'en');
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo">
          MyPortfolio
        </Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`navbar-links ${isOpen ? 'nav-open' : ''}`}>
        <div className="language-switcher">
          <div className={`lang-switch ${i18n.language}`} onClick={toggleLanguage}>
            <div className="lang-slider"></div>
            <span className="lang-label">EN</span>
            <span className="lang-label">TH</span>
          </div>
        </div>

        <Link to="/activity_page" onClick={() => setIsOpen(false)}>
          {t('navbar.activity')}
        </Link>
        <Link to="/mywork_page" onClick={() => setIsOpen(false)}>
          {t('navbar.works')}
        </Link>
        <Link to="/skills" onClick={() => setIsOpen(false)}>
          {t('navbar.skills')}
        </Link>
        <Link to="/certificates_page" onClick={() => setIsOpen(false)}>
          {t('navbar.certificates')}
        </Link>
        <Link to="/contact" className="contact" onClick={() => setIsOpen(false)}>
          {t('navbar.contact')}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;