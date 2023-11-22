// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      // Replace the following lines with your actual authentication logic
      // For simplicity, let's assume a hardcoded username/password for demonstration
      if (username === 'user@example.com' && password === 'password') {
        const userData = {
          username: 'user@example.com',
          // Include any other user details you want to store
        };

        setUser(userData);
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  };

  const logout = () => {
    // Clear user data
    setUser(null);
  };

  const isAuthenticated = () => {
    // Check if the user is authenticated
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

