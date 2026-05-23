import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CertificatesPage.css'; 

import certificateImage1 from '../assets/img/computer_networks.png';
import certificateImage2 from '../assets/img/AiV2.png';
import certificateImage3 from '../assets/img/cloudBasics.png';
import certificateImage4 from '../assets/img/cyber_security.png';
import certificateImage5 from '../assets/img/BigData.png';
import certificateImage6  from '../assets/img/information_representaion_and_data_organization.png';
import certificateImage7 from '../assets/img/CTRL_G.png';
import certificateImage8 from '../assets/img/Ethical_Hacker.png';
import cestificateImage9 from '../assets/img/network_cisco.png';
import cestificateImage10 from '../assets/img/Speexx_EN_B1_1.png';
import cestificateImage11 from '../assets/img/Speexx_EN_B1_2.png';

const Certificates = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const certificates = [
        { id: 1, titleKey: 'certificates_page.cert1_title', issuerKey: 'certificates_page.cert1_issuer', dateKey: 'certificates_page.cert1_date', image: certificateImage1, fullImage: certificateImage1 },
        { id: 2, titleKey: 'certificates_page.cert2_title', issuerKey: 'certificates_page.cert2_issuer', dateKey: 'certificates_page.cert2_date', image: certificateImage2, fullImage: certificateImage2 },
        { id: 3, titleKey: 'certificates_page.cert3_title', issuerKey: 'certificates_page.cert3_issuer', dateKey: 'certificates_page.cert3_date', image: certificateImage3, fullImage: certificateImage3 },
        { id: 4, titleKey: 'certificates_page.cert4_title', issuerKey: 'certificates_page.cert4_issuer', dateKey: 'certificates_page.cert4_date', image: certificateImage4, fullImage: certificateImage4 },
        { id: 5, titleKey: 'certificates_page.cert5_title', issuerKey: 'certificates_page.cert5_issuer', dateKey: 'certificates_page.cert5_date', image: certificateImage5, fullImage: certificateImage5 },
        { id: 6, titleKey: 'certificates_page.cert6_title', issuerKey: 'certificates_page.cert6_issuer', dateKey: 'certificates_page.cert6_date', image: certificateImage6, fullImage: certificateImage6 },
        { id: 7, titleKey: 'certificates_page.cert7_title', issuerKey: 'certificates_page.cert7_issuer', dateKey: 'certificates_page.cert7_date', image: certificateImage7, fullImage: certificateImage7 },
        { id: 8, titleKey: 'certificates_page.cert8_title', issuerKey: 'certificates_page.cert8_issuer', dateKey: 'certificates_page.cert8_date', image: certificateImage8, fullImage: certificateImage8 },
        { id: 9, titleKey: 'certificates_page.cert9_title', issuerKey: 'certificates_page.cert9_issuer', dateKey: 'certificates_page.cert9_date', image: cestificateImage9, fullImage: cestificateImage9 },
        { id: 10, titleKey: 'certificates_page.cert10_title', issuerKey: 'certificates_page.cert10_issuer', dateKey: 'certificates_page.cert10_date', image: cestificateImage10, fullImage: cestificateImage10 },
        { id: 11, titleKey: 'certificates_page.cert11_title', issuerKey: 'certificates_page.cert11_issuer', dateKey: 'certificates_page.cert11_date', image: cestificateImage11, fullImage: cestificateImage11 }
    ];

    return (
        <>
            <div className="certificates-container">
                <div className="certificates-header">
                    <div className="eyebrow fade-up" style={{ animationDelay: '0.1s' }}>{t('certificates_page.eyebrow')}</div>
                    <h1 className="certificates-title fade-up" style={{ animationDelay: '0.2s' }}>{t('certificates_page.main_title')}</h1>
                    <p className="certificates-description fade-up" style={{ animationDelay: '0.3s' }}>{t('certificates_page.description')}</p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div className="certificate-card fade-up" key={cert.id} style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
                            {cert.image && (
                                <div
                                    onClick={() => setSelectedImage(cert.fullImage)}
                                    className="certificate-image-link-wrapper"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter') setSelectedImage(cert.fullImage); }}
                                >
                                    <img
                                        src={cert.image}
                                        alt={t(cert.titleKey)}
                                        className="certificate-image" 
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <div className="certificate-info">
                                <h3 className="certificate-card-title">{t(cert.titleKey)}</h3>
                                <p className="certificate-issuer">{t(cert.issuerKey)}</p>
                                <p className="certificate-date">{t(cert.dateKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage} alt="Certificate Full View" className="lightbox-img" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Certificates;