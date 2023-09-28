import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

async function getUserFollowData(userId: number) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      posts: true,
      coments: true,
      like: {
        include: {
          post: true,
        },
      },
    },
  });

  let seguidos: any[] = []; // Inicializa la variable con un array vacío
  let arrayseguidos = user?.following;
  if (arrayseguidos) {
    for (const e of arrayseguidos) {
      let user = await prisma.user.findUnique({
        where: {
          id: e,
        },
      });
      seguidos.push(user);
    }
  }

  let seguidores: any[] = []; // Inicializa la variable con un array vacío
  let arrayFollows = user?.followers;
  if (arrayFollows) {
    for (const e of arrayFollows) {
      let user = await prisma.user.findUnique({
        where: {
          id: e,
        },
      });
      seguidores.push(user);
    }
  }
  return {
    ...user,
    seguidos,
    seguidores,
  };
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!password || !email)
      return NextResponse.json({ msg: "Missing required fields" });

    const userBD = await prisma.user.findUnique({
      where: { email: `${email}` },
      include: {
        posts: true,
        like: {
          include: {
            post: true,
          },
        },
        coments: true,
      },
    });
    if (!userBD)
      return NextResponse.json({ msg: "User not found", success: false });

    const checkPassword = password == userBD.password;

    if (checkPassword) {
      const usersData = await getUserFollowData(userBD.id);
      return NextResponse.json({ msg: usersData, success: true });
    } else {
      return NextResponse.json({ msg: "The password is invalid" });
    }
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
