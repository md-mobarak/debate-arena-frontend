import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } from '@/config/env';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    {
      id: 'credentials',
      name: 'Credentials',
      type: "credentials" as const,
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials:any) {
        const res = await fetch(`${process.env.BACKEND_URL}/api/users/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        });
        
        const data = await res.json();
        if (res.ok && data.token) {
          return { id: data.user._id, ...data.user };
        }
        return null;
      }
    }
  ],
  secret: JWT_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };