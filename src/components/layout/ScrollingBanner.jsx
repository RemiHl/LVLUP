import '../../style/ScrollingBanner.css';

const ScrollingBanner = () => {
  const links = [
    { text: '🔥 Epic vous offre Limbo et Tiny Tina\'s Wonderlands !', url: 'https://store.epicgames.com/fr/free-games' },
    { text: '🎮 Nouveaux jeux PS Plus disponibles !', url: 'https://www.playstation.com/fr-fr/ps-plus/games/' },
    { text: '🕹️ Joue à tes jeux préferés avec le Xbox Game Pass !', url: 'https://www.xbox.com/fr-FR/xbox-game-pass' },
    { text: '📋 Vous voulez en savoir plus sur la Nintendo Switch 2 ?', url: 'https://www.nintendo.com/fr-fr/Hardware/Nintendo-Switch-2/Fonctionnalites/Nintendo-Switch-2-Fonctionnalites-2785300.html?srsltid=AfmBOooA22Un5mAYvSrBIm8ndqGQMsuKNBqmc9e9GfgMNa6CmiHBrH5x' },
  ];

  return (
    <div className="scrolling-banner">
      <div className="scrolling-content">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;