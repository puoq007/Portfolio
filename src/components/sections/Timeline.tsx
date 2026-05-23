import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Timeline.css';

const Timeline = () => {
  const { t } = useTranslation();

  const timelineData = [
    {
      id: 1,
      type: 'experience',
      icon: <FaBriefcase />,
      title: t('timeline.exp1_title'),
      subtitle: t('timeline.exp1_subtitle'),
      date: t('timeline.exp1_date'),
      description: t('timeline.exp1_desc')
    },
    {
      id: 2,
      type: 'education',
      icon: <FaGraduationCap />,
      title: t('timeline.edu1_title'),
      subtitle: t('timeline.edu1_subtitle'),
      date: t('timeline.edu1_date'),
      description: t('timeline.edu1_desc')
    }
  ];

  return (
    <section className="timeline-section fade-up">
      <div className="timeline-container">
        <div className="timeline-header">
          <h2 className="section-heading">{t('timeline.title_line1')} <br /> <span className="highlight-text">{t('timeline.title_line2')}</span></h2>
          <p className="section-subtext">{t('timeline.subtitle')}</p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-node">
                {item.icon}
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-item-title">{item.title}</h3>
                <h4 className="timeline-item-subtitle">{item.subtitle}</h4>
                <p className="timeline-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
