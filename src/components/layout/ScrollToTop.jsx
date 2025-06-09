import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll en haut de la page à chaque changement de route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne rend rien
};

export default ScrollToTop;