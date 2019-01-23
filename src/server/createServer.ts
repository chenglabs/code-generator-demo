import {
  ApolloServer,
  makeExecutableSchema,
  gql,
  PubSub,
} from "apollo-server-express";

import { importSchema } from "graphql-import";
import { ExecutionParams } from "subscriptions-transport-ws";
import { resolvers } from "./resolvers/index";

import prisma from "./prisma";
import { Request, Response } from "express";

const schemaTypedefs = importSchema("src/server/schema.graphql");
const typeDefs = gql`
  ${schemaTypedefs}
`;

const pubsub = new PubSub();

export interface Context {
  req: Request;
  res: Response;
  connection: ExecutionParams;
  authtoken: string;
  prisma: typeof prisma;
  pubsub: typeof pubsub;
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const createServer = () => {
  return new ApolloServer({
    schema,
    context: (context: any) => {
      // console.log( context);
      const connection = context.connection as ExecutionParams;
      const req = context.req as Request;

      const authorization: string =
        (connection
          ? connection.context.Authorization
          : req.headers.authorization) || "";
      const authtoken = authorization.replace("Bearer ", "");

      return { ...context, authtoken, prisma, pubsub } as Context;
    },
    subscriptions: {
      onConnect: (connectionParams, _webSocket, _context) =>{
        return connectionParams;
      },
      path: process.env.GRAPHQL_PATH || '/'
    },
    tracing: true
  });
};

export default createServer;
