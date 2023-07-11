const express = require('express');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
// const postRoutes = require('./routes/postRoutes');
// const userRoutes = require('./routes/userRoutes');
const { ApolloServer } = require('apollo-server-express');
// const { graphqlHTTP } = require('express-graphql');
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

// app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/users', userRoutes);

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true, 
//   })
// );


// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// const root = {
//   hello: () => 'Hello, world!',
// };\

//TODO just look at a mini project from the last 3 weeks and do all the same graphql things it does (NOTE - ignore the 'context' part for NOW - we will need to set this up for authentication)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


