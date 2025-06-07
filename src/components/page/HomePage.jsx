import { motion } from 'framer-motion';
import HeroSection from '../home/HeroSection';
import NewsList from '../../components/news/NewsList';
import LvlupLatestNews from '../../components/news/LvlupLatestNews';
import Trailer from '../../components/layout/Trailer';
import '../../style/HomePage.css';

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};

const HomePage = () => {
  return (
    <motion.div
      className="home"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="hero-wrapper">
        <HeroSection />
      </div>

      {/* ✅ Nouvelle section Actualité LVLUP */}
      <section className="lvlup-latest-news-section">
        <LvlupLatestNews />
      </section>

      {/* 📰 News JV.com + trailer */}
      <section className="news-section">
        <NewsList />
        <Trailer videoId="u5rWBgBjDsc" />
      </section>
    </motion.div>
  );
};

export default HomePage;