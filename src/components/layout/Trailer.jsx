import '../../style/Trailer.css';

const Trailer = ({ videoId }) => {
  if (!videoId) return null;

  return (
    <section className="trailer-section">
      <h2 className="trailer-title">🎬 Trailer du moment</h2>
      <div className="trailer-container">
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Trailer vidéo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Trailer;