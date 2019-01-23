import jwt from 'jsonwebtoken'
import { createError } from 'apollo-errors';

const NotAuthorizedError = 'NotAuthorizedError';
const AuthError = createError(NotAuthorizedError, {
  message: NotAuthorizedError,
});

function getUserId(token: string) {
  if (token) {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET || "" ) as any;
    return userId
  }

  throw new AuthError({
    message: 'Not authorized',
  });
}

export {
  getUserId,
  AuthError,
  NotAuthorizedError,
};
