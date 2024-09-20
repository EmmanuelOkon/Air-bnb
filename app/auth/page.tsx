import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const AuthPage: React.FC = () => {
  return (
    <div className="flex items-center gap-3 justify-between">
      <LoginLink
        className="bg-blue-400"
        authUrlParams={{
          connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
        }}
      >
        Sign in with Google
      </LoginLink>
      <RegisterLink>

        Register
      </RegisterLink>

    </div>
  );
};

export default AuthPage;
