import { useState, useEffect } from 'react';
import '../../style/AdminPage.css';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  // Redirection si non authentifié
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      navigate('/admin-login');
    }
  }, [navigate]);

  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    redirectUrl: '',
  });

  const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY;

  const fetchArticles = async () => {
    try {
      const res = await fetch('https://lvlup-back.onrender.com/api/articles');
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      console.error('Erreur lors de la récupération :', err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://lvlup-back.onrender.com/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': ADMIN_KEY,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Échec de la création de l’article');
      }

      const newArticle = await res.json();
      setArticles(prev => [newArticle, ...prev]);
      setFormData({ title: '', content: '', imageUrl: '', redirectUrl: '' });
    } catch (err) {
      console.error('Erreur lors de la création :', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Confirmer la suppression de cet article ?")) return;
    try {
      const res = await fetch(`https://lvlup-back.onrender.com/api/articles/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-key': ADMIN_KEY,
        },
      });

      if (!res.ok) {
        throw new Error('Échec de la suppression de l’article');
      }

      setArticles(prev => prev.filter(article => article._id !== id));
    } catch (err) {
      console.error('Erreur lors de la suppression :', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin-login');
  };

  return (
    <div className="admin-page">
      <h1>🔧 Administration LVLUP</h1>
      <button className="logout-btn" onClick={handleLogout}>🚪 Se déconnecter</button>

      <form className="article-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Titre" value={formData.title} onChange={handleChange} required />
        <textarea name="content" placeholder="Contenu" value={formData.content} onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="URL de l'image" value={formData.imageUrl} onChange={handleChange} />
        <input type="text" name="redirectUrl" placeholder="Lien de redirection" value={formData.redirectUrl} onChange={handleChange} />
        <button type="submit">Créer l'article</button>
      </form>

      <h2>Articles existants</h2>
      <ul className="article-list">
        {articles.map(article => (
          article && article.content && (
            <li key={article._id}>
              <div className="article-item">
                <div>
                  <strong>{article.title}</strong> – {article.content.slice(0, 50)}...
                </div>
                <button className="delete-btn" onClick={() => handleDelete(article._id)}>🗑️ Supprimer</button>
              </div>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;