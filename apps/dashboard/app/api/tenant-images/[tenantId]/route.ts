import { NextResponse, type NextRequest } from "next/server";
import { createSearchParamsCache, parseAsString } from "nuqs/server";
import { validate as uuidValidate } from "uuid";

import { Prisma } from "@workspace/database";
import { prisma } from "@workspace/database/client";

const paramsCache = createSearchParamsCache({
  tenantId: parseAsString.withDefault(""),
});

export async function GET(
  req: NextRequest,
  props: { params: Promise<NextParams> },
): Promise<Response> {
  const { tenantId } = await paramsCache.parse(props.params);
  if (!tenantId || !uuidValidate(tenantId)) {
    return new NextResponse(undefined, {
      status: 400,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  const [tenantImage] = await prisma.$transaction(
    [
      prisma.tenantImage.findFirst({
        where: { tenantId },
        select: {
          data: true,
          contentType: true,
          hash: true,
        },
      }),
    ],
    {
      isolationLevel: Prisma.TransactionIsolationLevel.ReadUncommitted,
    },
  );

  if (!tenantImage || !tenantImage.data) {
    return new NextResponse(undefined, {
      status: 404,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  const { searchParams } = new URL(req.url);
  const version = searchParams.get("v");
  if (version && version !== tenantImage.hash) {
    return new NextResponse(undefined, {
      status: 400,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  return new NextResponse(tenantImage.data, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=86400, immutable",
      "Content-Type": tenantImage.contentType ?? "image/png",
      "Content-Length": tenantImage.data.length.toString(),
    },
  });
}
