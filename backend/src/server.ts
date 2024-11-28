import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import mongoose from "mongoose";
require("dotenv").config({});
// import User from "./models/user.model";
const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  // Set up Apollo Server
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    formatError: (err) => {
      console.error(err); // Log detailed error
      return err;
    },
  });
  await server.start();

  app.use(cors(), bodyParser.json(), expressMiddleware(server));
  mongoose
    .connect(process.env.MONGODB_URL as string)
    .then(async () => {
      console.log("Connected to DB!");
      await new Promise((resolve: any) => httpServer.listen({ port: 4000 }, resolve));
      // await User.create({
      //   name: "Patrick Knight",
      //   email: "patrick_knight@fakegmail.com",
      //   password: "a26902690",
      // });
      console.log(`🚀 Server ready at http://localhost:4000`);
    })
    .catch((err) => {
      console.log("Failed!" + err);
    });
};
main();
