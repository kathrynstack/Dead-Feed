const { Schema } = require('mongoose');


const postSchema = new Schema({
  users: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = postSchema;
