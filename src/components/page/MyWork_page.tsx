// src/components/page/MyWorks_page.tsx
import '../Page_css/MyWork_page.css'; 
import { useTranslation } from 'react-i18next';

import image1 from '../../assets/img/introduction_to_data_science.png';
import image2 from '../../assets/img/Data_communication_to_network.png';
import image3 from '../../assets/img/web_app.png';
import image4 from '../../assets/img/Embedded_System.png';
import image5 from '../../assets/img/Artificial_Intelligence_Applications.png';
import image6 from '../../assets/img/Mobile_app.png';
import image7 from '../../assets/img/Database.png';
import image8 from '../../assets/img/Fundamental_of_Electrical_Engineering.png';
import image9 from '../../assets/img/Service_Provider_Network.png';
import image10 from '../../assets/img/Computer_Engineering_Project.png';


function MyWorks_page() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      titleKey: 'my_works_page.project1_title',
      descriptionKey: 'my_works_page.project1_description',
      detailsKey: 'my_works_page.project1_details',
      image: image1,
      link: '#',
      tags: ['RapidMiner', 'Dataset', 'Model', 'Data Science', 'Obesity', 'Eating Habits', 'Physical Condition', 'Data Analysis', 'Predictive Modeling']
    },
    {
      id: 2,
      titleKey: 'my_works_page.project2_title',
      descriptionKey: 'my_works_page.project2_description',
      detailsKey: 'my_works_page.project2_details',
      image: image2,
      link: '#',
      tags: ['Router', 'Subnetting', 'IP Addressing', 'Default Gateways', 'VLAN Configurations', 'Trunks', 'Inter-VLAN Routing', 'Network', 'Data Communications and Networks']
    },
    {
      id: 3,
      titleKey: 'my_works_page.project3_title',
      descriptionKey: 'my_works_page.project3_description',
      detailsKey: 'my_works_page.project3_details',
      image: image3,
      link: '#',
      tags: ['web application', 'Design', 'Node.js', 'SQL', 'API', 'HTML', 'CSS', 'JavaScript', 'Figma', 'XAMPP',]
    },
    {
      id: 4,
      titleKey: 'my_works_page.project4_title',
      descriptionKey: 'my_works_page.project4_description',
      detailsKey: 'my_works_page.project4_details',
      image: image4,
      link: '#',
      tags: ['Embedded System', 'Internet of Things', 'Soil Moisture Monitoring', 'LED Alert', 'Node-RED', 'Dashboard', 'Data Transmission', 'IoT Project']
    },
    {
      id: 5,
      titleKey: 'my_works_page.project5_title',
      descriptionKey: 'my_works_page.project5_description',
      detailsKey: 'my_works_page.project5_details',
      image: image5,
      link: '#',
      tags: ['Artificial Intelligence', 'Object Detection', 'Faster R-CNN', 'Pre-trained Model', 'Localization', 'Detection', 'Testing', 'Image Classification']
    },
    {
      id: 6,
      titleKey: 'my_works_page.project6_title',
      descriptionKey: 'my_works_page.project6_description',
      detailsKey: 'my_works_page.project6_details',
      image: image6,
      link: '#',
      tags: ['web application', 'Design', 'Node.js', 'SQL', 'API', 'HTML', 'CSS', 'JavaScript', 'Figma', 'XAMPP']
    },
    {
      id: 7,
      titleKey: 'my_works_page.project7_title',
      descriptionKey: 'my_works_page.project7_description',
      detailsKey: 'my_works_page.project7_details',
      image: image7,
      link: '#',
      tags: ['database', 'SQL', 'MySQL', 'Database Management', 'Data Integrity', 'Data Retrieval', 'Data Manipulation', 'Database Design']
    },
    {
      id: 8,
      titleKey: 'my_works_page.project8_title',
      descriptionKey: 'my_works_page.project8_description',
      detailsKey: 'my_works_page.project8_details',
      image: image8,
      link: '#',
      tags: ['Analysis', 'Simulation', 'Energy Improvement', 'Power Systems', 'Electrical Engineering', 'Power Factor', 'Reactive Power', 'Energy Efficiency', 'System Stability']
    },
    {
      id: 9,
      titleKey: 'my_works_page.project9_title',
      descriptionKey: 'my_works_page.project9_description',
      detailsKey: 'my_works_page.project9_details',
      image: image9,
      link: '#',
      tags: ['Network Design', 'Configuration', 'OSPF', 'BGP', 'MPLS', 'Service Provider Network', 'GNS3', 'Routing Protocols', 'Inter-AS Communication', 'Data Forwarding Efficiency']
    },
    {
      id: 10,
      titleKey: 'my_works_page.project10_title',
      descriptionKey: 'my_works_page.project10_description',
      detailsKey: 'my_works_page.project10_details',
      image: image10,
      link: '#',
      tags: ['Learning Kit', 'Home Assistant', 'IoT Education', 'Step-by-Step Guide', 'Hands-On Experience', 'Sensors', 'Automation', 'Smart Home Integration', 'Beginner-Friendly', 'Self-Learning']
    },
  ];

  return (
    <div className="my-works-page-container">
      <section className="my-works-hero">
        <h1>{t('my_works_page.main_title')}</h1>
        <h2>{t('my_works_page.description')}</h2>
        <p>{t('my_works_page.description1')}</p>
      </section>

      <section className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={t(project.titleKey)} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{t(project.titleKey)}</h2>
              <p className="project-description">{t(project.descriptionKey)}</p>
              <p className="project-details">{t(project.detailsKey)}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MyWorks_page;