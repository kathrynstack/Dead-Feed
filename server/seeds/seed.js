const db = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('../../client/src/components/login/userData.json');
const postData = require('./postData.json')

const seedDatabase = async () => {

    db.once('open', async () => {
        console.log(" --------------- Database synced ---------------");
        
        await Post.deleteMany();
        const posts = await Post.insertMany(postData);
        console.log(" --------------- Posts seeded ---------------");

        await User.deleteMany();
        userData.forEach(user => user['posts'] = posts.map(post => post._id));
        await User.insertMany(userData);
        console.log(" --------------- Users seeded ---------------");

        process.exit(0);
    });
};

seedDatabase();