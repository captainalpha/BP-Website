import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl?.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
