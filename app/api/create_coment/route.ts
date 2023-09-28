import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { content, authorIdComent, postId } = body;

  try {
    if (isNaN(parseInt(authorIdComent, 10)) || isNaN(parseInt(postId, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid user ID provided" },
        { status: 400 }
      );
    }

    const userID = await prisma.user.findUnique({
      where: {
        id: parseInt(authorIdComent, 10),
      },
    });

    const postExist = await prisma.user.findUnique({
      where: {
        id: parseInt(postId),
      },
    });

    if (!userID || !postExist) {
      return NextResponse.json(
        { status: false, msg: "Post or User does exist" },
        { status: 404 }
      );
    }

    const newComent = await prisma.coment.create({
      data: {
        content,
        author: { connect: { id: authorIdComent } },
        post: { connect: { id: postId } },
      },
    });

    return NextResponse.json(newComent);
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
