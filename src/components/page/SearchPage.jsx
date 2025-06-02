import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchNews, searchNews } from '../services/NewsService';
import NewsCard from '../../components/news/NewsCard';

const SearchPage = () => {
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = new URLSearchParams(location.search);
  const searchTerm = params.get('term') || '';
  const platform = params.get('platform') || 'all';

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = searchTerm
        ? await searchNews(searchTerm)
        : await fetchNews(platform);
      setArticles(data);
      setLoading(false);
    };

    load();
  }, [searchTerm, platform]);

  const renderTitle = () => {
    if (searchTerm) return `Résultats pour : "${searchTerm}"`;
    if (platform === 'soluces') return 'Dernières soluces de jeux vidéo';
    return `Actualités ${platform.toUpperCase()}`;
  };

  return (
    <div className="search-page">
      <h2>{renderTitle()}</h2>
      {loading ? (
  <p>Chargement...</p>
) : articles.length > 0 ? (
  <div className="news-grid">
    {articles.map((article) => (
      <NewsCard key={article.id} article={article} />
    ))}
  </div>
) : (
  <p>Aucun résultat trouvé.</p>
)}
    </div>
  );
};

export default SearchPage;