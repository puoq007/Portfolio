// src/components/page/Activity_page.tsx
import './ActivityPage.css';
import { useTranslation } from 'react-i18next';

const Activity_page = () => {
  const { t } = useTranslation();

  return (
    <div className="activity-page-container">
      <section className="activity-hero-section">
        <div className="eyebrow fade-up" style={{ animationDelay: '0.1s' }}>{t('activity_page.eyebrow')}</div>
        <h1 className="fade-up" style={{ animationDelay: '0.2s' }}>{t('activity_page.main_title')}</h1>
        <h2 className="fade-up" style={{ animationDelay: '0.3s' }}>{t('value_prop.description')}</h2>
        <p className="fade-up" style={{ animationDelay: '0.4s' }}>{t('value_prop.description2')}</p>
        <p className="fade-up" style={{ animationDelay: '0.5s' }}>{t('value_prop.description3')}</p>
      </section>

      <div className="activity-content-grid">
        <section className="activity-section fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="activity-section-title">{t('activity_page.section1_title')}</h2>
          <p>{t('activity_page.section1_description')}</p>
          <ul>
            <li>{t('activity_page.section1_point1')}</li>
            <li>{t('activity_page.section1_point2')}</li>
          </ul>
        </section>

        <section className="activity-section fade-up" style={{ animationDelay: '0.25s' }}>
          <h2 className="activity-section-title">{t('activity_page.section2_title')}</h2>
          <p>{t('activity_page.section2_description')}</p>
        </section>

        <section className="activity-section fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="activity-section-title">{t('activity_page.section3_title')}</h2>
          <p>{t('activity_page.section3_description')}</p>
        </section>

        <section className="activity-section fade-up" style={{ animationDelay: '0.35s' }}>
          <h2 className="activity-section-title">{t('activity_page.section4_title')}</h2>
          <p>{t('activity_page.section4_description')}</p>
        </section>

        <section className="activity-section fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="activity-section-title">{t('activity_page.section5_title')}</h2>
          <p>{t('activity_page.section5_description')}</p>
        </section>

        <section className="activity-section fade-up" style={{ animationDelay: '0.45s' }}>
          <h2 className="activity-section-title">{t('activity_page.section6_title')}</h2>
          <p>{t('activity_page.section6_description')}</p>
        </section>

        <section className="activity-section fade-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="activity-section-title">{t('activity_page.section7_title')}</h2>
          <p>{t('activity_page.section7_description')}</p>
        </section>
      </div>
    </div>
  );
};

export default Activity_page;