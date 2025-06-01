import { betterAuth } from "better-auth";
import { createAuthClient } from "better-auth/client";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";

export const auth = betterAuth(
  {
    database: prismaAdapter(prisma, {
      provider: "postgresql"}),
    secret: process.env.BETTER_AUTH_SECRET!,
    emailAndPassword: {
      enabled: true,
      autoSignIn: false,
    }
  }
);

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL
});