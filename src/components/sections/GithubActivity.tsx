
import './GithubActivity.css';
import { useTranslation } from 'react-i18next';

const GithubActivity = () => {
  const { t } = useTranslation();
  const username = 'puoq007';
  const githubUrl = `https://github.com/${username}`;

  const stats = [
    { label: t('github_activity.repositories'), value: '20+', icon: '📁' },
    { label: t('github_activity.languages'), value: '10+', icon: '💻' },
    { label: t('github_activity.projects'), value: '11', icon: '🚀' },
  ];

  return (
    <section className="github-activity-section">
      <div className="eyebrow">{t('github_activity.eyebrow', 'Open Source')}</div>
      <h2 className="github-title">{t('github_activity.title', 'GitHub Contributions')}</h2>

      <div className="github-cta-card">
        <div className="github-cta-left">
          <div className="github-avatar-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div className="github-cta-text">
            <h3>@{username}</h3>
            <p>{t('github_activity.description')}</p>
          </div>
        </div>

        <div className="github-cta-stats">
          {stats.map((s) => (
            <div key={s.label} className="github-stat-pill">
              <span className="github-stat-icon">{s.icon}</span>
              <span className="github-stat-value">{s.value}</span>
              <span className="github-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="github-cta-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          {t('github_activity.view_profile')}
        </a>
      </div>
    </section>
  );
};

export default GithubActivity;
