import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/LvlupNewsPage.css';

const LvlupNewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://lvlup-back.onrender.com/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="lvlup-news-page">
      <h1 className="lvlup-news-title">📰 LVLUP News</h1>
      <div className="lvlup-news-list">
        {articles.map(article => (
          <div className="lvlup-news-card" key={article._id}>
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="lvlup-news-image"
              />
            )}
            <h2 className="lvlup-news-card-title">{article.title}</h2>
            <div
              className="lvlup-news-card-content"
              dangerouslySetInnerHTML={{ __html: `${article.content.slice(0, 150)}...` }}
            ></div>
            <Link
              to={`/news/${article._id}`}
              className="lvlup-news-card-link"
            >
              Lire l'article complet
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LvlupNewsPage;