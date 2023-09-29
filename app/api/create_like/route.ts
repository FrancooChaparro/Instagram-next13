import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { authorIdLike, PostIdLike } = body;

  try {
    if (isNaN(parseInt(authorIdLike, 10)) || isNaN(parseInt(PostIdLike, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid user ID provided" },
        { status: 400 }
      );
    }

    const userID = await prisma.user.findUnique({
      where: {
        id: parseInt(authorIdLike, 10),
      },
    });

    const postExist = await prisma.post.findUnique({
      where: {
        id: parseInt(PostIdLike),
      },
    });

    if (!userID || !postExist) {
      return NextResponse.json(
        { status: false, msg: "Post or User does exist" },
        { status: 404 }
      );
    }

    const existingLike = await prisma.like.findFirst({
      where: {
        authorIdLike: parseInt(authorIdLike, 10),
        PostIdLike: parseInt(PostIdLike, 10),
      },
    });

    if (existingLike) {
      return NextResponse.json(
        { status: false, msg: "Like already exists for this user and post" },
        { status: 400 }
      );
    }
    const like = await prisma.like.create({
      data: {
        authorIdLike,
        PostIdLike,
      },
    });

    await prisma.post.update({
      where: {
        id: PostIdLike,
      },
      data: {
        liked: true,
      },
    });
    return NextResponse.json(like);
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
