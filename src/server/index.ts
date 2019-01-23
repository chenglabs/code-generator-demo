import express from "express";
import createServer from "./createServer";
import http from "http";

const app = express();
const apolloServer = createServer();

apolloServer.applyMiddleware({
  app,
  path: process.env.GRAPHQL_PATH || '/'
});

const server = {
  start: (handle: any, listeningListener?: Function) => {
    // subscription needs a httpServer 
    const httpServer = http.createServer(app);
    apolloServer.installSubscriptionHandlers(httpServer);

    // for subscriptions, use httpServer instead of app to listen to
    httpServer.listen(handle,listeningListener);
    return httpServer;
  }
}
export default server;
