import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const url = req.nextUrl.clone();
  const path = url.pathname;

  // Only protect /owner routes
  const isOwnerRoute = path.startsWith("/owner");

  if (!isOwnerRoute) {
    return NextResponse.next();
  }

  // Read owner token from cookies
  const token = req.cookies.get("owner_token")?.value;

  if (!token) {
    url.pathname = "/owner/login";
    return NextResponse.redirect(url);
  }

  // Validate token with your Render backend
  const validate = await fetch(
    `${process.env.BACKEND_URL}/auth/owner/validate`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    }
  );

  const data = await validate.json();

  if (!data.valid) {
    url.pathname = "/owner/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/owner/:path*"],
};
