import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !birth || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      await axios.post('http://localhost:3001/auth/register', {
        name,
        birth,
        email,
        password,
      });
      navigate('/login');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erro ao registrar o usuário';
      setError(errorMessage);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="content-form">
          <h2>Junte-se a nós</h2>
          <div className="form">
            {error && <p>{error}</p>}
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
              <input
                type="date"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                autoComplete="bday"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <div className="box-button">
                <button type="submit">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
