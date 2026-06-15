

import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

import AppleProvider from "next-auth/providers/apple";

import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import pool from "@/lib/db";



const handler = NextAuth({

  providers: [

    // GOOGLE LOGIN
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),



    // APPLE LOGIN
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),



    // EMAIL + PASSWORD LOGIN
    CredentialsProvider({

      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {

        try {

          const { email, password } = credentials;

          // FIND USER
          const [users] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
          );

          // USER NOT FOUND
          if (users.length === 0) {
            throw new Error("User not found");
          }

          const user = users[0];

          // GOOGLE/APPLE USER
          if (!user.password) {
            throw new Error(
              "Please login with Google or Apple"
            );
          }

          // CHECK PASSWORD
          const isMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (!isMatch) {
            throw new Error("Invalid password");
          }

          // RETURN USER SESSION DATA
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            provider: user.provider,
          };

        } catch (error) {

          throw new Error(error.message);
        }
      },

    }),

  ],



  callbacks: {

    // SAVE GOOGLE/APPLE USERS
    async signIn({ user, account }) {

      try {

        // CHECK EXISTING USER
        const [users] = await pool.query(
          "SELECT * FROM users WHERE email = ?",
          [user.email]
        );



        // CREATE NEW USER
        if (users.length === 0) {

          await pool.query(
            `
            INSERT INTO users
            (
              name,
              email,
              image,
              provider
            )
            VALUES (?, ?, ?, ?)
            `,
            [
              user.name,
              user.email,
              user.image || null,
              account.provider,
            ]
          );
        }

        return true;

      } catch (error) {

        console.log(error);

        return false;
      }
    },



    // ADD USER DATA TO SESSION
    async session({ session }) {

      try {

        const [users] = await pool.query(
          "SELECT * FROM users WHERE email = ?",
          [session.user.email]
        );

        if (users.length > 0) {

          session.user.id = users[0].id;

          session.user.provider =
            users[0].provider;
        }

        return session;

      } catch (error) {

        console.log(error);

        return session;
      }
    },

  },



  pages: {
    signIn: "/",
  },



  session: {
    strategy: "jwt",
  },



  secret: process.env.NEXTAUTH_SECRET,

});



export { handler as GET, handler as POST };