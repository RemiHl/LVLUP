import { useState, useEffect } from 'react';
import { fetchNews } from '../services/NewsService';
import NewsCard from './NewsCard';
import '../../style/NewsList.css';
import '../../style/LoadMoreButton.css';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const articles = await fetchNews(selectedPlatform);
      setNews(articles);
      setVisibleCount(9);
      setLoading(false);
    };

    loadNews();
  }, [selectedPlatform]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <div className="news-list-container">
      <div className="news-list-header">
        <h2>Dernières Actualités JeuxVideo.com</h2>
      </div>

      {loading ? (
        <p>Chargement des articles...</p>
      ) : news.length > 0 ? (
        <>
          <div className="news-grid">
            {news.slice(0, visibleCount).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          {visibleCount < news.length && (
            <div className="load-more-container">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Voir plus
              </button>
            </div>
          )}
        </>
      ) : (
        <p>Aucun article trouvé.</p>
      )}
    </div>
  );
};

export default NewsList;