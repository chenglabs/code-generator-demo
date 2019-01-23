import { Prisma } from "./generated/prisma";

export * from "./generated/prisma";

const prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET
});

export { prisma as default }
