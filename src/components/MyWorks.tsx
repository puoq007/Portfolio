// components/MyWorks.tsx
import './css/MyWorks.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MyWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="how-it-works"> 
      <h2>{t('my_works.title')}</h2>
      <h3>{t('my_works.headline')}</h3>
      <p>{t('my_works.paragraph1')}</p>
      <p>{t('my_works.paragraph2')}</p>
     <Link to="./MyWork_page" className="value-prop-button">
  {t('value_prop.learn_more_button')}
</Link>
    </section>
    
  );
};

export default MyWorks;