const express = require('express');
const router = express.Router();

// Route to get all users
router.get('/', (req, res) => {
  // Handle logic for getting all users
  res.send('Get all users');
});

// Route to get a specific user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Handle logic for getting a user by ID
  res.send(`Get user with ID ${id}`);
});

// Route to create a new user
router.post('/', (req, res) => {
  // Handle logic for creating a new user
  res.send('Create a new user');
});

// Route to update a user by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  // Handle logic for updating a user by ID
  res.send(`Update user with ID ${id}`);
});

// Route to delete a user by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Handle logic for deleting a user by ID
  res.send(`Delete user with ID ${id}`);
});

module.exports = router;
