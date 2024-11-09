import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Body';
import Footer from '../components/Footer';

function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <NavBar />
            <Home />
            <Footer />
        </div>
    );
}

export default HomePage;