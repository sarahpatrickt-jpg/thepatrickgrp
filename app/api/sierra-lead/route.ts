import { NextRequest, NextResponse } from "next/server";

const SIERRA_API_URL = "https://api.sierrainteractivedev.com/leads";

export async function POST(req: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      leadType = 3, // 1=Buyer, 2=Seller, 3=Both
      source,
      note,
      tags = [],
    } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // Sierra requires a password field (max 30 chars) — we generate a non-guessable one
    // since these leads log into Sierra's portal, not our site
    const password = crypto.randomUUID().replace(/-/g, "").slice(0, 30);

    const payload = {
      firstName: firstName || "",
      lastName: lastName || "",
      email,
      password,
      ...(phone ? { phone } : {}),
      leadType,
      source: source || "thepatrickgrp.com",
      note: note || "",
      tags,
      sendRegistrationEmail: false,
      emailStatus: "ValidAddress",
    };

    const res = await fetch(SIERRA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Sierra-ApiKey": process.env.SIERRA_API_KEY || "",
        "Sierra-OriginatingSystemName": "thepatrickgrp.com",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Sierra API error:", err);
      return NextResponse.json(
        { error: "Lead submission failed.", detail: err },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, leadId: data?.data?.leadId }, { status: 200 });
  } catch (err) {
    console.error("Sierra lead error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
