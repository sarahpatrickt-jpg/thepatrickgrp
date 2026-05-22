import { NextRequest, NextResponse } from "next/server";

const SIERRA_API_URL = "https://api.sierrainteractivedev.com/leads";

/* ── CORS — allow landing page domains to submit leads ── */

const ALLOWED_ORIGINS = [
  "https://thepatrickgrp.com",
  "https://www.thepatrickgrp.com",
  "https://michiganhomegrants.com",
  "https://www.michiganhomegrants.com",
  "https://michiganfirsttimehomebuyergrants.com",
  "https://www.michiganfirsttimehomebuyergrants.com",
  "https://mihomebuyergrants.com",
  "https://www.mihomebuyergrants.com",
  "https://buynomoneydownapp.com",
  "https://www.buynomoneydownapp.com",
];

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

/* ── Bot-detection helpers ── */

/** Returns true if a name looks like bot gibberish (e.g. "VHsxXnargkKsDuREO") */
function isGibberishName(name: string): boolean {
  if (!name || name.length < 2) return false;
  const cleaned = name.trim();
  // Real names rarely exceed 30 chars without a space
  if (cleaned.length > 30 && !cleaned.includes(" ")) return true;
  // Check for vowel presence — real names (in any language romanized) have vowels
  const vowelRatio = (cleaned.match(/[aeiouAEIOU]/g) || []).length / cleaned.length;
  if (cleaned.length > 4 && vowelRatio < 0.1) return true;
  // Random case switching mid-word (e.g. "VHsxXnargkK") — 4+ case flips in one word
  const words = cleaned.split(/\s+/);
  for (const word of words) {
    if (word.length < 5) continue;
    let caseFlips = 0;
    for (let i = 1; i < word.length; i++) {
      const prev = word[i - 1];
      const curr = word[i];
      if (/[a-zA-Z]/.test(prev) && /[a-zA-Z]/.test(curr)) {
        if ((prev === prev.toUpperCase()) !== (curr === curr.toUpperCase())) {
          caseFlips++;
        }
      }
    }
    if (caseFlips >= 4) return true;
  }
  return false;
}

/** Returns true if the email domain looks like a disposable/throwaway pattern */
function isSuspiciousEmail(email: string): boolean {
  if (!email) return false;
  // Local part is 15+ random-looking chars
  const local = email.split("@")[0] || "";
  if (local.length > 15) {
    const vowelRatio = (local.replace(/[^a-zA-Z]/g, "").match(/[aeiou]/gi) || []).length / local.length;
    if (vowelRatio < 0.15) return true;
  }
  return false;
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const cors = corsHeaders(origin);

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
      honeypot,
      _t, // timestamp when form was rendered (bot-speed check)
    } = await req.json();

    // Honeypot check — bots fill hidden fields, humans don't
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200, headers: cors });
    }

    // Time-based check — bots submit forms in < 3 seconds
    if (_t) {
      const elapsed = Date.now() - Number(_t);
      if (elapsed < 3000) {
        return NextResponse.json({ success: true }, { status: 200, headers: cors });
      }
    }

    // Gibberish name check — catches "VHsxXnargkKsDuREO" style bot names
    if (isGibberishName(firstName) || isGibberishName(lastName)) {
      return NextResponse.json({ success: true }, { status: 200, headers: cors });
    }

    // Suspicious email check
    if (isSuspiciousEmail(email)) {
      return NextResponse.json({ success: true }, { status: 200, headers: cors });
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400, headers: cors });
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
      if (err.includes("already exists")) {
        return NextResponse.json({ success: true, duplicate: true }, { status: 200, headers: cors });
      }
      return NextResponse.json(
        { error: "Lead submission failed. Please try again." },
        { status: 500, headers: cors }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, leadId: data?.data?.leadId }, { status: 200, headers: cors });
  } catch (err) {
    console.error("Sierra lead error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500, headers: cors });
  }
}
