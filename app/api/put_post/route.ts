import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const body = await request.json();
  const { postID, title, liked } = body;

  try {
    if (isNaN(parseInt(postID, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid user ID provided" },
        { status: 400 }
      );
    }
    const postExist = await prisma.post.findUnique({
      where: {
        id: parseInt(postID),
      },
    });

    if (!postExist) {
      return NextResponse.json(
        { status: false, msg: "Post does exist" },
        { status: 404 }
      );
    }

    const post = await prisma.post.update({
      where: {
        id: postID,
      },
      data: {
        title,
        liked,
      },
    });

    return NextResponse.json({ status: true, user: postID }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
