const express = require('express');
const router = express.Router();

// Route to get all posts
router.get('/', (req, res) => {
  res.send('Get all posts');
});

// Route to get a specific post by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Get post with ID ${id}`);
});

// Route to create a new post
router.post('/', (req, res) => {
  res.send('Create a new post');
});

// Route to update a post by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Update post with ID ${id}`);
});

// Route to delete a post by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Delete post with ID ${id}`);
});

module.exports = router;
