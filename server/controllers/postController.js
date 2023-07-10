const Post = require('../models/Post');

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred fetching posts' });
    }
  },

  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred fetching the post' });
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const newPost = await Post.create({ title, content });
      res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred creating the post' });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
      );
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred updating the post' });
    }
  },

  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPost = await Post.findByIdAndDelete(id);
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json({ message: 'Post deleted successfully', post: deletedPost });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred deleting the post' });
    }
  },
};

module.exports = postController;
