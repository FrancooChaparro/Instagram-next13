import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const body = await request.json();
  const { userId, email, name, image, username } = body;

  if (!userId) {
    return new NextResponse("Se requiere el ID del usuario para la actualización", {
      status: 400,
    });
  }

  const user = await prisma.user.update({
    where: {
      id: userId, // Proporciona el ID del usuario que deseas actualizar
    },
    data: {
      email,
      name,
      image,
      username,
    },
  });

  return NextResponse.json(user);
}
