import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(request: Request) {
  const { pathname } = parse(request.url || "", true);
  const [, id] = (pathname || "").split("api/see_follows/");

  if (!id) {
    return new NextResponse(
      JSON.stringify({ message: "User not found" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const post = await prisma.user.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  if (!post) {
    return new NextResponse(
      JSON.stringify({ message: "user not found" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  let seguidos: any[] = [];  // Inicializa la variable con un array vacío
  let arrayseguidos = post.following;

  for (const e of arrayseguidos) {
    let user = await prisma.user.findUnique({
      where: {
        id: e,
      },
    });
    seguidos.push(user);
  }

  let seguidores: any[] = [];  // Inicializa la variable con un array vacío
  let arrayFollows = post.followers;

  for (const e of arrayFollows) {
    let user = await prisma.user.findUnique({
      where: {
        id: e,
      },
    });
    seguidores.push(user);
  }

  return new NextResponse(
    JSON.stringify({ post, seguidores, seguidos }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

