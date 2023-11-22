import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import '../styles/styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Make a POST request to the login endpoint
      const response = await axios.post('/api/login', {
        email: email,
        password: password,
      });

      // Extract the token from the response
      const { token } = response.data;

      // Store the token in localStorage or sessionStorage as needed
      // For example, using localStorage:
      localStorage.setItem('token', token);

      // Update state to indicate successful login
      setLoginSuccess(true);
      setErrorMessage('');
    } catch (error) {
      // Handle login failure
      setLoginSuccess(false);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {loginSuccess && <p className="success-message">Successfully logged in!</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;

