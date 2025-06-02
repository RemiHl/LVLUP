import { FiCalendar, FiUser } from 'react-icons/fi';
import '../../style/NewsCard.css';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      {article.image && (
        <div className="news-card-image-container">
          <img
            src={article.image}
            alt={article.title}
            className="news-card-image"
          />
          {article.platform && (
            <div className={`news-card-platform ${article.platform}`}>
              {article.platform.toUpperCase()}
            </div>
          )}
        </div>
      )}

      <div className="news-card-content">
        <h3 className="news-card-title">{article.title}</h3>
        <p className="news-card-excerpt">{article.contentSnippet}</p>
        <div className="news-card-meta">
          <div className="meta-item">
            <FiCalendar />{' '}
            {new Date(article.publishDate).toLocaleDateString('fr-FR')}
          </div>
          <div className="meta-item">
            {article.author}
          </div>
        </div>
        <a
          className="news-card-readmore"
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lire l'article complet
        </a>
      </div>
    </div>
  );
};

export default NewsCard;