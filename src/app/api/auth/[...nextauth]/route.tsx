// // app/api/auth/[...nextauth]/route.ts
// import NextAuth, { SessionStrategy } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { loginUser, googleAuth } from "@/lib/backend";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           const res = await loginUser({
//             email: credentials?.email || "",
//             password: credentials?.password || ""
//           });
          
//           if (res.data.success) {
//             return {
//               ...res.data.data.user,
//               token: res.data.data.token
//             };
//           }
//           return null;
//         } catch (error) {
//           return null;
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt" as SessionStrategy,
//     maxAge: 24 * 60 * 60, // 1 day
//   },
//   callbacks: {
//     async jwt({ token, user, account }: any) {
//       if (account?.provider === "google" && account?.access_token) {
//         try {
//           const res = await googleAuth(account.access_token);
//           if (res.data.success) {
//             token.accessToken = res.data.data.token;
//             token.user = res.data.data.user;
//           }
//         } catch (error) {
//           console.error("Google auth failed:", error);
//         }
//       } else if (user) {
//         token.accessToken = user.token;
//         token.user = {
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           profileImage: user.profileImage
//         };
//       }
//       return token;
//     },
//     async session({ session, token }: any) {
//       session.accessToken = token.accessToken;
//       session.user = token.user;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// export const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth, { SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser, googleAuth } from "@/lib/backend";

export const authOptions = {
  providers: [
  
    GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  authorization: {
    params: {
      prompt: "consent",
      access_type: "offline",
      response_type: "code",
      redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/google"
    }
  }
}),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await loginUser({
            email: credentials?.email || "",
            password: credentials?.password || ""
          });
          
          if (res.data && res.data.success) {
            return {
              id: res.data.data.user.id,
              name: res.data.data.user.username,
              email: res.data.data.user.email,
              token: res.data.data.token
            };
          }
          return null;
        } catch (error) {
          console.error("Credentials auth error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async jwt({ token, user, account }: any) {
      // Initial sign in
      if (account && user) {
        if (account.provider === "google") {
          try {
            const res = await googleAuth(account.access_token);
            if (res.data && res.data.success) {
              token.accessToken = res.data.data.token;
              token.user = res.data.data.user;
            }
          } catch (error) {
            console.error("Google auth failed:", error);
          }
        } else {
          token.accessToken = user.token;
          token.user = {
            id: user.id,
            username: user.name,
            email: user.email
          };
        }
      }
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };