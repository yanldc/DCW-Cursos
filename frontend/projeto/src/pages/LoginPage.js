import React, { useState } from 'react';
import axios from 'axios';
import style from './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (err) {
      setError('Usuário ou senha incorretos');
    }
  };


  return (
    <div className="main">
      <div className="container">
        <div className="content-form">
          <h2>Seja Bem-vindo(a)</h2>
          <div className="form">
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="box-button">
                <button type="submit">Login</button>
                <button onClick={() => navigate('/register')}>Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
