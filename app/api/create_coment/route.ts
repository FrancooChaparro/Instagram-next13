import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { content, authorIdComent, postId } = body;

    const post = await prisma.coment.create({
      data: {
        content,
        author: { connect: { id: authorIdComent } },
        post: { connect: { id: postId } },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
