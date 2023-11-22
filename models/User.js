// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }, // Role-based access control
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
