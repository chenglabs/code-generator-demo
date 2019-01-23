import { Context } from "../createServer";
import { getUserId } from "../../utils/getUserId";
import { SubscriptionResolvers } from "../generated/types";

const Subscription: SubscriptionResolvers<Context> = {
  board: {
    subscribe: (_parent, args, {authtoken,prisma}, info) => {
      // check User Auth Token
      getUserId(authtoken);
      return prisma.subscription.board(args, info);
    },
  },
  list: {
    subscribe: (_parent, args, {authtoken,prisma}, info) => {
      // check User Auth Token
      getUserId(authtoken);
      return prisma.subscription.list(args, info);
    },
  },
  card: {
    subscribe: (_parent, args, {authtoken,prisma}, info) => {
      // check User Auth Token
      getUserId(authtoken);
      return prisma.subscription.card(args, info);
    },
  },
  user: {
    subscribe: (_parent, args, {authtoken,prisma}, info) => {
      // check User Auth Token
      getUserId(authtoken);
      return prisma.subscription.user(args, info);
    },
  },
};

export { Subscription };
