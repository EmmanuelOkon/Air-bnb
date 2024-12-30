import { useState, useEffect } from "react";

export function useAuth() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchAuthStatus() {
      const response = await fetch("/api/auth/status");
      const data = await response.json();
      setIsSignedIn(data.isSignedIn);
      setUser(data.user);
    }

    fetchAuthStatus();
  }, []);

  return { isSignedIn, user };
}
