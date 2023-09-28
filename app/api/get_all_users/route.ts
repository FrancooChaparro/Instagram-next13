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
    },
  });

  let seguidos: any[] = [];  // Inicializa la variable con un array vacío
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

  let seguidores: any[] = [];  // Inicializa la variable con un array vacío
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
  user, 
  seguidos,
  seguidores
}
}

export async function GET(request: NextRequest) {
  const queryParameters = request.nextUrl?.searchParams; // Obtiene los parámetros de consulta
  if (queryParameters) {
    const name = queryParameters.get("name"); // Obtiene el valor del parámetro "name"

    if (name) {
      console.log(`El valor de 'name' es: ${name}`);

      const users = await prisma.user.findMany({
        where: {
          username: {
            startsWith: name,
          },
        },
        include: {
          posts: true,
          coments: true,
      
        },
      });

      if (users.length === 0) {
        return NextResponse.json({ message: "El usuario no existe en la base de datos" }, { status: 404 });
      } else {
        // Obtener datos adicionales de cada usuario
        const usersData = await Promise.all(users.map(user => getUserFollowData(user.id)));

        return NextResponse.json(usersData);
      }
    } else {
      const allUsers = await prisma.user.findMany({
        include: {
          posts: true,
          coments: true,
      
        },
      });

      // Obtener datos adicionales de cada usuario
      const usersData = await Promise.all(allUsers.map(user => getUserFollowData(user.id)));

      return NextResponse.json(usersData);
    }
  }

  return NextResponse.json({ message: "Parámetros de consulta no proporcionados" }, { status: 400 });
}


  
  // Verifica si se proporciona un parámetro de consulta llamado "username"
  // if (query.username) {
  //   const username = query.username as string; // Suponemos que "username" es una cadena
  //   const users = await prisma.user.findMany({
  //     where: {
  //       username: {
  //         equals: username,
  //       },
  //     },
  //     include: {
  //       posts: true,
  //     },
  //   });
  //   return NextResponse.json(users);
  // } else {
  //   // Si no se proporciona el parámetro "username", obtén todos los usuarios
  //   const allUsers = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //     },
  //   });
  //   return NextResponse.json(allUsers);
  // }

