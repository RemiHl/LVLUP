import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY;

    if (inputKey === ADMIN_KEY) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('Clé invalide. Accès refusé.');
    }
  };

  return (
    <div className="admin-login">
      <h2>🔐 Connexion Admin</h2>
      <input
        type="password"
        placeholder="Entrez la clé admin"
        value={inputKey}
        onChange={(e) => setInputKey(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AdminLogin;