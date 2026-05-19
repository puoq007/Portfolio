import './AboutMe.css';
import { useTranslation } from 'react-i18next';
import avatarImg from '../../assets/img/profile.png';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="AboutMe-section-bg">
      <section className="AboutMe-exact">
        
        {/* Top Block: Avatar & Quote */}
        <div className="hero-top-block fade-up">
          <div className="hero-avatar-wrapper">
            <div className="hello-arrow-text">
              <span>{t('about_me.hello')}<span className="highlight-text">{t('about_me.name')}</span></span>
              <svg width="60" height="60" viewBox="0 0 100 100" className="arrow-svg">
                <path d="M10 10 Q 50 20 80 80" stroke="var(--text-muted)" strokeWidth="2" fill="none" />
                <polygon points="75,70 80,80 85,75" fill="var(--text-muted)" />
              </svg>
            </div>
            
            <div className="avatar-container">
              <img src={avatarImg} alt="Kanjanaroj Profile" className="avatar-img" />
            </div>
          </div>

          <div className="hero-quote-block">
            <p className="quote-eyebrow">{t('about_me.quote_eyebrow')}</p>
            <h2 className="quote-main">
              {t('about_me.quote_main1')} <br />
              {t('about_me.quote_main2')} <span className="quote-highlight">{t('about_me.quote_highlight')}</span>
            </h2>
            <p className="quote-subtext">{t('about_me.quote_subtext')}</p>
          </div>
        </div>

        {/* Bottom Block: Main Typography */}
        <div className="hero-bottom-block fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="main-title">
            {t('about_me.main_title')}
          </h1>
          <p className="main-subtitle">
            {t('about_me.title')}
          </p>
          <p className="main-description">
            {t('about_me.description')}
          </p>
        </div>

      </section>
    </div>
  );
};

export default AboutMe;