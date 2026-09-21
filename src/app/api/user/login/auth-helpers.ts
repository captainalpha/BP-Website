"use server";

import { CookieKeys } from "@/utils/types/enums";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY } = process.env;

const alg = "HS256" as const;

export const generateAccessToken = async (payload: IUserInToken) => {
  try {
    if (!ACCESS_TOKEN_SECRET)
      throw new Error("Failed to get ACCESS_TOKEN_SECRET");
    if (!ACCESS_TOKEN_EXPIRY)
      throw new Error("Failed to get ACCESS_TOKEN_EXPIRY");

    const secret = new TextEncoder().encode(ACCESS_TOKEN_SECRET);

    const jwt = await new SignJWT(JSON.parse(JSON.stringify(payload)))
      .setProtectedHeader({ alg })
      .setExpirationTime(ACCESS_TOKEN_EXPIRY)
      .sign(secret);

    return jwt;
  } catch (error: any) {
    console.log("Generate Refresh Token Error: ", error?.message);
    return null;
  }
};

export const verifyAccessToken = async (token: string) => {
  try {
    if (!ACCESS_TOKEN_SECRET)
      throw new Error("Failed to get ACCESS_TOKEN_SECRET");

    const secret = new TextEncoder().encode(ACCESS_TOKEN_SECRET);

    const { payload } = await jwtVerify(token, secret);

    return payload as unknown as IUserInToken;
  } catch (error: any) {
    console.log("Verify Access token error: ", error?.message);
    return null;
  }
};

export const setNewToken = async (user: IUserInToken) => {
  const accessToken = await generateAccessToken({
    id: user?.id,
    name: user?.name,
    phone: user?.phone,
  });

  const cookieStore = await cookies();

  if (accessToken)
    cookieStore.set(CookieKeys.ACCESS_TOKEN, accessToken, { httpOnly: true });
  else throw new Error("Failed to generate token");
};
