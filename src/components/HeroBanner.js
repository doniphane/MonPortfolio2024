import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/10.png`;

  const heroBannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  };

  return (
    <div style={heroBannerStyle}>
      <div className="hero-content">
        <h1>Développeur web et web mobile</h1> 
        <p>Développeur web et web mobile débutant, passionné par la création d'applications dynamiques et réactives. Toujours prêt à déboguer, même si mon café est plus fort que mon code !</p>
        <a href={`${process.env.PUBLIC_URL}/cv.pdf`} className="cta-button" download="Trules_Doniphane_CV.pdf">Voir Mon CV</a>
      </div>
    </div>
  );
};

export default HeroBanner;
