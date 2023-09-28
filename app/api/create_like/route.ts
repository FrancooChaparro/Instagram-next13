import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { authorIdLike, PostIdLike } = body;

    const like = await prisma.like.create({
      data: {
        authorIdLike, PostIdLike
      },
    });

    return NextResponse.json(like);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
