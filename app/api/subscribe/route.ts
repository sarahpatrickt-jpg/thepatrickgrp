import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, interest } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          first_name: firstName || "",
          last_name: lastName || "",
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "thepatrickgrp.com",
          utm_medium: "newsletter_page",
          utm_campaign: interest || "general",
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Beehiiv error:", err);
      return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
