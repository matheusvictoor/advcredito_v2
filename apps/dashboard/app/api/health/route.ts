import { NextResponse } from "next/server";

import { prisma } from "@workspace/database/client";

export async function GET(): Promise<Response> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: "ok" });
  } catch (err) {
    const { statusCode = 503 } = err as { statusCode?: number };
    return new NextResponse(undefined, {
      status: statusCode,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
}
