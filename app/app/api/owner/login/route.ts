import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();

  const ownerEmails = [
    "jondenham85@gmail.com",
    "allydenham013@gmail.com"
  ];

  if (!ownerEmails.includes(email)) {
    return NextResponse.json({ success: false });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set("owner_email", email, { path: "/" });

  return res;
}
