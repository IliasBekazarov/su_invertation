import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="news-header">
        <h1>{t('news.title')}</h1>
      </div>
      <div className="news-image">
        <img src="/images/4floor.png" alt={t('news.imageAlt')} />
      </div>
      <div className="news-content">
        <p>{t('news.text1')}</p>
        <p>{t('news.text2')}</p>
        <p>{t('news.text3')}</p>
        <p>{t('news.text4')}</p>
        <p>{t('news.text5')}</p>
        <p>{t('news.text6')}</p>
        <p>{t('news.text7')}</p>
      </div>
      <div className="news-header">
        
      </div>
      <div className="news-image">
        <img src="/images/401room.png" alt={t('news.imageAlt')} />
      </div>
      <div className="news-content">
        <p>401 кабинет находится на четвёртом этаже и служит местом для проведения теоретических и практических занятий. </p>
        <p>Просторное и светлое помещение оборудовано всем необходимым для учебного процесса, включая рабочие места для студентов и современные средства обучения.</p>
        
      </div>
    </div>
  );
};

export default Contact;
