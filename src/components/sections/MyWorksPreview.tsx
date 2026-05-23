import './MyWorksPreview.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

import image11 from '../../assets/img/JIG_IMS_full.png';
import image10 from '../../assets/img/Computer_Engineering_Project.png';

const MyWorksPreview = () => {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      id: 11,
      title: t('my_works_page.project11_title'),
      description: t('my_works_page.project11_description'),
      image: image11,
      link: '#/project/jig-ims',
      category: 'Featured Project',
    },
    {
      id: 10,
      title: t('my_works_page.project10_title'),
      description: t('my_works_page.project10_description'),
      image: image10,
      link: '#/project/10',
      category: 'Featured Project',
    }
  ];

  return (
    <section className="featured-projects-editorial">
      <div className="editorial-header fade-up">
        <h2 className="section-heading">{t('homepage.featured_title_line1')} <br /> <span className="highlight-text">{t('homepage.featured_title_line2')}</span></h2>
        <p className="section-subtext">{t('homepage.featured_projects_subtitle')}</p>
      </div>

      <div className="projects-container">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className={`project-row ${isEven ? 'row-normal' : 'row-reverse'} fade-up`} key={project.id} style={{ animationDelay: '0.2s' }}>

              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>

              <div className="project-info-card">
                <span className="project-eyebrow">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-desc-box">
                  <p>{project.description}</p>
                </div>
                <div className="project-links">
                  <a href={project.link} className="icon-link" aria-label="View Project">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <div className="view-all-container fade-up" style={{ animationDelay: '0.4s' }}>
        <Link to="/mywork_page" className="view-all-btn">
          {t('homepage.view_all_projects')}
        </Link>
      </div>
    </section>
  );
};

export default MyWorksPreview;