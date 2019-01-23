import { MutationResolvers } from "../../generated/types";
import { Context } from "../../createServer";
import { auth } from "./auth";
import { board } from "./board";
import { card } from "./card";
import { list } from "./list";

const Mutation: MutationResolvers<Context> = {
  ...auth,
  ...board,
  ...card,
  ...list
};

export { Mutation };
