import { auth } from "express-openid-connect";
import dotenv from "dotenv";
dotenv.config();

export const authConfig = auth({
   authRequired: false,
   auth0Logout: true,
   secret: process.env.AUTH0_CLIENT_SECRET,
   baseURL: process.env.AUTH0_CALLBACK_URL,
   clientID: process.env.AUTH0_CLIENT_ID,
   issuerBaseURL: process.env.AUTH0_DOMAIN,
   session: {
      cookie: {
         sameSite: "None",
         secure: true
      }
   }
});