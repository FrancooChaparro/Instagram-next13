import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      comments: {
        include: {
          author: true, // Incluir la información del autor del comentario
        },
      },
    },
  });

  const reversedPosts = posts.reverse();

  return NextResponse.json(reversedPosts);
}
