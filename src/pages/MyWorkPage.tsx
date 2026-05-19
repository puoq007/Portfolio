import { useState } from 'react';
import './MyWorkPage.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import image1 from '../assets/img/introduction_to_data_science.png';
import image2 from '../assets/img/Data_communication_to_network.png';
import image3 from '../assets/img/web_app.png';
import image4 from '../assets/img/Embedded_System.png';
import image5 from '../assets/img/Artificial_Intelligence_Applications.png';
import image6 from '../assets/img/Mobile_app.png';
import image7 from '../assets/img/Database.png';
import image8 from '../assets/img/Fundamental_of_Electrical_Engineering.png';
import image9 from '../assets/img/Service_Provider_Network.png';
import image10 from '../assets/img/Computer_Engineering_Project.png';
import image11 from '../assets/img/JIG_IMS_full.png';

function MyWorks_page() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      titleKey: 'my_works_page.project1_title',
      descriptionKey: 'my_works_page.project1_description',
      detailsKey: 'my_works_page.project1_details',
      image: image1,
      link: '/project/1',
      category: 'Data Science',
      tags: ['RapidMiner', 'Dataset', 'Model', 'Data Science', 'Obesity', 'Eating Habits', 'Physical Condition'],
    },
    {
      id: 2,
      titleKey: 'my_works_page.project2_title',
      descriptionKey: 'my_works_page.project2_description',
      detailsKey: 'my_works_page.project2_details',
      image: image2,
      link: '/project/2',
      category: 'Networking',
      tags: ['Router', 'Subnetting', 'IP Addressing', 'VLAN', 'Inter-VLAN Routing'],
    },
    {
      id: 3,
      titleKey: 'my_works_page.project3_title',
      descriptionKey: 'my_works_page.project3_description',
      detailsKey: 'my_works_page.project3_details',
      image: image3,
      link: '/project/3',
      category: 'Web Development',
      tags: ['Node.js', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Figma', 'XAMPP'],
    },
    {
      id: 4,
      titleKey: 'my_works_page.project4_title',
      descriptionKey: 'my_works_page.project4_description',
      detailsKey: 'my_works_page.project4_details',
      image: image4,
      link: '/project/4',
      category: 'IoT',
      tags: ['Embedded System', 'IoT', 'Node-RED', 'Dashboard', 'MQTT'],
    },
    {
      id: 5,
      titleKey: 'my_works_page.project5_title',
      descriptionKey: 'my_works_page.project5_description',
      detailsKey: 'my_works_page.project5_details',
      image: image5,
      link: '/project/5',
      category: 'AI / ML',
      tags: ['Faster R-CNN', 'Object Detection', 'Pre-trained Model', 'Python'],
    },
    {
      id: 6,
      titleKey: 'my_works_page.project6_title',
      descriptionKey: 'my_works_page.project6_description',
      detailsKey: 'my_works_page.project6_details',
      image: image6,
      link: '/project/6',
      category: 'Mobile Development',
      tags: ['Flutter', 'Dart', 'Figma', 'XAMPP', 'Mobile App'],
    },
    {
      id: 7,
      titleKey: 'my_works_page.project7_title',
      descriptionKey: 'my_works_page.project7_description',
      detailsKey: 'my_works_page.project7_details',
      image: image7,
      link: '/project/7',
      category: 'Database',
      tags: ['SQL', 'MySQL', 'Database Design', 'PHP', 'XAMPP'],
    },
    {
      id: 8,
      titleKey: 'my_works_page.project8_title',
      descriptionKey: 'my_works_page.project8_description',
      detailsKey: 'my_works_page.project8_details',
      image: image8,
      link: '/project/8',
      category: 'Electrical Engineering',
      tags: ['Power Systems', 'Simulation', 'Energy Efficiency', 'Power Factor'],
    },
    {
      id: 9,
      titleKey: 'my_works_page.project9_title',
      descriptionKey: 'my_works_page.project9_description',
      detailsKey: 'my_works_page.project9_details',
      image: image9,
      link: '/project/9',
      category: 'Networking',
      tags: ['OSPF', 'BGP', 'MPLS', 'GNS3', 'Service Provider'],
    },
    {
      id: 10,
      titleKey: 'my_works_page.project10_title',
      descriptionKey: 'my_works_page.project10_description',
      detailsKey: 'my_works_page.project10_details',
      image: image10,
      link: '/project/10',
      category: 'IoT',
      tags: ['Home Assistant', 'IoT', 'Automation', 'Smart Home', 'Learning Kit'],
    },
    {
      id: 11,
      titleKey: 'my_works_page.project11_title',
      descriptionKey: 'my_works_page.project11_description',
      detailsKey: 'my_works_page.project11_details',
      image: image11,
      link: '/project/11',
      category: 'Full-Stack',
      tags: ['Blazor', '.NET', 'C#', 'SQL Server', 'Docker', 'QR Code', 'REST API'],
      isFeatured: true,
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sort projects from latest to oldest (highest ID first)
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  // Extract unique categories dynamically
  const categories = ['All', ...Array.from(new Set(sortedProjects.map((p) => p.category)))];

  // Filter projects based on selected category & search query
  const filteredProjects = sortedProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const title = t(project.titleKey).toLowerCase();
    const description = t(project.descriptionKey).toLowerCase();
    const details = t(project.detailsKey).toLowerCase();
    const tagsMatch = project.tags.some((tag) => tag.toLowerCase().includes(query));

    const matchesSearch =
      title.includes(query) ||
      description.includes(query) ||
      details.includes(query) ||
      tagsMatch;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="my-works-page-container">
      <section className="my-works-hero">
        <span className="hero-eyebrow fade-up" style={{ animationDelay: '0.1s' }}>Portfolio</span>
        <h1 className="fade-up" style={{ animationDelay: '0.2s' }}>{t('my_works_page.main_title')}</h1>
        <h2 className="fade-up" style={{ animationDelay: '0.3s' }}>{t('my_works_page.description')}</h2>
        <p className="fade-up" style={{ animationDelay: '0.4s' }}>{t('my_works_page.description1')}</p>
        <div className="hero-stats fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="stat-item">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">{t('my_works_page.stat_projects')}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">{t('my_works_page.stat_technologies')}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">{t('my_works_page.stat_years')}</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <div className="portfolio-filters fade-up" style={{ animationDelay: '0.6s' }}>
        <div className="search-box-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder={t('my_works_page.search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              ✕
            </button>
          )}
        </div>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? t('my_works_page.all_categories') : cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="no-results-container fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="no-results-icon">🔎</div>
          <h3>{t('my_works_page.no_results')}</h3>
          <button
            className="reset-filters-btn"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          >
            {t('my_works_page_additions.reset_filters_btn')}
          </button>
        </div>
      ) : (
        <section className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card fade-up ${project.isFeatured ? 'project-card--featured' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {project.isFeatured && (
                <div className="featured-badge">⭐ {t('my_works_page.featured_label')}</div>
              )}
              <div className="project-image-wrapper">
                <img src={project.image} alt={t(project.titleKey)} className="project-image" />
                <div className="project-image-overlay">
                  <Link to={project.link} className="overlay-btn">
                    {t('my_works_page.view_project_button')} →
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <span className="project-id">#{String(project.id).padStart(2, '0')}</span>
                </div>
                <h2 className="project-title">{t(project.titleKey)}</h2>
                <p className="project-description">{t(project.descriptionKey)}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default MyWorks_page;