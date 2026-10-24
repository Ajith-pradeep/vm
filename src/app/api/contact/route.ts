import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the form fields and try again.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot tripped
  if (parsed.data.website) {
    return NextResponse.json({
      ok: true,
      mode: "development",
      message: "Thank you.",
    });
  }

  const deliveryConfigured = Boolean(process.env.CONTACT_WEBHOOK_URL);

  if (!deliveryConfigured) {
    return NextResponse.json({
      ok: true,
      mode: "development",
      message:
        "Your message passed validation. Email/webhook delivery is not configured yet — set CONTACT_WEBHOOK_URL for production.",
    });
  }

  try {
    const response = await fetch(process.env.CONTACT_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        receivedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "Delivery failed. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      mode: "production",
      message: "Thank you. Your message has been received.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Delivery failed. Please try again later." },
      { status: 502 },
    );
  }
}
