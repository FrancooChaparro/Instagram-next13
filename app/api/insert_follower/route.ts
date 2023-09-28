import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { followerId, followingId } = body;

  // Verificar si el followerId ya está en la lista de following del usuario con ID followingId
  const userFollowing = await prisma.user.findUnique({
    where: {
      id: followingId,
    },
    select: {
      following: true,
    },
  });

  if (userFollowing?.following.includes(followerId)) {
    return NextResponse.json({ error: "El usuario ya sigue a este seguidor" }, { status: 400 });
  }

  // Verificar si el followingId ya está en la lista de followers del usuario con ID followerId
  const userFollow = await prisma.user.findUnique({
    where: {
      id: followerId,
    },
    select: {
      followers: true,
    },
  });

  if (userFollow?.followers.includes(followingId)) {
    return NextResponse.json({ error: "El seguidor ya sigue a este usuario" }, { status: 400 });
  }

  // Si las verificaciones pasan, realizar las actualizaciones
  await prisma.user.update({
    where: {
      id: followingId,
    },
    data: {
      following: {
        push: followerId,
      },
    },
  });

  await prisma.user.update({
    where: {
      id: followerId,
    },
    data: {
      followers: {
        push: followingId,
      },
    },
  });

  return NextResponse.json({ message: "Follow relationships created successfully" });
}

