

import { NextResponse } from "next/server";
import { authClient } from "./lib/auth-client"; 
// ... rest of your middleware code



export async function middleware(request) {
  const session = await authClient.api.getSession({
    headers: request.headers,
  });

  // Define routes that require login
  const isProtectedRoute = 
    request.nextUrl.pathname.startsWith("/profile") || 
    request.nextUrl.pathname.startsWith("/courses/");

  if (!session && isProtectedRoute) {
    // Redirect to login and save the current page as callbackUrl
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/courses/:path*"],
};
