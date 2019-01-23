import { AuthPayloadResolvers } from "../generated/types";
import { Context } from "../createServer";

const AuthPayload: AuthPayloadResolvers<Context> = {
  user: async ({ user: { id } }, _args, { prisma }, info) => {
    const user = await prisma.query.user({ where: { id } }, info);

    if (!user) {
      throw new Error(`No user found id ${id}`);
    }
    return user;
  },
  token: (_parent, _args, {authtoken}, _info) =>{
    return authtoken;
  }
};

export { AuthPayload };
