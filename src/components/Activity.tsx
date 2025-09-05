// components/Activity.tsx
import './css/Activity.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Activity = () => {
  const { t } = useTranslation();

  return (
    <section className="value-prop">
      <h1>{t('value_prop.headline')}</h1>
      <h2>
        {t('value_prop.description')}
      </h2>
      <p>
        {t('value_prop.description2')}
      </p>
      <p>
        {t('value_prop.description3')}
      </p>
      <Link to="./activity_page" className="value-prop-button">
  {t('value_prop.learn_more_button')}
</Link>
    </section>
  );
};

export default Activity;