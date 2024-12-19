import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <video autoPlay loop muted className="hero-video">
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1>{t('home.heading')}</h1>
          
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>{t('home.testimonials.title')}</h2>
        <div className="testimonials">
          <blockquote>
            <p>{t('home.testimonials.testimonial1')}</p>
          </blockquote>
          <blockquote>
            <p>{t('home.testimonials.testimonial2')}</p>
          </blockquote>
          <blockquote>
            <p>{t('home.testimonials.testimonial3')}</p>
          </blockquote>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
