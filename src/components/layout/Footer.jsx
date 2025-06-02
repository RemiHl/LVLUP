import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Logo from '../Logo';
import '../../style/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <Logo />
          <p className="footer-about">
            Ta source ultime pour les dernières nouvelles, critiques et guides de jeux vidéo.
            Reste informé en nous suivant sur les réseaux.
          </p>
          <p>Powered by RAWG & JeuxVideo.com</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/rémi-hlynski-88464123a" target="_blank" aria-label="LinkedIn" rel="noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://github.com/RemiHl" target="_blank" aria-label="GitHub" rel="noreferrer">
              <FiGithub />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/resume">Résumés</Link></li>
            <li><Link to="/releases">Sorties à venir</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Ressources</h3>
          <ul>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {currentYear} LVLUP. Tous droits réservés.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;