const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/authUtils');
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const imagekit = require('./config/imageKitConnection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, username: 'Ray', email: 'Ray@gmail.com' },
    { id: 2, username: 'Katty', email: 'Kathryn@gmail.com' },
    { id: 3, username: 'Cole', email: 'Cole@gmail.com' },
  ];
  
  res.json(users.map(user => ({ username: user.username, email: user.email })));
});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Required for imagekit auth
app.get('/imagekit-auth', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    console.log(result);
    res.json(result);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
