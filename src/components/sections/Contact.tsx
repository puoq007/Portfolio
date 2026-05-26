import './Contact.css';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="minimal-footer">
      <div className="footer-container">
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

        <div className="footer-code-card">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="code-title">developer.json</span>
          </div>
          <pre className="code-body">
            <code>
<span className="syntax-bracket">{"{"}</span>
{"\n  "}<span className="syntax-key">"name"</span><span className="syntax-colon">: </span><span className="syntax-string">"Kanjanaroj Khamkhom"</span><span className="syntax-comma">,</span>
{"\n  "}<span className="syntax-key">"role"</span><span className="syntax-colon">: </span><span className="syntax-string">"Software Engineer"</span><span className="syntax-comma">,</span>
{"\n  "}<span className="syntax-key">"skills"</span><span className="syntax-colon">: </span><span className="syntax-bracket">{"["}</span>
{"\n    "}<span className="syntax-string">"Frontend"</span><span className="syntax-comma">,</span>
{"\n    "}<span className="syntax-string">"Backend"</span><span className="syntax-comma">,</span>
{"\n    "}<span className="syntax-string">"IoT Systems"</span>
{"\n  "}<span className="syntax-bracket">{"]"}</span><span className="syntax-comma">,</span>
{"\n  "}<span className="syntax-key">"location"</span><span className="syntax-colon">: </span><span className="syntax-string">"Bangkok, Thailand"</span><span className="syntax-comma">,</span>
{"\n  "}<span className="syntax-key">"status"</span><span className="syntax-colon">: </span><span className="syntax-string">"Open to Opportunities"</span>
{"\n"}<span className="syntax-bracket">{"}"}</span>
            </code>
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Contact;