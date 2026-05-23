// components/skills.tsx
import './SkillsPage.css';
import { useTranslation } from 'react-i18next';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCodeBranch, FaCloud, FaDocker, FaTools, FaLinux, FaNetworkWired, FaMicrochip, FaBrain, FaShieldAlt, FaProjectDiagram, FaInfinity, FaPlug, FaCheckCircle, FaComments, FaUsers, FaLightbulb, FaChartLine, FaSyncAlt, FaTasks, FaUserTie, FaUsersCog, FaHeart, FaRocket, FaFire, FaBalanceScale, FaChess, FaBookReader } from 'react-icons/fa';

const Skills = () => {
  const { t } = useTranslation();

  const softSkills = [
    { key: 'soft_skill1', icon: <FaComments /> },
    { key: 'soft_skill2', icon: <FaUsers /> },
    { key: 'soft_skill3', icon: <FaLightbulb /> },
    { key: 'soft_skill4', icon: <FaChartLine /> },
    { key: 'soft_skill5', icon: <FaSyncAlt /> },
    { key: 'soft_skill6', icon: <FaTasks /> },
    { key: 'soft_skill7', icon: <FaUserTie /> },
    { key: 'soft_skill8', icon: <FaUsersCog /> },
    { key: 'soft_skill9', icon: <FaHeart /> },
    { key: 'soft_skill10', icon: <FaRocket /> },
    { key: 'soft_skill11', icon: <FaFire /> },
    { key: 'soft_skill12', icon: <FaBalanceScale /> },
    { key: 'soft_skill13', icon: <FaChess /> },
    { key: 'soft_skill14', icon: <FaBookReader /> }
  ];

  const hardSkills = [
    { key: 'hard_skill1', icon: <FaCode /> },
    { key: 'hard_skill2', icon: <FaServer /> },
    { key: 'hard_skill3', icon: <FaMobileAlt /> },
    { key: 'hard_skill4', icon: <FaDatabase /> },
    { key: 'hard_skill5', icon: <FaCodeBranch /> },
    { key: 'hard_skill6', icon: <FaCloud /> },
    { key: 'hard_skill7', icon: <FaDocker /> },
    { key: 'hard_skill8', icon: <FaTools /> },
    { key: 'hard_skill9', icon: <FaLinux /> },
    { key: 'hard_skill10', icon: <FaNetworkWired /> },
    { key: 'hard_skill11', icon: <FaMicrochip /> },
    { key: 'hard_skill12', icon: <FaBrain /> },
    { key: 'hard_skill13', icon: <FaShieldAlt /> },
    { key: 'hard_skill14', icon: <FaProjectDiagram /> },
    { key: 'hard_skill15', icon: <FaInfinity /> },
    { key: 'hard_skill16', icon: <FaPlug /> },
    { key: 'hard_skill17', icon: <FaCheckCircle /> }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <div className="eyebrow fade-up" style={{ animationDelay: '0.1s' }}>{t('skills_page.eyebrow')}</div>
        <h1 className="skills-title fade-up" style={{ animationDelay: '0.2s' }}>{t('skills_page.skills_title')}</h1>
        <p className="skills-description fade-up" style={{ animationDelay: '0.3s' }}>{t('skills_page.description')}</p>
        <p className="skills-description fade-up" style={{ animationDelay: '0.4s' }}>{t('skills_page.description1')}</p>
        <p className="skills-description fade-up" style={{ animationDelay: '0.5s' }}>{t('skills_page.description2')}</p>
        <p className="skills-description fade-up" style={{ animationDelay: '0.6s' }}>{t('skills_page.description3')}</p>
      </div>

      <div className="skills-sections">
        {/* Soft Skills */}
        <div className="soft-skills-section fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="section-title">✨ {t('skills_page.soft_skills_title')}</h2>
          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{t(`skills_page.${skill.key}`)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div className="hard-skills-section fade-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="section-title">💻 {t('skills_page.hard_skills_title')}</h2>
          <div className="skills-grid">
            {hardSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{t(`skills_page.${skill.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;