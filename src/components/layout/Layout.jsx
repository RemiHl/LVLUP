import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../../contexts/AuthContext';
import '../../style/Layout.css';
import ScrollingBanner from './ScrollingBanner';

const Layout = () => {
  const { modalOpen, closeModal } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header isScrolled={isScrolled} />
      <main className="layout-main">
        <ScrollingBanner />
        <Outlet />
      </main>
      {modalOpen && <AuthModal onClose={closeModal} />}
      <Footer />
    </motion.div>
  );
};

export default Layout;
