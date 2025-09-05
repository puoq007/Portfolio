// src/components/Contact.tsx
import './css/Contact.css';
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section className="contact-section">
      <h1 className="contact-title">{t('contact_page.title')}</h1>
      <p className="contact-description">{t('contact_page.description')}</p>
      <p className="contact-description">{t('contact_page.description1')}</p>
      <p className="contact-description">{t('contact_page.description2')}</p>

      <div className="contact-info">
        <p><strong>{t('contact_page.email_label')}:</strong><a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new"> kanjanaroj.k@gmail.com</a></p>
        <p><strong>{t('contact_page.phone_label')}:</strong> +66 98 794 5813</p>
        <p><strong>{t('contact_page.linkedin_label')}:</strong> <a href="www.linkedin.com/in/kanjanaroj">Kanjanaroj</a></p>
        <p><strong>{t('contact_page.github_label')}:</strong> <a href="https://github.com/puoq007" target="_blank" rel="noopener noreferrer">Kanjanaroj</a></p>
      </div>

      <form 
        className="contact-form" 
        action="https://formspree.io/f/manbjkdp"
        method="POST" 
      >
      
        <input type="text" name="name" placeholder={t('contact_page.form_name_placeholder')} required />
        <input type="email" name="email" placeholder={t('contact_page.form_email_placeholder')} required />
        <textarea name="message" placeholder={t('contact_page.form_message_placeholder')} rows={5} required></textarea>
        <button type="submit">{t('contact_page.form_submit_button')}</button>
        
      </form>
     
    </section>
  );
};

export default Contact;