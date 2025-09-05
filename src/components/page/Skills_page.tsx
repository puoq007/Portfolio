// components/skills.tsx
import '../Page_css/Skills_page.css';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className="skills-container">
            <h1 className="skills-title">{t('skills_page.skills_title')}</h1>
            <p className="skills-description">{t('skills_page.description')}</p>
            <p className="skills-description">{t('skills_page.description1')}</p>
            <p className="skills-description">{t('skills_page.description2')}</p>
            <p className="skills-description">{t('skills_page.description3')}</p>


            <div className="skills-sections">
                <div className="soft-skills-section">
                    <h2 className="section-title">{t('skills_page.soft_skills_title')}</h2>
                    <ul className="skills-list">
                        <li>{t('skills_page.soft_skill1')}</li>
                        <li>{t('skills_page.soft_skill2')}</li>
                        <li>{t('skills_page.soft_skill3')}</li>
                        <li>{t('skills_page.soft_skill4')}</li>
                        <li>{t('skills_page.soft_skill5')}</li>
                        <li>{t('skills_page.soft_skill6')}</li>
                        <li>{t('skills_page.soft_skill7')}</li>
                        <li>{t('skills_page.soft_skill8')}</li>
                        <li>{t('skills_page.soft_skill9')}</li>
                        <li>{t('skills_page.soft_skill10')}</li>
                        <li>{t('skills_page.soft_skill11')}</li>
                        <li>{t('skills_page.soft_skill12')}</li>
                        <li>{t('skills_page.soft_skill13')}</li>
                        <li>{t('skills_page.soft_skill14')}</li>
                    </ul>
                </div>

                <div className="hard-skills-section">
                    <h2 className="section-title">{t('skills_page.hard_skills_title')}</h2>
                    <ul className="skills-list">
                        <li>{t('skills_page.hard_skill1')}</li>
                        <li>{t('skills_page.hard_skill2')}</li>
                        <li>{t('skills_page.hard_skill3')}</li>
                        <li>{t('skills_page.hard_skill4')}</li>
                        <li>{t('skills_page.hard_skill5')}</li>
                        <li>{t('skills_page.hard_skill6')}</li>
                        <li>{t('skills_page.hard_skill7')}</li>
                        <li>{t('skills_page.hard_skill8')}</li>
                        <li>{t('skills_page.hard_skill9')}</li>
                        <li>{t('skills_page.hard_skill10')}</li>
                        <li>{t('skills_page.hard_skill11')}</li>
                        <li>{t('skills_page.hard_skill12')}</li>
                        <li>{t('skills_page.hard_skill13')}</li>
                        <li>{t('skills_page.hard_skill14')}</li>
                        <li>{t('skills_page.hard_skill15')}</li>
                        <li>{t('skills_page.hard_skill16')}</li>
                        <li>{t('skills_page.hard_skill17')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;