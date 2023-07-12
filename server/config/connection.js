const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://powerservpa.ddns.net/deadfeed');

module.exports = mongoose.connection;
