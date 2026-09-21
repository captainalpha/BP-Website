"use server";

import { CookieKeys } from "@/utils/types/enums";
import { cookies } from "next/headers";
import { verifyAccessToken } from "../api/user/login/auth-helpers";
import { revalidatePath } from "next/cache";

export const getUser = async () => {
  const cookieValues = await cookies();
  const accessToken = cookieValues.get(CookieKeys.ACCESS_TOKEN)?.value;

  if (accessToken) {
    const accessRes = (await verifyAccessToken(
      accessToken
    )) as unknown as IUserInToken;

    return accessRes;
  }
  return null;
};

export const revalidateThisPath = async (path: string) => {
  revalidatePath(path);
};

export const isAuthenticated = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(CookieKeys.ACCESS_TOKEN)?.value;
    if (!token) return false;

    const decodedToken = await verifyAccessToken(token);
    if (!decodedToken || !decodedToken?.exp) return false;

    const expiryDateInSeconds = decodedToken?.exp;

    const currentDateInSeconds = Math.floor(Date.now() / 1000);
    const durationInSeconds = expiryDateInSeconds - currentDateInSeconds;

    if (durationInSeconds < 1) return false;
    return true;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};
