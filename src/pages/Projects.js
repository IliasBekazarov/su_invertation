import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/images/project1.jpg',
    '/images/project2.jpg',
    '/images/project3.jpg',
    '/images/project4.jpg',
    '/images/project5.jpg',
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="projects">
     <div className="news-header">
        <h1>{t('news.title')}</h1>
      </div>
      <div className="news-image">
        <img src="/images/2floor.png" alt={t('news.imageAlt')} />
      </div>
      <div className="news-content">
      <p>2 этаж</p>
        <p>{t('news.text1')}</p>
        <p>{t('news.text2')}</p>
        <p>{t('news.text3')}</p>
        
      </div>
      <div className="news-header">
        <h1></h1>
      </div>
      <div className="news-image">
        <img src="/images/202room.png" alt={t('news.imageAlt')} />
      </div>
      <div className="news-content">
        <p>202 кабинет – это просторная аудитория, где проводятся практические занятия. Здесь студенты отрабатывают полученные знания, работают над проектами и выполняют задания. Кабинет оснащён компьютерами и необходимым оборудованием для комфортной работы.</p>
        
        
      </div>
      <div className="news-header">
        <h1></h1>
      </div>
      <div className="news-image">
        <img src="/images/207room.png" alt={t('news.imageAlt')} />
      </div>
      <div className="news-content">
        <p>307 кабинет – это аудитория для проведения занятий, семинаров и консультаций. Здесь студенты обсуждают учебные темы, задают вопросы преподавателям и работают над групповыми проектами. Кабинет оборудован для комфортного обучения и совместной работы</p>
        
        
      </div>
    </div>
  );
};

export default Projects;
