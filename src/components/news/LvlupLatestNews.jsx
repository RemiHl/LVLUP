import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LvlupNewsCard from '../news/LvlupNewsCard';
import '../../style/LvlupLatestNews.css';

const LvlupLatestNews = () => {
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const response = await fetch('https://lvlup-back.onrender.com/api/articles');
        const data = await response.json();
        const latest = data.slice(0, 3);
        setLatestArticles(latest);
      } catch (error) {
        console.error("Erreur lors de la récupération des derniers articles :", error);
      }
    };

    fetchLatestArticles();
  }, []);

  return (
    <section className="latest-lvlup-news">
      <h2 className="section-title">LVLUP News</h2>
      <div className="cards-container">
        {latestArticles.map(article => (
          <LvlupNewsCard key={article._id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default LvlupLatestNews;