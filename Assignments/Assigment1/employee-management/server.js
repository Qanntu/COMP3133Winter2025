const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

// configuration of port and URI of MongoDB
const PORT = 8081;
const MONGO_URI =
  "mongodb+srv://lizzarbsch:CalidezCa30@cluster0.zpjpx.mongodb.net/101470163_assignment1?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(express.json()); // for parsing JSON 

// Function to connect MongoDB
const connectDB = async () => {
  try {
    console.log(`Attempting to connect to DB...`);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected!`);
  } catch (error) {
    console.error(`Error while connecting to MongoDB : ${error.message}`);
    process.exit(1);
  }
};

// Start Server Apollo / Express
const startServer = async () => {
  await connectDB();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`The server started running at http://localhost:${PORT}/graphql`);
  });
};

startServer();
