import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../lib/prisma';
import { use } from "react";

export default NextAuth ({
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: { label: 'Username', type: 'text'},
                password: { label: 'Password', type: 'password'},
            },
            async authorize(credentials: { username: any; password: any; }) {
                //replace this with your own login logic
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username,
                    },
                });

                if (user && user.password === credentials.password) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
});