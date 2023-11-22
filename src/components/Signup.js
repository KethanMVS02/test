import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import '../styles/styles.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      // Make a POST request to the register endpoint
      await axios.post('http://localhost:5000/api/register', {
        email: email,
        password: password,
      });

      // Update state to indicate successful signup
      setSignupSuccess(true);
      setErrorMessage('');
    } catch (error) {
      // Handle signup failure
      setSignupSuccess(false);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      {signupSuccess && <p className="success-message">Registration successful!</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Signup;


