const API_KEY = "3b8782673ff44dca9f32bda4a3ce6d0b";
const BASE_URL = "https://api.rawg.io/api";

export const searchGames = async (query) => {
  const response = await fetch(`${BASE_URL}/games?search=${encodeURIComponent(query)}&key=${API_KEY}`);
  if (!response.ok) throw new Error("Erreur lors de la recherche de jeux.");
  const data = await response.json();
  return data.results;
};

export const getGameDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des détails.");
  return await response.json();
};

export const getGameScreenshots = async (id) => {
  const response = await fetch(`${BASE_URL}/games/${id}/screenshots?key=${API_KEY}`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des screenshots.");
  const data = await response.json();
  return data.results;
};

export async function getUpcomingGames() {
  const today = new Date().toISOString().split('T')[0];
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 10);
  const endDate = nextMonth.toISOString().split('T')[0];

  const url = `https://api.rawg.io/api/games?key=3b8782673ff44dca9f32bda4a3ce6d0b&dates=${today},${endDate}&ordering=released&page_size=20`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erreur API RAWG");

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des sorties à venir :", error);
    return [];
  }
}