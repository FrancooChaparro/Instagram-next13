import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function PUT(request: Request) {
  const { pathname } = parse(request.url || "", true);
  const [, id] = (pathname || "").split("api/put_post/"); // Supongamos que la URL es "/posts/1", donde 1 es el ID del post


  if (!id) {
    return new NextResponse(
        JSON.stringify({ message: "Post not found" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  if (!post) {
    return  new NextResponse(
        JSON.stringify({ message: "post not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
  }

  await prisma.post.delete({
    where: {
      id: parseInt(id, 10),
    },
  });

  return new NextResponse(
    JSON.stringify({ message: "El post ha sido eliminado con éxito" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
