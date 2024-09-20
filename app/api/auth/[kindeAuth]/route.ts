import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// export const GET = handleAuth();

if (!process.env.KINDE_ISSUER_URL) {
  throw new Error(
    "The environment variable 'KINDE_ISSUER_URL' is required. Set it in your .env file"
  );
}

export const GET = handleAuth({
  issuerUrl: process.env.KINDE_ISSUER_URL,
});
