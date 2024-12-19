import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/News.css';

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="news">
      <div className="news-header">
        <h1>{t('news.title')}</h1>
      </div>
      <div className="news-image">
        <img src="/images/303room.png" alt={t('news.imageAlt')} />
      </div>
      <div className="news-content">
        <p>Актовый зал на 3 этаже – это просторное помещение, предназначенное для проведения различных мероприятий. Здесь проходят собрания, конференции, праздничные концерты и студенческие выступления. </p>
        <p>Зал оборудован сценой, звуковой аппаратурой и удобными местами для зрителей, что делает его центральным местом для важных событий в колледже.</p>
    
      </div>
    </div>
    
  );
};

export default News;
