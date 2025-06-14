import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LvlupNewsCard from '../news/LvlupNewsCard';
import { fetchNews } from '../services/NewsService';
import '../../style/NewsArticlePage.css';

const NewsArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);
  const [externalArticles, setExternalArticles] = useState([]);

  useEffect(() => {
    // Article principal
    const fetchArticle = async () => {
      try {
        const res = await fetch(`https://lvlup-back.onrender.com/api/articles/${id}`);
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error("Erreur chargement article :", err);
      }
    };

    // Articles internes (LVLUP)
    const fetchInternalArticles = async () => {
      try {
        const res = await fetch('https://lvlup-back.onrender.com/api/articles');
        const data = await res.json();
        const others = data.filter(a => a._id !== id).slice(0, 3);
        setOtherArticles(others);
      } catch (err) {
        console.error("Erreur chargement suggestions internes :", err);
      }
    };

    // Articles externes (Jeuxvideo.com)
    const fetchExternalArticles = async () => {
      try {
        const data = await fetchNews();
        const topExternal = data.slice(0, 3);
        setExternalArticles(topExternal);
      } catch (err) {
        console.error("Erreur chargement articles externes :", err);
      }
    };

    fetchArticle();
    fetchInternalArticles();
    fetchExternalArticles();
  }, [id]);

  if (!article) return <p>Chargement...</p>;

  return (
    <div className="news-article-page">
      <h1>{article.title}</h1>
      {article.imageUrl && <img src={article.imageUrl} alt={article.title} />}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />

      {article.redirectUrl && (
        <a href={article.redirectUrl} target="_blank" rel="noopener noreferrer">
          Pour plus d'infos, cliquez ici
        </a>
      )}

      {/* Section à lire aussi */}
      <div className="read-more-section">
        <h2>À lire aussi</h2>

        <div className="read-more-cards">
          {/* Articles internes LVLUP */}
          {otherArticles.map(a => (
            <LvlupNewsCard key={a._id} article={a} small />
          ))}

          {/* Articles externes Jeuxvideo.com */}
          {externalArticles.map(a => (
            <div className="lvlup-news-card small" key={a.id}>
              {a.image && (
                <img src={a.image} alt={a.title} className="lvlup-news-image" />
              )}
              <div className="lvlup-news-content">
                <h3 className="lvlup-news-title">{a.title}</h3>
                <p className="lvlup-news-snippet">{a.contentSnippet}</p>
                <a
                  href={a.link}
                  className="lvlup-news-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire sur jeuxvideo.com
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePage;