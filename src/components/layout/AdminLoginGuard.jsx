import { Navigate } from 'react-router-dom';

const AdminLoginGuard = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  // Si déjà admin, on redirige vers la page d'admin
  if (isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  // Sinon on autorise l'accès à /admin-login
  return children;
};

export default AdminLoginGuard;