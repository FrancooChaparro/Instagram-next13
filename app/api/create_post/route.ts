import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    title,
    image,
    authorId
  } = body;


  const post = await prisma.post.create({
    data: {
      title,
      image,
      authorId
    }
  });

  return NextResponse.json(post);
}