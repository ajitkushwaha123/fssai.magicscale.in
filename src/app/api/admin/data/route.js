import { NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";
import { Lead } from "@/models/Lead";
import { Registration } from "@/models/Registration";

export async function GET(req) {
  try {
    // Basic server-side verification (middleware also protects this route, but just in case)
    const adminToken = req.cookies.get("admin_token")?.value;
    if (adminToken !== "authenticated") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    // Fetch leads and registrations, sorted by newest first
    const leads = await Lead.find({}).sort({ createdAt: -1 }).lean();
    const registrations = await Registration.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json(
      {
        success: true,
        data: {
          leads,
          registrations,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin Data Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
