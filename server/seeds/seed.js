const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('../../src/components/login/userData.json');
const feedData = require('./feedData.json')

const seedDatabase = async () => {

  await sequelize.sync({ force: true });
  console.log(" --------------- Database synced ---------------");

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(" --------------- User table seeded ---------------");

  await Feed.bulkCreate(feedData, {
    individualHooks: true,
    returning: true,
  });
  console.log(" --------------- Feed table seeded ---------------");

  process.exit(0);
};

seedDatabase();