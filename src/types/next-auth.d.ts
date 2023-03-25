/* eslint-disable no-unused-vars */


import type {SessionStorage, User} from 'next-auth'
import type {JWT} from 'next-auth/jwt'


type userid =string 

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
            id: UserId
        }
    }
}