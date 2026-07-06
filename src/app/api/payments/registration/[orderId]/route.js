import { Registration } from "@/models/Registration";
import { PLANS } from "@/constants/plans";
import dbConnect from "@/lib/db-connect";
import { NextResponse } from "next/server";
import { checkPaytmOrderStatus } from "@/lib/paytm";
import { getPostHogClient } from "@/lib/posthog-server";

export async function GET(req, { params }) {
  try {
    await dbConnect();

    const { orderId } = await params;

    if (!orderId) {
      return NextResponse.json(
        {
          success: false,
          message: "Order ID is required",
        },
        { status: 400 },
      );
    }

    const registration = await Registration.findOne({
      orderId,
    });

    if (!registration) {
      return NextResponse.json(
        {
          success: false,
          message: "Registration not found",
        },
        { status: 404 },
      );
    }

    if (registration.paymentStatus === "PENDING") {
      try {
        const paytmStatus = await checkPaytmOrderStatus(orderId);
        
        if (paytmStatus && paytmStatus.resultInfo) {
          const status = paytmStatus.resultInfo.resultStatus;
          let hasChanged = false;

          if (status === "TXN_SUCCESS") {
            registration.paymentStatus = "SUCCESS";
            hasChanged = true;
            
            const posthog = getPostHogClient();
            posthog.capture({
              distinctId: registration.phone,
              event: "payment_completed",
              properties: {
                plan_id: registration.planId,
                amount: registration.amount,
                order_id: orderId,
                registration_id: registration._id.toString(),
                source: "order_status_check"
              },
            });
          } else if (status === "TXN_FAILURE") {
            registration.paymentStatus = "FAILED";
            hasChanged = true;
          }

          if (hasChanged) {
            await Registration.updateOne({ orderId }, { $set: { paymentStatus: registration.paymentStatus } });
          }
        }
      } catch (err) {
        console.error("Failed to check Paytm order status:", err);
      }
    }

    const plan = PLANS[registration.planId] || null;

    return NextResponse.json({
      success: true,
      registration: {
        _id: registration._id,
        name: registration.name,
        phone: registration.phone,
        email: registration.email,
        orderId: registration.orderId,
        amount: registration.amount,
        paymentStatus: registration.paymentStatus,
        createdAt: registration.createdAt,
      },
      plan,
    });
  } catch (error) {
    console.error("Get Registration Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal Server Error",
      },
      { status: 500 },
    );
  }
}

