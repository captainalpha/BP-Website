"use server";

import { CookieKeys, RouteNames } from "@/utils/types/enums";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  try {
    const cookieStore = await cookies();

    cookieStore.delete(CookieKeys.ACCESS_TOKEN);
  } catch (error: any) {
    throw new Error(error);
  } finally {
    redirect(RouteNames.LOGIN);
  }
};

export const getToken = async () => {
  try {
    const cookieStore = await cookies();

    return cookieStore.get(CookieKeys.ACCESS_TOKEN)?.value;
  } catch (error: any) {
    throw new Error(error);
  }
};
