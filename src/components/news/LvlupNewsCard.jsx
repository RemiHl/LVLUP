import { Link } from 'react-router-dom';
import '../../style/LvlupNewsCard.css';

const LvlupNewsCard = ({ article }) => {
  return (
    <div className="lvlup-news-card">
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="lvlup-news-image"
        />
      )}
      <div className="lvlup-news-content">
        <h3 className="lvlup-news-title">{article.title}</h3>
        <p
          className="lvlup-news-snippet"
          dangerouslySetInnerHTML={{
            __html: `${article.content.slice(0, 120)}...`,
          }}
        ></p>
        <Link to={`/news/${article._id}`} className="lvlup-news-link">
          Lire l'article complet
        </Link>
      </div>
    </div>
  );
};

export default LvlupNewsCard;