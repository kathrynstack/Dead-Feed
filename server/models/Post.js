const { Schema, model } = require('mongoose');
const imagekit = require('../config/imageKitConnection.js');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageLink: {
        type: String,
        required: true
    }
});

// Before the delete we want to delete the posts in ImageKit
const pre_delete = async function (next) {
    const posts = await this.model.find(this.getQuery());
    if (posts)
    {
        // const image_links = posts.map(post => post.imageLink);
        const image_links = ['64ae270706370748f239dfe6'];
        console.log(image_links);
        
        const response = await imagekit.bulkDeleteFiles(image_links).then(response => {return response});
        console.log(response);
        // const response = await Post.deleteMany({_id: {$in: posts}});
    }
    throw "ERROR";
    next();
};

postSchema.pre('deleteMany', pre_delete);

const Post = model('Post', postSchema);

module.exports = Post;
