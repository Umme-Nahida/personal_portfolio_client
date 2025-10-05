import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";


declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
      phone?:string | null
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
    phone?:string | null;
  }
}

export const authOptions:NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                if (!credentials?.email || !credentials?.password) {
                    console.log("Email or Password is missing")
                    return null
                }


                try {
                    const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        }),
                    });



                    if (!res.ok) {
                        console.error("User Login Failed:", res);
                        return null
                    }

                    const result = await res.json();
                    // console.log("result:----",result)

                    if (result) {
                        // Any object returned will be saved in `result` property of the JWT
                        return {
                            id: result?.data.user.id,
                            email: result?.data?.user?.email,
                            image: result?.data?.user?.image,
                            role: result?.data?.user?.role,
                            phone: result?.data?.user?.phone,
                        }
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null

                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }


                } catch (err) {
                    console.log(err)
                    return null
                }



            }
        })
    ],
    callbacks: {
      async jwt({token, user}){
        if(user){
            token.id = user.id
        }
        return token
      },
      async session({session,token}){
        if(session?.user){
            session.user.id = token.id as string
        }
        return session
      }
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/login"
    }
}
