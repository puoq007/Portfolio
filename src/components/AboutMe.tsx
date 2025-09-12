// components/AboutMe.tsx
import './css/AboutMe.css';
// import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

import profileImage from '../assets/img/profile.jpg';
import cvPdf from '../assets/Documents/CV_Kanjanaroj.pdf';
// import resumePdf from '../assets/Documents/RESUME_Kanjanaroj.pdf';


const AboutMe = () => {
    const { t } = useTranslation(); 

    return (
        <section className="AboutMe"> 
            <div className="AboutMe-content">
                <h1>{t('about_me.title')}</h1>
                <p>
                    {t('about_me.description')}
                </p>

                <div className="buttons">
                    <a
                        href={cvPdf} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                    >
                        {t('about_me.download_cv_button')}
                    </a>

                    {/* <a
                        href={resumePdf} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                    >
                        {t('about_me.download_resume_button')}
                    </a>
                    <Link to="/contact" className="contact-btn">
                        {t('about_me.contact_button')}
                    </Link> */}
                </div>
            </div>
            <div className="AboutMe-image">
                 <img src={profileImage} alt={t('about_me.profile_alt_text')} />
            </div>
        </section>
    );
};

export default AboutMe;