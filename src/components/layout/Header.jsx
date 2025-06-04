import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { useSearch } from '../../contexts/SearchContext';
import { motion, AnimatePresence } from 'framer-motion';
import '../../style/Header.css';
import Logo from '../Logo';

const Header = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?term=${encodeURIComponent(searchTerm.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="logo">
          <Logo />
        </Link>

        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/resume">Résumés</Link>
          <Link to="/lvlup-news">LVLUP News</Link>
          <Link to="/releases">Sorties à venir</Link>
        </div>

        <div className="right-section">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <FiSearch />
            </button>
          </form>

          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="menu-btn">
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-links">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
              <Link to="/resume" onClick={() => setMobileMenuOpen(false)}>Résumés</Link>
              <Link to="/lvlup-news" onClick={() => setMobileMenuOpen(false)}>LVLUP News</Link>
              <Link to="/releases" onClick={() => setMobileMenuOpen(false)}>Sorties à venir</Link>
            </div>

            <form className="mobile-search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;