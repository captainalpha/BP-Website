import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl?.pathname;

  // Site-wide "Under Construction" mode: rewrite every page request to the
  // under-construction screen. Assets, API routes and the under-construction
  // page itself are excluded via the matcher / this guard to avoid a loop.
  if (pathname !== "/under-construction") {
    return NextResponse.rewrite(new URL("/under-construction", request.url));
  }

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
