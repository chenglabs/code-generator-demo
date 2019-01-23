import './env.config';
import '@babel/polyfill/noConflict';
import server from './server'

const port = process.env.PORT || 4000;
const path = process.env.GRAPHQL_PATH || '/';

server.start({port}, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${path}`
  );
});
