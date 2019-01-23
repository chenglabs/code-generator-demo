import { MutationResolvers } from "../../generated/types";
import { Context } from "../../createServer";
import { getUserId } from "../../../utils/getUserId";

const list: MutationResolvers<Context> = {
  async updateList(_parent, { data, where }, { authtoken, prisma }, info) {
    const userId = getUserId(authtoken);

    const updatedList = await prisma.mutation.updateList(
      {
        where,
        data: {
          ...data,
          updatedBy: {
            connect: {
              id: userId
            }
          }
        }
      },
      info
    );
    return updatedList;
  },
  async deleteList(_parent, args, { authtoken, prisma }, info) {
    getUserId(authtoken);

    return await prisma.mutation.deleteList(args, info);
  }
};

export { list };
