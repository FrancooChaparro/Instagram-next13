import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { followerId, followingId } = body;

  try {
    if (!followerId || !followingId)
      return NextResponse.json({ msg: "Missing required fields" });
    if (isNaN(parseInt(followerId, 10)) || isNaN(parseInt(followingId, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid user ID provided" },
        { status: 400 }
      );
    }

    const userID1 = await prisma.user.findUnique({
      where: {
        id: parseInt(followerId, 10),
      },
    });
    const userID2 = await prisma.user.findUnique({
      where: {
        id: parseInt(followingId, 10),
      },
    });
    if (!userID1 || !userID2) {
      return NextResponse.json(
        { status: false, msg: "User not found" },
        { status: 404 }
      );
    }

    const userFollowing = await prisma.user.findUnique({
      where: {
        id: followingId,
      },
      select: {
        following: true,
      },
    });

    if (userFollowing?.following.includes(followerId)) {
      return NextResponse.json(
        { status: false, msg: "El usuario ya sigue a este seguidor" },
        { status: 400 }
      );
    }

    const userFollow = await prisma.user.findUnique({
      where: {
        id: followerId,
      },
      select: {
        followers: true,
      },
    });

    if (userFollow?.followers.includes(followingId)) {
      return NextResponse.json(
        { status: false, msg: "El seguidor ya sigue a este usuario" },
        { status: 400 }
      );
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

    return NextResponse.json({
      status: true,
      msg: "Follow relationships created successfully",
    });
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
