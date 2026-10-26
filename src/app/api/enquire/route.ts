import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { type, name, phone, email } = data;

    const errors: string[] = [];

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.push("Please provide a valid full name (minimum 2 characters).");
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      errors.push("Please provide a valid contact telephone number.");
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      errors.push("Please provide a valid email address.");
    }

    if (type === "room") {
      if (!data.checkIn) errors.push("Check-in date is required.");
      if (!data.checkOut) errors.push("Check-out date is required.");
      if (!data.roomCategory) errors.push("Please select a room category.");
    } else if (type === "banquet") {
      if (!data.eventType) errors.push("Please specify the event type.");
      if (!data.preferredDate) errors.push("Preferred event date is required.");
      if (!data.venueOrBusiness) errors.push("Please select a preferred venue or business.");
    } else if (type === "general") {
      if (!data.message || data.message.trim().length < 5) {
        errors.push("Please enter your message (at least 5 characters).");
      }
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Generate unique verifiable reference ID
    const prefix = type === "room" ? "JB-RM" : type === "banquet" ? "JB-EV" : "JB-GN";
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `${prefix}-${Date.now().toString().slice(-6)}-${randomSuffix}`;

    // Server-side audit log
    console.log(`[ENQUIRY SUBMITTED] ${referenceId}:`, {
      type,
      name,
      phone,
      email,
      details: data,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        "Your enquiry has been successfully logged with our hospitality concierge desk. A dedicated reservation manager will connect with you promptly.",
      timestamp: new Date().toISOString(),
      submittedData: {
        name,
        type,
        referenceId,
      },
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["An unexpected server error occurred. Please try again or call us directly."],
      },
      { status: 500 }
    );
  }
}
