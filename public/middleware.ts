import { NextResponse } from "next/server";

export function middleware(req) {
  const ownerEmails = [
    "jondenham85@gmail.com",
    "allydenham013@gmail.com"
  ];

  const email = req.cookies.get("owner_email")?.value;

  const isOwner = ownerEmails.includes(email);

  const isOwnerRoute = req.nextUrl.pathname.startsWith("/owner");

  if (isOwnerRoute && !isOwner) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
