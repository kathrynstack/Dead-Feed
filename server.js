const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./server/routes/authRoutes');
const postRoutes = require('./server/routes/postRoutes');
const userRoutes = require('./server/routes/userRoutes');
const { ApolloServer } = require('apollo-server-express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dead_feed', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
const root = {
  hello: () => 'Hello, world!',
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
