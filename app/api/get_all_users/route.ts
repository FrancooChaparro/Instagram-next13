import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const getAuthor = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  return NextResponse.json(getAuthor);
}
