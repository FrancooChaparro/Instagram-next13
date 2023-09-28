import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        comments: {
          include: {
            author: true,
          },
        },
        likes: {
          include: {
            author: true,
          },
        },
      },
    });

    const reversedPosts = posts.reverse();

    return NextResponse.json(reversedPosts);
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
