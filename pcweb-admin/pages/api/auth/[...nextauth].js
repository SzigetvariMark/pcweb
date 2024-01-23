import clientPromise from "@lib/mongodb";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),   
  ],
  adapter: MongoDBAdapter(clientPromise)
});
