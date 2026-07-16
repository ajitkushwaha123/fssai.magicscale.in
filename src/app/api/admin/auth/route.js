import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { password } = await req.json();

    // Verify against environment variable, or fallback for local dev if not set
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password === adminPassword) {
      const response = NextResponse.json({ success: true }, { status: 200 });
      
      // Set the secure cookie
      response.cookies.set({
        name: "admin_token",
        value: "authenticated",
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid password" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Auth Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
