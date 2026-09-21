"use client";
import { getToken, logout } from "@/app/actions/logout";
import {
  setNewToken,
  verifyAccessToken,
} from "@/app/api/user/login/auth-helpers";
import { useUserActivityTracker } from "@/lib/hooks/userUserInteractivity";
import { createContext, ReactNode, useCallback } from "react";

const TIME_TO_CHECK = 120;

const TokenContext = createContext(null);

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const isTokenAboutToExpire = useCallback(async (token: string) => {
    const decodedToken = await verifyAccessToken(token);
    const expiryDateInSeconds = decodedToken?.exp;
    if (expiryDateInSeconds === undefined) return logout();
    const currentDateInSeconds = Math.floor(Date.now() / 1000);
    const durationInSeconds = expiryDateInSeconds - currentDateInSeconds;

    return durationInSeconds >= 0 && durationInSeconds <= TIME_TO_CHECK;
  }, []);

  const checkToken = useCallback(async () => {
    const token = await getToken();

    if (token) {
      const tokenIsExpiring = await isTokenAboutToExpire(token);

      if (tokenIsExpiring) {
        const decodedToken = await verifyAccessToken(token);
        if (decodedToken) {
          await setNewToken(decodedToken);
        }
      }
    }
  }, [isTokenAboutToExpire]);

  useUserActivityTracker(checkToken, {
    throttleTime: 2000,
  });

  return <TokenContext.Provider value={null}>{children}</TokenContext.Provider>;
};

export default TokenProvider;
