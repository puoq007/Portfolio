// src/components/Certificates.tsx
import { useTranslation } from 'react-i18next';
import '../Page_css/Certificates_page.css'; 


import certificateImage1 from '../../assets/img/computer_networks.png';
import certificateImage2 from '../../assets/img/AiV2.png';
import certificateImage3 from '../../assets/img/cloudBasics.png';
import certificateImage4 from '../../assets/img/cyber_security.png';
import certificateImage5 from '../../assets/img/BigData.png';
import certificateImage6  from '../../assets/img/information_representaion_and_data_organization.png';
import certificateImage7 from '../../assets/img/CTRL_G.png';
import certificateImage8 from '../../assets/img/Ethical_Hacker.png';
import cestificateImage9 from '../../assets/img/network_cisco.png';
import cestificateImage10 from '../../assets/img/Speexx_EN_B1_1.png';
import cestificateImage11 from '../../assets/img/Speexx_EN_B1_2.png';


const Certificates = () => {
    const { t } = useTranslation();

    // ข้อมูลใบรับรอง
    const certificates = [
        {
            id: 1,
            titleKey: 'certificates_page.cert1_title',
            issuerKey: 'certificates_page.cert1_issuer',
            dateKey: 'certificates_page.cert1_date',
            image: certificateImage1, 
            fullImage: certificateImage1 
        },
        {
            id: 2,
            titleKey: 'certificates_page.cert2_title',
            issuerKey: 'certificates_page.cert2_issuer',
            dateKey: 'certificates_page.cert2_date',
            image: certificateImage2,
            fullImage: certificateImage2
        },
        {
            id: 3,
            titleKey: 'certificates_page.cert3_title',
            issuerKey: 'certificates_page.cert3_issuer',
            dateKey: 'certificates_page.cert3_date',
            image: certificateImage3,
            fullImage: certificateImage3
        },
        {
            id: 4,
            titleKey: 'certificates_page.cert4_title',
            issuerKey: 'certificates_page.cert4_issuer',
            dateKey: 'certificates_page.cert4_date',
            image: certificateImage4,
            fullImage: certificateImage4
        },
        {
            id: 5,
            titleKey: 'certificates_page.cert5_title',
            issuerKey: 'certificates_page.cert5_issuer',
            dateKey: 'certificates_page.cert5_date',
            image: certificateImage5,
            fullImage: certificateImage5
        },
        {
            id: 6,
            titleKey: 'certificates_page.cert6_title',
            issuerKey: 'certificates_page.cert6_issuer',
            dateKey: 'certificates_page.cert6_date',
            image: certificateImage6,
            fullImage: certificateImage6
        },
        {
            id: 7,
            titleKey: 'certificates_page.cert7_title',
            issuerKey: 'certificates_page.cert7_issuer',
            dateKey: 'certificates_page.cert7_date',
            image: certificateImage7,
            fullImage: certificateImage7
        },
        {
            id: 8,
            titleKey: 'certificates_page.cert8_title',
            issuerKey: 'certificates_page.cert8_issuer',
            dateKey: 'certificates_page.cert8_date',
            image: certificateImage8,
            fullImage: certificateImage8
        },
        {
            id: 9,
            titleKey: 'certificates_page.cert9_title',
            issuerKey: 'certificates_page.cert9_issuer',
            dateKey: 'certificates_page.cert9_date',
            image: cestificateImage9,
            fullImage: cestificateImage9
        },
        {
            id: 10,
            titleKey: 'certificates_page.cert10_title',
            issuerKey: 'certificates_page.cert10_issuer',
            dateKey: 'certificates_page.cert10_date',
            image: cestificateImage10,
            fullImage: cestificateImage10
        },
        {
            id: 11,
            titleKey: 'certificates_page.cert11_title',
            issuerKey: 'certificates_page.cert11_issuer',
            dateKey: 'certificates_page.cert11_date',
            image: cestificateImage11,
            fullImage: cestificateImage11
        }

    ];

    return (
        <div className="certificates-container">
            <h1 className="certificates-title">{t('certificates_page.main_title')}</h1>
            <p className="certificates-description">{t('certificates_page.description')}</p>

            <div className="certificates-grid">
                {certificates.map(cert => (
                    <div className="certificate-card" key={cert.id}>
                        {cert.image && (
                            <a
                                href={cert.fullImage} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-image-link-wrapper" 
                            >
                                <img
                                    src={cert.image}
                                    alt={t(cert.titleKey)}
                                    className="certificate-image" 
                                    loading="lazy"
                                />
                            </a>
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
    );
};

export default Certificates;