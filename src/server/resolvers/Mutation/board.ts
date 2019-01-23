import { MutationResolvers } from '../../generated/types';
import { Context } from '../../createServer';
import { getUserId } from '../../../utils/getUserId';

const board: MutationResolvers<Context> =  {
  async updateBoard(_parent, {where, data}, {authtoken, prisma}, info) {
    const userId = getUserId(authtoken);
    const updatedBoard = await prisma.mutation.updateBoard(
      {
        where,
        data: {
          ...data,
          updatedBy: {
            connect: {
              id: userId,
            },
          },
        },
      },
      info
    );
    return updatedBoard;
  },
  async createBoard(_parent, {name}, {authtoken, prisma}, info) {
    const id = getUserId(authtoken);

    const user = await prisma.mutation.updateUser(
      {
        data: {
          boards: {
            create: {
              name,
            },
          },
        },
        where: { id },
      },
      info
    );

    if (!user) {
      throw new Error(
        `Error creating board for user - id ${id}`
      );
    }

    return user;
  },
  async deleteBoard(_parent, { id }, {authtoken, prisma}, info) {
    getUserId(authtoken);

    const deletedBoard = await prisma.mutation.deleteBoard(
      {
        where: { id },
      },
      info
    );

    if (!deletedBoard) {
      throw new Error(
        `Error deleting board board - id ${id}`
      );
    }
    return deletedBoard;
  },
};

export { board };
