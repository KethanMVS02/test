// server.js
const express = require('express');
const mongoose = require('mongoose');
const authMiddleware = require('../../middleware/authMiddleware');
// Import the authentication middleware
const authRoutes = require('./routes/authRoutes'); // Import the authentication routes
const app = express();
const PORT = process.env.PORT || 5000;

// Update the MongoDB connection string
const mongoDBConnectionString = 'mongodb+srv://Kethan:Kkethan999MVS@cluster0.n0zhbn6.mongodb.net/your-database-name?retryWrites=true&w=majority';

// Use environment variables for sensitive information
const jwtSecret = process.env.JWT_SECRET || 'your-secret-key'; // Use a strong, random secret in production

// Connect to MongoDB
mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to parse JSON
app.use(express.json());
app.use('/api', authenticateUser); // Apply authentication middleware globally

// Use auction routes
const auctionRoutes = require('./routes/auctionRoutes');
app.use('/api', auctionRoutes);

// Use authentication routes
const authRoutesInstance = authRoutes(jwtSecret); // Pass JWT secret to authRoutes
app.use('/api/auth', authRoutesInstance);

// Define a test route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
