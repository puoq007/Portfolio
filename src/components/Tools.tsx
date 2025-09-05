// components/Tools.tsx
import './css/Tools.css';
import { useTranslation } from 'react-i18next';
import vscodeLogo from '../assets/vscode.svg';

// Font Awesome
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaGitAlt, FaDocker, FaDatabase, FaAws, FaPhp, FaJava,
  FaGithub, FaNpm, FaLinux, FaTerminal, FaAndroid, FaBootstrap
} from 'react-icons/fa';

// Simple Icons
import {
  SiFlutter, SiFirebase, SiMongodb, SiGooglecloud,
  SiPostman, SiFigma, SiUbuntu, SiTypescript,
  SiDart, SiXcode
} from 'react-icons/si';

function Tools() {
  const { t } = useTranslation();

  const techIcons = [
    // Frontend
    { icon: FaHtml5, key: 'html5', color: '#E34F26' },
    { icon: FaCss3Alt, key: 'css3', color: '#1572B6' },
    { icon: FaJs, key: 'javascript', color: '#F7DF1E' },
    { icon: SiTypescript, key: 'typescript', color: '#3178C6' },
    { icon: FaReact, key: 'react', color: '#61DAFB' },
    { icon: FaBootstrap, key: 'bootstrap', color: '#7952B3' },

    // Backend
    { icon: FaNodeJs, key: 'nodejs', color: '#339933' },
    { icon: FaPython, key: 'python', color: '#3776AB' },
    { icon: FaPhp, key: 'php', color: '#777BB4' },
    { icon: FaJava, key: 'java', color: '#007396' },

    // Mobile
    { icon: SiFlutter, key: 'flutter', color: '#02569B' },
    { icon: SiDart, key: 'dart', color: '#0175C2' },
    { icon: FaAndroid, key: 'android', color: '#3DDC84' },
    { icon: SiXcode, key: 'xcode', color: '#1575F9' },
    {

      icon: () => (
        <img
          src={vscodeLogo}
          alt="VS Code"
          className="brand-logo-icon"
          style={{ filter: 'grayscale(0%)', opacity: 1 }} 
        />
      ),
      key: 'vscode',
      color: null, 
    },

    // Database
    { icon: SiMongodb, key: 'mongodb', color: '#47A248' },
    { icon: FaDatabase, key: 'sql', color: '#336791' },
    { icon: SiFirebase, key: 'firebase', color: '#FFCA28' },

    // DevOps
    { icon: FaGitAlt, key: 'git', color: '#F05032' },
    { icon: FaGithub, key: 'github', color: '#181717' },
    { icon: FaDocker, key: 'docker', color: '#2496ED' },
    { icon: FaNpm, key: 'npm', color: '#CB3837' },
    { icon: FaLinux, key: 'linux', color: '#FCC624' },
    { icon: FaTerminal, key: 'terminal', color: '#000000' },
    { icon: FaAws, key: 'aws', color: '#FF9900' },

    // Cloud & Tools
    { icon: SiGooglecloud, key: 'gcp', color: '#4285F4' },
    { icon: SiPostman, key: 'postman', color: '#FF6C37' },
    { icon: SiFigma, key: 'figma', color: '#F24E1E' },
    { icon: SiUbuntu, key: 'ubuntu', color: '#E95420' },
  ];

  return (
    <section className="trusted-brands">
      <p>{t('trusted_brands.title')}</p>
      <div className="brand-logos">
        {techIcons.map((tech, i) => (
          <div key={i} className={`brand-logo-item ${tech.key === 'vscode' ? 'vscode-item' : ''}`}> 
            <tech.icon className="brand-logo-icon" style={{ color: tech.color ?? undefined }} />
            <span className="brand-logo-name">{t(`trusted_brands.tech_names.${tech.key}`)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tools;