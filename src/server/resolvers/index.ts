import { IResolvers } from 'apollo-server-express';
import { AuthPayload } from './AuthPayload';
import { Mutation } from './Mutation';
import {Query} from './Query';
import { Subscription } from './Subscription'



// some typing issues with IResolver from apollo-server and graphql-code-generator
// we are casting it to the apollo-server IResolver
const resolvers = {
  AuthPayload,
  Mutation,
  Query,
  Subscription
} as IResolvers<any, any>;


export { resolvers }