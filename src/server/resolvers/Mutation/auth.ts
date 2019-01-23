import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { MutationResolvers } from '../../generated/types';
import { Context } from '../../createServer';



const auth: MutationResolvers<Context> =  {
  async signup(_parent, args, {prisma}, _info) {
    const password = await bcrypt.hash(
      args.password,
      10
    );
    const user = await prisma.mutation.createUser({
      data: { ...args, password },
    });

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET||""
    );
    return {
      token,
      user,
    };
  },

  async login(_parent, { email, password }, {prisma}, _info) {
    const user = await prisma.query.user({
      where: { email },
    });
    if (!user) {
      throw new Error(
        `No such user found for email: ${email}`
      );
    }

    const valid = await bcrypt.compare(
      password,
      user.password
    );
    if (!valid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || ""
    );

    return {
      token,
      user,
    };
  },
};

export { auth };
