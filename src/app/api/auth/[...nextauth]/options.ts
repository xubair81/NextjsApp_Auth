import type { NextAuthOptions } from 'next-auth'
import IdentityServer from 'next-auth/providers/identity-server4'

export const options: NextAuthOptions = {
    providers: [
        
        IdentityServer({
            issuer:  "http:localhost:5000",
            name: "identity-server",
            id: "connect/authorize",
            wellKnown: `http://localhost:5000/.well-known/openid-configuration`,
            clientId: "epm" as string,
            authorization: {
                url: "http:localhost:5000/connect/authorize", 
                params: { scope: "epmapi openid ArTrackerApi" } 
            }
        })
    ],
    callbacks: {
    },
    secret: process.env.NEXTAUTH_SECRET,
    // pages: {
    //     //signIn: '/api/auth/signin',
    //     signOut: '/auth/signout1',
    //     error: '/auth/error1', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request1', // (used for check email message)
    //     newUser: '/auth/new-user1' // New users will be directed here on first sign in (leave the property out if not of interest)
    //   }
}