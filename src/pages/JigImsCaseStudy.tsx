
import './JigImsCaseStudy.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaDatabase, FaServer, FaCode, FaMicrochip, FaTools, FaCheckCircle } from 'react-icons/fa';

const JigImsCaseStudy = () => {
  const { t } = useTranslation();

  return (
    <div className="case-study-container">
      <div className="case-study-hero">
        <div className="eyebrow fade-up" style={{ animationDelay: '0.1s' }}>{t('case_study.case_study_label')}</div>
        <h1 className="fade-up" style={{ animationDelay: '0.2s' }}>{t('jig_ims_case_study.title')}</h1>
        <p className="case-study-intro fade-up" style={{ animationDelay: '0.3s' }}>
          {t('jig_ims_case_study.intro')}
        </p>
      </div>

      <section className="case-study-section fade-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="section-title">{t('case_study.challenge_title')}</h2>
        <div className="section-content">
          <p>
            {t('jig_ims_case_study.challenge_text')}
          </p>
        </div>
      </section>

      <section className="case-study-section fade-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="section-title">{t('case_study.architecture_title')}</h2>
        <div className="architecture-diagram">
          <div className="arch-box">
            <FaCode className="arch-icon" />
            <h3>{t('jig_ims_case_study.frontend')}</h3>
            <p>Blazor WebAssembly (ASP.NET Core)</p>
          </div>
          <div className="arch-arrow">➜</div>
          <div className="arch-box">
            <FaServer className="arch-icon" />
            <h3>{t('jig_ims_case_study.backend_api')}</h3>
            <p>.NET Web API (C#)</p>
          </div>
          <div className="arch-arrow">➜</div>
          <div className="arch-box">
            <FaDatabase className="arch-icon" />
            <h3>{t('jig_ims_case_study.database')}</h3>
            <p>Microsoft SQL Server</p>
          </div>
        </div>
      </section>

      <section className="case-study-section fade-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="section-title">{t('case_study.features_title')}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaMicrochip />
            <h4>{t('jig_ims_case_study.feature1_title')}</h4>
            <p>{t('jig_ims_case_study.feature1_desc')}</p>
          </div>
          <div className="feature-card">
            <FaTools />
            <h4>{t('jig_ims_case_study.feature2_title')}</h4>
            <p>{t('jig_ims_case_study.feature2_desc')}</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle />
            <h4>{t('jig_ims_case_study.feature3_title')}</h4>
            <p>{t('jig_ims_case_study.feature3_desc')}</p>
          </div>
        </div>
      </section>

      <section className="case-study-section fade-up" style={{ animationDelay: '0.7s' }}>
        <h2 className="section-title">{t('case_study.outcome_title')}</h2>
        <div className="section-content">
          <p>
            {t('jig_ims_case_study.outcome_text')}
          </p>
        </div>
      </section>
      
      <div className="case-study-footer fade-up" style={{ animationDelay: '0.8s' }}>
        <Link to="/mywork_page" className="back-btn">{t('case_study.back_to_projects')}</Link>
      </div>
    </div>
  );
};

export default JigImsCaseStudy;
