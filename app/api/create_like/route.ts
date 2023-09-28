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

    const postExist = await prisma.user.findUnique({
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

    const like = await prisma.like.create({
      data: {
        authorIdLike,
        PostIdLike,
      },
    });

    return NextResponse.json(like);
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
