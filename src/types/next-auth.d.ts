import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: string | undefined | null;
      telegram: string | undefined | null;
      tickets: number | undefined | null;
      username: string | undefined | null;
      validated: boolean | undefined | null;
      email: string | undefined | null;
      id: string | undefined | null;
    } & DefaultSession["user"];
    token?: string;
    refresh?: string;
    expiresIn: Date;
    error: string | undefined | null;
  }
}
