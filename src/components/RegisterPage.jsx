// RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
    navigate('/login'); // Redirect to login after successful registration
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#BDD7BB',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#1E5242',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleRegister}>
        <h2>Please Register</h2>
        <input
          type="text"
          placeholder="Name"
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Place"
          style={inputStyle}
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
        <input
          type="time"
          placeholder="Preferred Time"
          style={inputStyle}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
