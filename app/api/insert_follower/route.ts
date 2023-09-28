import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    followerId,
    followingId
  } = body;


  const follow = await prisma.follower.create({
    data: {
    userId: followerId
    }, include: {
        user: true
    }
  });

  const followin = await prisma.following.create({
    data: {
    userId: followingId
    }, include: {
        user: true
    }
  });

  return NextResponse.json({SEGUIDOR: follow, ELQUESIGUE: followin});
}