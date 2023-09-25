import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const body = await request.json();
  const { postID, title, liked } = body;

  if (!postID) {
    return new NextResponse("Se requiere el ID del post para la actualización", {
      status: 400,
    });
  }

  const post = await prisma.post.update({
    where: {
      id: postID, // Proporciona el ID del usuario que deseas actualizar
    },
    data: {
      title,
      liked
    },
  });

  return NextResponse.json(post);
}
