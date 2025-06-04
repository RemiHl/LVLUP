import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../style/NewsArticlePage.css';

const NewsArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

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
    fetchArticle();
  }, [id]);

  if (!article) return <p>Chargement...</p>;

  return (
    <div className="news-article-page">
      <h1>{article.title}</h1>
      {article.imageUrl && <img src={article.imageUrl} alt={article.title} />}
      <p>{article.content}</p>
      {article.redirectUrl && (
        <a href={article.redirectUrl} target="_blank" rel="noopener noreferrer">
          Pour plus d'infos, cliquez ici
        </a>
      )}
    </div>
  );
};

export default NewsArticlePage;