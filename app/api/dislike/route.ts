import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { authorIdLike, PostIdLike } = body;
  console.log(body);
  

  try {
    if (isNaN(parseInt(authorIdLike, 10)) || isNaN(parseInt(PostIdLike, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid user ID provided" },
        { status: 400 }
      );
    }

    const like = await prisma.like.findFirst({
      where: {
        authorIdLike: parseInt(authorIdLike, 10),
        PostIdLike: parseInt(PostIdLike, 10),
      },
    });

    if (!like) {
      return NextResponse.json(
        { status: false, msg: "Like not found" },
        { status: 404 }
      );
    }

    // Eliminar el like
    await prisma.like.delete({
      where: {
        id: like.id,
      },
    });

    // Actualizar el estado "liked" del post
    await prisma.post.update({
      where: {
        id: parseInt(PostIdLike, 10),
      },
      data: {
        liked: false,
      },
    });

    return NextResponse.json({ status: true, msg: "Dislike successful" });
  } catch (error) {
    return NextResponse.json({ status: false, msg: `Error - ${error}` });
  }
}
