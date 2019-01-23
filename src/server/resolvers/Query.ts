import { QueryResolvers } from "../generated/types";
import { Context } from "../createServer";
import { getUserId } from "../../utils/getUserId";

const Query: QueryResolvers<Context> = {
  board(_parent, { where }, { prisma, authtoken }, info) {
    getUserId(authtoken);
    return prisma.query.board({ where }, info);
  },

  list(_parent, { where }, { prisma, authtoken }, info) {
    getUserId(authtoken);
    return prisma.query.list({ where }, info);
  },

  me(_parent, _arg, { prisma, authtoken }, info) {
    const id = getUserId(authtoken);
    return prisma.query.user({ where: id }, info);
  }
};

export { Query };
