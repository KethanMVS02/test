// routes/listingRoutes.js
const { authenticateUser } = require('../middleware/authMiddleware');

// Example: Route to create a listing (accessible only to admin)
router.post('/create-listing', authenticateUser, (req, res) => {
  if (req.userData.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Implement listing creation logic
  res.json({ message: 'Listing created successfully' });
});

// Other routes with role-based access control
