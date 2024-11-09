import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Body from '../Styles/Body.css';

function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <nav>
                <h2 className='subtitle'>Lista de Cursos <p>&gt; Inicial</p></h2>
            </nav>
            <div className="content">
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div class="card borda-animada">
                    <img className='card-img' src="https://downloadcursos.top/wp-content/uploads/2023/06/java-completo.png" alt="" />
                    <div class="card__content">
                        <p class="card__title">Full-Stack com Criptografia
                        </p><p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;