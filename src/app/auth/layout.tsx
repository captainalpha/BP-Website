import { headers } from "next/headers";
import React, { ReactNode } from "react";
import { isAuthenticated } from "../actions";
import { RouteNames } from "@/utils/types/enums";
import { redirect } from "next/navigation";
import TokenProvider from "@/providers/TokenProvider";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isAuth = await isAuthenticated();
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";

  if (
    (!isAuth && pathname !== RouteNames.LOGIN) ||
    (isAuth && pathname === RouteNames.LOGIN)
  ) {
    return redirect(isAuth ? RouteNames.USERS : RouteNames.LOGIN);
  }

  return <TokenProvider>{children}</TokenProvider>;
};

export default AuthLayout;
