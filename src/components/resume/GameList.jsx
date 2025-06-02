import { useEffect, useState } from "react";
import { searchGames } from "../services/GameService";
import { Link } from "react-router-dom";
import "../../style/GameList.css"; 

const GameList = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const results = await searchGames(searchTerm);
        setGames(results);
      } catch (error) {
        console.error("Erreur lors du chargement des jeux :", error);
      }
    };

    fetchGames();
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = e.target.elements.search.value;
    if (term.trim() !== "") setSearchTerm(term);
  };

  return (
    <div className="game-list-container">
      <h2>Rechercher un jeu</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Nom du jeu..." />
        <button type="submit">Rechercher</button>
      </form>

      <div className="game-grid">
        {games.map((game) => (
          <Link to={`/resume/${game.id}`} key={game.id} className="game-card">
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameList;