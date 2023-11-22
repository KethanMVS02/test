// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import AuctionList from './AuctionList';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes> {/* Change Switch to Routes */}
          <Route path="/login" element={<Login />} /> {/* Update the syntax for Route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<AuctionList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

