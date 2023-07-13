const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
