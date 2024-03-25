import { baseUrl } from "@/lib/utils";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

async function fetchRefreshToken(token: JWT): Promise<JWT> {
  try {
    const res = await fetch(baseUrl + "/api/auth/refresh", {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const response = await res.json();
    if (!res.ok) {
      throw new Error(response);
    }
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      const expiresIn: any = token.expiresIn;
      if (new Date().getTime() < expiresIn - 5000) return { ...token, ...user };
      try {
        const refreshToken: any = token.refresh;
        const newToken: any = await fetchRefreshToken(refreshToken);
        token.token = newToken.token.token;
        token.user = newToken.user;
        token.expiresIn = newToken.expiresIn;
        token.isActive = true;
        return { ...token, ...user };
      } catch (err) {
        token.isActive = false;
        return { ...token, ...user };
      }
    },

    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      const user: any = token.user;
      const accessToken: any = token.token;
      const refreshToken: any = token.refresh;
      const expiresIn: any = token.expiresIn;
      const isActive: any = token.isActive;
      session.user = {
        username: user.username,
        email: user.email,
        role: user.role,
        tickets: user.tickets,
        telegram: user.telegram,
        validated: user.validated,
        id: user.id,
      };
      session.refresh = refreshToken;
      session.token = accessToken;
      session.expiresIn = expiresIn;
      if (!isActive) {
        session.error = "Session Expired";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        login: {},
        password: {},
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { login, password } = credentials as any;
        try {
          const res = await fetch(`${baseUrl}/api/auth/login`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              login,
              password,
            }),
          });
          const response = await res.json();
          if (res.ok && response) {
            const { token, refresh, expiresIn, user } = response;
            return {
              user: user,
              token: token.token,
              refresh: refresh.token,
              expiresIn: expiresIn,
              isActive: true,
            } as any;
          } else return null;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "verify-email",
      name: "Verify Email",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {},
        password: {},
        id: {},
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { username, password, id } = credentials as any;
        try {
          const res = await fetch(`${baseUrl}/api/auth/sign-up/${id}`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });
          const response = await res.json();
          if (res.ok && response) {
            const { token, refresh, expiresIn, user } = response;
            return {
              user: user,
              token: token.token,
              refresh: refresh.token,
              expiresIn: expiresIn,
              isActive: true,
            } as any;
          } else return null;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
};
