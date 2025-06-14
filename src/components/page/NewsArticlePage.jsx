import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LvlupNewsCard from '../news/LvlupNewsCard'; // à importer
import '../../style/NewsArticlePage.css';

const NewsArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`https://lvlup-back.onrender.com/api/articles/${id}`);
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error("Erreur chargement article :", err);
      }
    };

    const fetchOthers = async () => {
      try {
        const res = await fetch('https://lvlup-back.onrender.com/api/articles');
        const data = await res.json();
        // Ne garder que les articles différents de l’actuel
        const others = data.filter(a => a._id !== id).slice(0, 3);
        setOtherArticles(others);
      } catch (err) {
        console.error("Erreur chargement suggestions :", err);
      }
    };

    fetchArticle();
    fetchOthers();
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
          {otherArticles.map(a => (
            <LvlupNewsCard key={a._id} article={a} small />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePage;