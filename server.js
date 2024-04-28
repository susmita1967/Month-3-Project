/*const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startApolloServer();
*/
const express = require('express');
const { createServer } = require('http');
const userRoutes = require('./src/routes/userRoutes');
const hotelRoutes = require('./src/routes/hotelRoutes');
const roomRoutes = require('./src/routes/roomRoutes');
const roomTypeRoutes = require('./src/routes/roomTypeRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');

async function startServer() {
  const app = express();

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Handle routes
  app.use('/api/users', userRoutes);
  app.use('/api/hotels', hotelRoutes);
  app.use('/api/rooms', roomRoutes);
  app.use('/api/roomTypes', roomTypeRoutes);
  app.use('/api/bookings', bookingRoutes);

  // Start the server
  const PORT = process.env.PORT || 4000;
  const server = createServer(app);
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();

