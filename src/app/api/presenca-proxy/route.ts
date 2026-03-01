import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import https from "https";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const password = req.headers.get("authorization");

  const agent = new https.Agent({
    rejectUnauthorized: false, // 🔓 bypass invalid cert (dev only!)
  });

  try {
    const { data, status } = await axios.post(
      "https://www.din.uem.br/pet/api/recepcao/registra-presenca",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: password || "",
        },
        httpsAgent: agent, // ✅ axios respects this!
      }
    );

    return NextResponse.json(data, { status });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, details: error.toJSON?.() },
      { status: 500 }
    );
  }
}