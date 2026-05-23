import './ActivityPreview.css';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaFlagCheckered, FaTree, FaUsers } from 'react-icons/fa';

const ActivityPreview = () => {
  const { t } = useTranslation();

  const activities = [
    {
      id: 1,
      title: t('activity_page.section1_title'),
      description: t('activity_page.section1_description'),
      icon: <FaGraduationCap />,
      link: '/activity_page'
    },
    {
      id: 2,
      title: t('activity_page.section2_title'),
      description: t('activity_page.section2_description'),
      icon: <FaFlagCheckered />,
      link: '/activity_page'
    },
    {
      id: 3,
      title: t('activity_page.section3_title'),
      description: t('activity_page.section3_description'),
      icon: <FaTree />,
      link: '/activity_page'
    },
    {
      id: 4,
      title: t('activity_page.section4_title'),
      description: t('activity_page.section4_description'),
      icon: <FaUsers />,
      link: '/activity_page'
    }
  ];

  return (
    <section className="activity-preview-exact">
      <div className="activity-exact-container">
        
        <h2 className="exact-section-heading fade-up">{t('homepage.activities_title')}</h2>

        <div className="exact-activity-grid">
          {activities.map((activity, index) => (
            <div className="exact-activity-card fade-up" key={activity.id} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="exact-icon-side">
                <div className="exact-icon-wrapper">
                  {activity.icon}
                </div>
              </div>
              <div className="exact-content-side">
                <h3 className="exact-card-title">{activity.title}</h3>
                <p className="exact-card-desc">{activity.description}</p>
                <a href={`#${activity.link}`} className="exact-card-btn">
                  {t('homepage.activities_learn_more')}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ActivityPreview;