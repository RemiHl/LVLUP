import '../../style/PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <h1>🛡️ Politique de confidentialité</h1>
      <p><strong>Dernière mise à jour :</strong> [05/06/2025]</p>

      <p>Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et les droits dont vous disposez concernant vos données.</p>

      <h2>1. Informations collectées</h2>
      <strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées, durée des visites (via des outils comme Google Analytics ou Vercel Analytics).
      

      <h2>2. Utilisation des données</h2>
      <p>Les données sont utilisées uniquement pour :</p>
      <ul>
        <li>Améliorer continuellement l'expérience utilisateur</li>
        <li>Analyser la fréquentation du site et suivre les performances du site</li>
        <li>Sécuriser l'accès à l'interface d'administration</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>LVLUP utilise des cookies techniques uniquement à des fins fonctionnelles (ex. : thème clair/sombre, session d’authentification pour l’administrateur). Aucune donnée personnelle n’est collectée à des fins publicitaires.</p>

      <h2>4. Partage des données</h2>
      <p>Aucune donnée personnelle n’est vendue ni partagée à des tiers. Les accès à la base de données sont strictement limités au développeur du site.</p>

      <h2>5. Vos droits</h2>
      <p>Pour toute question relative à la protection de vos données, contactez-nous sur la page <strong>Contact</strong> du site.</p>
    </div>
  );
};

export default PrivacyPolicyPage;