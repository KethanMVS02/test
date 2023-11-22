// server/routes/auctionRoutes.js
const express = require('express');
const router = express.Router();
const AuctionItem = require('../models/AuctionItem');

// ... other routes ...

// Add a test item
router.post('/add-item', async (req, res) => {
  try {
    const newItem = new AuctionItem({
      title: 'Test Item',
      description: 'This is a test item.',
      startingPrice: 10,
      currentBid: 0,
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Set an end date 7 days from now
    });

    await newItem.save();

    res.json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

