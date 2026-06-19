import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("auth_token")?.value;
    const isProtectedRoute = request.nextUrl.pathname.startsWith("/checkout") || request.nextUrl.pathname.startsWith("/admin");
    if (isProtectedRoute && !token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout", "/admin"], 
};