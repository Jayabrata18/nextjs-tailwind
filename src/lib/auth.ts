import { db } from './db';
import { NextAuthOptions } from "next-auth";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import {GoogleProvider} from 'next-auth/providers/google'


function getGoogleCredentials() {
    const clientId: process.env.GOOGLE_CLIENT_ID
    const clientSecret: process.env.GOOGLE_CLIENT_Secret

    if(!clientId || clientId.length === 0) {
        throw new Error("No clientId for gogle provider set")
    }

    if(!clientSecret || clientSecret.length === 0) {
        throw new Error("No clientSecret for gogle provider set")
    }    

    return {clientId, clientSecret}
}



export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: './login'
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret:getGoogleCredentials().clientSecret,
        })
    ],
    callbacks: {
        async session({token, session}) {
            if(token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        },
        async jwt({token,user}) {
            const dbUser = await //2:31:00
        }
    }

}