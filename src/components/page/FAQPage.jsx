import '../../style/FAQPage.css';

const FAQPage = () => {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1 className="faq-title">❓ Foire Aux Questions (FAQ)</h1>

        <div className="faq-section">
          <h2 className="faq-subtitle">🔍 Questions générales</h2>
          <div className="faq-item">
            <h3>Qu'est-ce que LVLUP ?</h3>
            <p>LVLUP est une plateforme indépendante dédiée à l’actualité et à la découverte du jeu vidéo. Elle centralise les news, les sorties à venir et des fiches de jeux complètes pour t’aider à ne rien rater de l’univers gaming.</p>
          </div>
          <div className="faq-item">
            <h3>D’où viennent les informations présentes sur le site ?</h3>
            <p>Les contenus proviennent de flux RSS de Jeuxvideo.com et de l’API officielle de RAWG.io. Nous sélectionnons, filtrons et structurons les infos pour une meilleure lisibilité.</p>
          </div>
          <div className="faq-item">
            <h3>Le site est-il affilié à Jeuxvideo.com ou RAWG ?</h3>
            <p>Non, LVLUP utilise leurs données publiques, mais n’a aucun partenariat commercial avec eux.</p>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="faq-subtitle">⚙️ Fonctionnalités</h2>
          <div className="faq-item">
            <h3>Comment fonctionne la recherche ?</h3>
            <p>La barre de recherche te permet de trouver rapidement un article ou une actualité via des mots-clés.</p>
          </div>
          <div className="faq-item">
            <h3>C’est quoi les résumés de jeux ?</h3>
            <p>Ce sont des fiches courtes et claires, avec les infos essentielles d’un jeu : date de sortie, plateformes, description, note Metacritic, etc... Pour le moment elles sont en anglais, mais elles seront traduite très bientôt.</p>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="faq-subtitle">🚀 Futur du site</h2>
          <div className="faq-item">
            <h3>Des fonctionnalités seront-elles ajoutées ?</h3>
            <p>Oui ! Bientôt : articles personnalisés, alertes de sortie, favoris, commentaires, etc...</p>
          </div>
          <div className="faq-item">
            <h3>Puis-je proposer une idée ou un retour ?</h3>
            <p>Bien sûr ! N’hésite pas à utiliser la page "Contact" pour envoyer tes suggestions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
