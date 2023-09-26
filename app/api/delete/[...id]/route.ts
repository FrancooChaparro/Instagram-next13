import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";

export async function DELETE(request: NextRequest) {
  const { pathname } = parse(request.url || "", true);
  const [, id] = (pathname || "").split("api/delete/"); // Supongamos que la URL es "/posts/1", donde 1 es el ID del post
  console.log(NextRequest, "ADASD");
  

  if (!id) {
    return new NextResponse(
        JSON.stringify({ message: "User not found" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  if (!user) {
    return  new NextResponse(
        JSON.stringify({ message: "User not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
  }

  await prisma.user.delete({
    where: {
      id: parseInt(id, 10),
    },
  });

  return new NextResponse(
    JSON.stringify({ message: "El user ha sido eliminado con éxito" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
