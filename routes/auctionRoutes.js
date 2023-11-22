// server/routes/auctionRoutes.js
const express = require('express');
const router = express.Router();
const AuctionItem = require('../models/AuctionItem');

// Get all auction items
router.get('/auction-items', async (req, res) => {
  try {
    const items = await AuctionItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
