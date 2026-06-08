import './Tools.css';
import { useTranslation } from 'react-i18next';
import React from 'react';

// Font Awesome
import {
  FaJs, FaNodeJs, FaPython,
  FaDocker, FaGithub, FaReact,
  FaFigma, FaGitAlt, FaHtml5, FaCss3Alt,
  FaDatabase
} from 'react-icons/fa';

// Simple Icons
import { 
  SiFlutter, SiMongodb, SiGooglecloud, 
  SiTypescript, SiPhp, SiDart, SiCplusplus,
  SiSharp, SiDotnet
} from 'react-icons/si';

function Tools() {
  const { t } = useTranslation();
  
  const techIcons = [
    { icon: FaReact, name: 'React', size: 'large', color: '#61DAFB' },
    { icon: SiFlutter, name: 'Flutter', size: 'large', color: '#02569B' },
    
    { icon: FaNodeJs, name: 'Node.js', size: 'medium', color: '#339933' },
    { icon: SiTypescript, name: 'TypeScript', size: 'medium', color: '#3178C6' },
    
    { icon: FaPython, name: 'Python', size: 'medium', color: '#3776AB' },
    { icon: SiGooglecloud, name: 'GCP', size: 'medium', color: '#4285F4' },

    { icon: SiSharp, name: 'C#', size: 'medium', color: '#239120' },
    { icon: SiDotnet, name: '.NET', size: 'medium', color: '#512BD4' },
    
    { icon: FaGithub, name: 'GitHub', size: 'small', color: '#1a1a2e' },
    { icon: FaDocker, name: 'Docker', size: 'small', color: '#2496ED' },
    { icon: FaDatabase, name: 'SQL Server', size: 'small', color: '#CC2927' },
    { icon: SiMongodb, name: 'MongoDB', size: 'small', color: '#47A248' },
    { icon: FaJs, name: 'JavaScript', size: 'small', color: '#F7DF1E' },
    { icon: SiDart, name: 'Dart', size: 'small', color: '#0175C2' },
    { icon: FaFigma, name: 'Figma', size: 'small', color: '#F24E1E' },
    { icon: FaGitAlt, name: 'Git', size: 'small', color: '#F05032' },
    { icon: SiPhp, name: 'PHP', size: 'small', color: '#777BB4' },
    { icon: SiCplusplus, name: 'C/C++', size: 'small', color: '#00599C' },
    { icon: FaHtml5, name: 'HTML5', size: 'small', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', size: 'small', color: '#1572B6' },
  ];

  return (
    <section className="tools-bento-section">
      <div className="tools-container">
        
        {/* Left Column: Typography */}
        <div className="tools-typography fade-up">
          <h2 className="section-heading">{t('tools_section.title')}</h2>
          <p className="tools-desc">
            {t('tools_section.desc_part1')}<span className="highlight-text">{t('tools_section.desc_highlight')}</span>{t('tools_section.desc_part2')}
          </p>
          <p className="tools-subdesc">
            {t('tools_section.subdesc')}
          </p>
        </div>

        {/* Right Column: Bento Grid */}
        <div className="tools-bento-grid">
          {techIcons.map((Tech, index) => (
            <div 
              className={`bento-item size-${Tech.size} fade-up`} 
              key={index} 
              style={{ 
                animationDelay: `${0.04 * index}s`,
                '--tech-color': Tech.color,
                '--tech-color-glow': `${Tech.color}33`
              } as React.CSSProperties}
            >
              <div className="bento-icon-wrapper">
                <Tech.icon style={{ color: Tech.color }} />
              </div>
              <span className="bento-name">{Tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tools;