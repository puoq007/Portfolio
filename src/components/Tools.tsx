// components/Tools.tsx
import './css/Tools.css';
import { useTranslation } from 'react-i18next';
import vscodeLogo from '../assets/vscode.svg';

// Font Awesome
import {
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython,
  FaGitAlt, FaDocker, FaDatabase,
  FaGithub, FaLinux, FaAndroid,
} from 'react-icons/fa';

// Simple Icons
import {
  SiFlutter, SiFirebase, SiMongodb, SiGooglecloud,
  SiUbuntu,
  SiDart, SiXcode
} from 'react-icons/si';

function Tools() {
  const { t } = useTranslation();

  const techIcons = [
    // Frontend
    { icon: FaHtml5, key: 'html5', color: '#E34F26' },
    { icon: FaCss3Alt, key: 'css3', color: '#1572B6' },
    { icon: FaJs, key: 'javascript', color: '#F7DF1E' },

    // Backend
    { icon: FaNodeJs, key: 'nodejs', color: '#339933' },
    { icon: FaPython, key: 'python', color: '#3776AB' },

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
    { icon: FaLinux, key: 'linux', color: '#FCC624' },

    // Cloud & Tools
    { icon: SiGooglecloud, key: 'gcp', color: '#4285F4' },
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