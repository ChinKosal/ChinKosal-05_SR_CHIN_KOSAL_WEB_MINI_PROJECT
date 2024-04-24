import { loginService } from "@/service/auth.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {},
      async authorize(data) {
        console.log("working");
        const userData = {
          email: data?.email,
          password: data?.password,
        };
        const userInfo = await loginService(userData);
        if (userInfo?.status === 400) {
          throw new Error(userInfo?.detail);
        }
        return userInfo;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Adjust this based on your session strategy
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
