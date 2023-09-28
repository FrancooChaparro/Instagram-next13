import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";

export async function DELETE(request: NextRequest) {
  const { pathname } = parse(request.url || "", true);
  const [, id] = (pathname || "").split("api/delete/");

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

    await prisma.user.delete({
      where: {
        id: parseInt(id, 10),
      },
    });

    return NextResponse.json({ status: true, user: userID }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
