const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./src/graphql/schema'); 
const resolvers = require('./src/graphql/mongodbResolver'); 

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/hotel_booking_db)', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Create executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true, // Enable GraphiQL for testing purposes
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
