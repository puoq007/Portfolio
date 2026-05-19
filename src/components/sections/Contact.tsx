import './Contact.css';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <footer className="minimal-footer">
      <div className="footer-content">
        <h2 className="footer-title">{t('contact_page.footer_title')}</h2>
        <p className="footer-description">
          {t('contact_page.footer_description')}
        </p>
        
        <a href="mailto:kanjanaroj.k@gmail.com" className="footer-email">
          kanjanaroj.k@gmail.com
        </a>

        <div className="footer-socials">
          <a href="https://github.com/puoq007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kanjanaroj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:kanjanaroj.k@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;