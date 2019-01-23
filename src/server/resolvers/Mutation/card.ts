import { MutationResolvers } from "../../generated/types";
import { Context } from "../../createServer";
import { getUserId } from "../../../utils/getUserId";

const card: MutationResolvers<Context> = {
  async updateCard(_parent, { data, where }, { authtoken, prisma }, info) {
    const userId = getUserId(authtoken);

    const argsWithUpdatedByUser = {
      where,
      data: {
        ...data,
        updatedBy: {
          connect: {
            id: userId
          }
        }
      }
    };

    const updatedCard = await prisma.mutation.updateCard(argsWithUpdatedByUser);
    if (!updatedCard) {
      throw new Error(`Error updating card for user - id ${userId}`);
    }

    const result = await prisma.query.card(
      { where: { id: updatedCard.id } },
      info
    );

    if (!result) {
      throw new Error(`Error retrieving card - id ${updatedCard.id}`);
    }
    
    return result;

  }
};

export { card };
