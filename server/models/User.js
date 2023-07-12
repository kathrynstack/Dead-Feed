const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Post = require('./Post');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
}, {
    toJSON: {
        virtuals: true,
    },
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// Before the delete we want to delete the users posts
const pre_delete = async function (next) {
    const user = await this.model.findOne(this.getQuery());
    if (user)
    {
        const posts = await user.posts.map(post => post._id.toHexString());
        const response = await Post.deleteMany({_id: {$in: posts}});
    }
    next();
};

userSchema.pre('remove', pre_delete);
userSchema.pre('findOneAndDelete', pre_delete);

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('Postcount').get(function () {
    return this.savedPosts.length;
});

const User = model('User', userSchema);

module.exports = User;