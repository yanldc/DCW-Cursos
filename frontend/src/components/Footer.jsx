import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Styles/Footer.css';

function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <div className='container-footer'>

            </div>
        </div>
    );
}

export default HomePage;