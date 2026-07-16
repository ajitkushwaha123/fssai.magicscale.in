import { NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";
import { Lead } from "@/models/Lead";
import { Registration } from "@/models/Registration";

export async function GET(req) {
  try {
    const adminToken = req.cookies.get("admin_token")?.value;
    if (adminToken !== "authenticated") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const search = url.searchParams.get("search") || "";
    const statusFilter = url.searchParams.get("status") || "ALL";

    const matchQuery = search ? {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } }
      ]
    } : {};

    // Fetch matching leads and registrations
    const leads = await Lead.find(matchQuery).lean();
    const registrations = await Registration.find(matchQuery).lean();

    // Unify Leads and Registrations by phone number
    const combinedMap = new Map();

    leads.forEach(lead => {
      combinedMap.set(lead.phone, {
        ...lead,
        leadId: lead._id,
        isRegistered: false,
        docCount: 0,
      });
    });

    registrations.forEach(reg => {
      const existing = combinedMap.get(reg.phone);
      let docCount = 0;
      if (reg.profilePicUrl) docCount++;
      if (reg.aadharUrl) docCount++;
      if (reg.panUrl) docCount++;

      if (existing) {
        combinedMap.set(reg.phone, {
          ...existing,
          ...reg, // overwrite lead data with richer registration data
          leadId: existing.leadId,
          registrationId: reg._id,
          isRegistered: true,
          docCount,
          remarks: reg.remarks || existing.remarks,
          status: reg.status || existing.status,
          latestDate: reg.createdAt, // Prefer registration creation date
        });
      } else {
        combinedMap.set(reg.phone, {
          ...reg,
          registrationId: reg._id,
          isRegistered: true,
          docCount,
          latestDate: reg.createdAt,
        });
      }
    });

    let unifiedData = Array.from(combinedMap.values());

    // Apply Status Filter
    if (statusFilter !== "ALL") {
      unifiedData = unifiedData.filter(item => (item.status || "NEW") === statusFilter);
    }

    // Sort Latest first
    unifiedData.sort((a, b) => new Date(b.latestDate || b.createdAt) - new Date(a.latestDate || a.createdAt));

    // Paginate
    const totalRecords = unifiedData.length;
    const totalPages = Math.max(1, Math.ceil(totalRecords / limit));
    const paginatedData = unifiedData.slice((page - 1) * limit, page * limit);

    return NextResponse.json(
      {
        success: true,
        data: {
          items: paginatedData,
          totalRecords,
          totalPages,
          currentPage: page,
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
