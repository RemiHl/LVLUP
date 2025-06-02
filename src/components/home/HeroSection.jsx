import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../../style/HeroSection.css';

const heroSlides = [
  {
    title: "Découvrez les dernières news du jeu vidéo",
    subtitle: "Restez informé sur les dernières tendances, sorties et événements du monde du jeu vidéo.",
    backgroundImage: "https://ipfs-api.bakiverse.com/file/display?cid=QmZaQnEVjJxVyfriRcrWHWAr5umiMEwSD2jHuXTaqSFfae",
    link: "/search?platform=all"
  },
  {
    title: "LVLUP Résumés !",
    subtitle: "Recherchez toutes les informations à propos de vos jeux préférés !",
    backgroundImage: "https://ipfs-api.bakiverse.com/file/display?cid=QmfUVpDxQwNgWkpnwmi8CbzqGWZCcwcSTcbDstEYqWRBi4",
    link: "/resume"
  },
  {
    title: "Les sorties à venir",
    subtitle: "Ne manquez aucune sortie de jeu vidéo ! Consultez les dernières annonces et les jeux à venir.",
    backgroundImage: "https://ipfs-api.bakiverse.com/file/display?cid=QmSVkChNi8M3yN7BWkN6jMHSKTREZrg1FKkU1oHvndUqtH",
    link: "/releases"
  }
];

const MotionLink = motion.create(Link);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.6 } }
  };

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroSlides[currentSlide].backgroundImage})` }}
      ></div>

      <div className="hero-content">
        <motion.h1
          key={`title-${currentSlide}`}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="hero-title"
        >
          {heroSlides[currentSlide].title}
        </motion.h1>

        <motion.p
          key={`subtitle-${currentSlide}`}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="hero-subtitle"
        >
          {heroSlides[currentSlide].subtitle}
        </motion.p>

        <MotionLink
          to={heroSlides[currentSlide].link}
          className="hero-btn"
          key={`button-${currentSlide}`}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          En savoir plus <FiArrowRight />
        </MotionLink>
      </div>

      <div className="slide-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;