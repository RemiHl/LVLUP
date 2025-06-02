import '../../style/AboutPage.css';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.gif';
import about3 from '../../assets/about3.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">

        {/* À propos */}
        <div className="about-section">
          <img src={about1} alt="À propos de LVLUP" className="about-image" />
          <div className="about-text">
            <h1 className="about-title">🎮 À propos de LVLUP</h1>
            <p>
              Bienvenue sur <strong>LVLUP</strong>, ta plateforme dédiée à l’actualité et à la découverte du jeu vidéo. <br/>
              Notre mission ? T’offrir une <strong>expérience claire, moderne et personnalisée</strong> pour ne rien rater des sorties à venir, des résumés de jeux et des dernières tendances du monde vidéoludique.
            </p>
          </div>
        </div>

        {/* Pourquoi */}
        <div className="about-section">
          <img src={about2} alt="Pourquoi LVLUP" className="about-image" />
          <div className="about-text">
            <h2 className="about-subtitle">💡 Pourquoi choisir LVLUP ?</h2>
            <ul className="about-list">
              <li><strong>Centralise l’info</strong> : Accède à des contenus fiables grâce aux flux de Jeuxvideo.com et de RAWG.</li>
              <li><strong>Ergonomique et responsive</strong> : Navigation fluide sur tous tes appareils.</li>
              <li><strong>En un clin d’œil</strong> : Résumés clairs, filtres pratiques… Tu trouves l’essentiel sans te perdre.</li>
              <li><strong>En évolution constante</strong> : Des nouvelles fonctionnalités sont ajoutées régulièrement.</li>
              <li><strong>Indépendant et passionné</strong> : Un projet mené par un développeur seul passionné.</li>
            </ul>
          </div>
        </div>

        {/* Demain */}
        <div className="about-section">
          <img src={about3} alt="Futur de LVLUP" className="about-image" />
          <div className="about-text">
            <h2 className="about-subtitle">🚀 Et demain ?</h2>
            <p>
              LVLUP continue de monter en niveaux ! <br/>
              Bientôt : des articles personnalisés, des alertes de sortie, un Discord et bien plus encore...
            </p>
            <p className="about-closing">
              En bref : <strong>LVLUP</strong>, c’est <em>le checkpoint idéal pour les joueurs curieux et exigeants</em>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
