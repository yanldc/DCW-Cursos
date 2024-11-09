// NavBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/NavBar.css'; // Crie este arquivo para os estilos do NavBar

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  const navigateToPage = (page) => {
    console.log(`Navegando para ${page}`);
    navigate(`/${page.toLowerCase()}`); 
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
        </ul>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default NavBar;
