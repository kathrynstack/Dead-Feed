const path = require('path');

module.exports = function override(config) {
  config.resolve.alias['../../../server/seeds/userData.json'] = path.resolve(
    __dirname,
    'path/to/your/userData.json'
  );
  return config;
};
