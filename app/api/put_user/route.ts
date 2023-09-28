import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const body = await request.json();
  const { userId, email, name, image, username, password } = body;

  try {
    if (isNaN(parseInt(userId, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid user ID provided" },
        { status: 400 }
      );
    }
    if (!userId) {
      return NextResponse.json(
        { status: false, msg: "ID user required" },
        { status: 400 }
      );
    }

    const userExist = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!userExist) {
      return NextResponse.json(
        { status: false, msg: "User not found" },
        { status: 404 }
      );
    }

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        name,
        image,
        username,
        password,
      },
    });

    return NextResponse.json({ status: true, user: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
