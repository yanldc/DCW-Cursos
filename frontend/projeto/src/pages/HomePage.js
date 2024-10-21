import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h2>Cursos disponiveis</h2>
      <button>curso tal encaminhando pro curso de fazer site autenticado simples</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
