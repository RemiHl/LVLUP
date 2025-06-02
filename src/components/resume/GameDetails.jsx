import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameDetails, getGameScreenshots } from "../services/GameService";
import "../../style/GameDetails.css";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getGameDetails(id);
        setGame(data);
        const shots = await getGameScreenshots(id);
        setScreenshots(shots);
      } catch (error) {
        console.error("Erreur lors du chargement des détails du jeu :", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!game) return <p>Chargement des infos du jeu...</p>;

  const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
};

  return (
    <div className="game-details">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="main-image" />
      <p dangerouslySetInnerHTML={{ __html: game.description }} />

      <div className="game-info">
        <span className="badge release-date">📅 {formatDate(game.released)}</span>
        <span className="badge platforms">🎮 {game.platforms.map(p => p.platform.name).join(", ")}</span>
        {game.metacritic && (
          <span className={`badge metacritic ${getMetacriticClass(game.metacritic)}`}>
            ⭐ Metacritic: {game.metacritic}
          </span>
        )}
      </div>

      <h2>Screenshots</h2>
      <div className="screenshot-grid">
        {screenshots.map((shot) => (
          <img key={shot.id} src={shot.image} alt="Screenshot" />
        ))}
      </div>
    </div>
  );
};

function getMetacriticClass(score) {
  if (score >= 75) return "good";
  if (score >= 50) return "average";
  return "bad";
}

export default GameDetails;