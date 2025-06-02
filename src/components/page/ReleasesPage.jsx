import { useEffect, useState } from "react";
import { getUpcomingGames } from "../services/GameService";
import NewsCard from "../news/NewsCard";
import "../../style/ReleasesPage.css";

const ReleasesPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const data = await getUpcomingGames();
        setGames(data);
      } catch (error) {
        console.error("Erreur lors du chargement des sorties à venir:", error);
      }
    };

    fetchUpcoming();
  }, []);

  return (
    <div className="releases-page">
      <h1>📅 Les sorties à venir</h1>
      <div className="releases-grid">
        {games.length === 0 ? (
          <p>Aucune sortie prévue trouvée.</p>
        ) : (
          games.map((game) => {
            const article = {
              title: game.name,
              image: game.background_image || "https://ipfs-api.bakiverse.com/file/display?cid=QmRMVhLDMyycQMd29T4abpbRmRqdwzhM4bNjqjDGjv84un",
              link: `/resume/${game.id}`,
              publishDate: game.released || new Date(),
              contentSnippet: `Plateformes : ${game.platforms?.map(p => p.platform.name).join(", ") || "Inconnue"}`,
              platform: "rawg"
            };
            return <NewsCard key={game.id} article={article} />;
          })
        )}
      </div>
    </div>
  );
};

export default ReleasesPage;