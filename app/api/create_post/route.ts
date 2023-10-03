import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { title, image, authorId } = body;

  try {
    if (!image || !authorId)
      return NextResponse.json({ msg: "Missing required fields" });
    if (isNaN(parseInt(authorId, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid user ID provided" },
        { status: 400 }
      );
    }
    const userID = await prisma.user.findUnique({
      where: {
        id: parseInt(authorId, 10),
      }
    });

    if (!userID) {
      return NextResponse.json(
        { status: false, msg: "User does exist" },
        { status: 404 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        image,
        authorId,
      },
    });

    const userResponse = await prisma.user.findUnique({
      where: {
        id: parseInt(authorId, 10),
      },
      include: {
        posts: true,
        coments: true,
        like: {
          include: {
            post: true,
          },
        },
      },
    });

  
    return NextResponse.json({ status: true, post: post, user: userResponse}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
