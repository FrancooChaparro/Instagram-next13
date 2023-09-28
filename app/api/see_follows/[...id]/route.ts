import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";

export async function GET(request: NextRequest) {
  const { pathname } = parse(request.url || "", true);
  const [, id] = (pathname || "").split("api/see_follows/");

  try {
    if (isNaN(parseInt(id, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid user ID provided" },
        { status: 400 }
      );
    }
    const userID = await prisma.user.findUnique({
      where: {
        id: parseInt(id, 10),
      },
      include: {
        posts: true,
        like: {
          include: {
            post: true,
          },
        },
      },
    });

    if (!userID) {
      return NextResponse.json(
        { status: false, msg: "User not found" },
        { status: 404 }
      );
    }

    let seguidos: any[] = [];
    let arrayseguidos = userID.following;

    for (const e of arrayseguidos) {
      let user = await prisma.user.findUnique({
        where: {
          id: e,
        },
      });
      seguidos.push(user);
    }

    let seguidores: any[] = [];
    let arrayFollows = userID.followers;

    for (const e of arrayFollows) {
      let user = await prisma.user.findUnique({
        where: {
          id: e,
        },
      });
      seguidores.push(user);
    }
    return NextResponse.json(
      { status: true, user: userID, seguidores, seguidos },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
