import prisma from "@/app/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";

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
}
}

export async function GET(request: NextRequest) {
  const queryParameters = request.nextUrl?.searchParams; // Obtiene los parámetros de consulta
  try {
    if (queryParameters) {
      const name = queryParameters.get("name"); // Obtiene el valor del parámetro "name"

      if (name) {
        const users = await prisma.user.findMany({
          where: {
            username: {
              startsWith: name,
            },
          },
          include: {
            posts: true,
            coments: true,
            like: true,
          },
        });

        if (users.length === 0) {
          return NextResponse.json({ msg: "User not found" }, { status: 404 });
        } else {
          const usersData = await Promise.all(
            users.map((user) => getUserFollowData(user.id))
          );

          return NextResponse.json(usersData);
        }
      } else {
        const allUsers = await prisma.user.findMany({
          include: {
            posts: true,
            coments: true,
            like: true,
          },
        });

        const usersData = await Promise.all(
          allUsers.map((user) => getUserFollowData(user.id))
        );

        return NextResponse.json(usersData);
      }
    }

    return NextResponse.json(
      { msg: "Parámetros de consulta no proporcionados" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
