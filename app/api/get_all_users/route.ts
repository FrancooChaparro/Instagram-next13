import prisma from "@/app/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const queryParameters = request.nextUrl?.searchParams; // Obtiene los parámetros de consulta

  if (queryParameters) {
    const name = queryParameters.get("name"); // Obtiene el valor del parámetro "name"

    if (name) {
      console.log(`El valor de 'name' es: ${name}`);

      const users = await prisma.user.findMany({
        where: {
          username: {
            startsWith: name, // Utiliza el operador "startsWith" para buscar nombres que comiencen con "fra"
          },
        },
        include: {
          posts: true,
        },
      });

      if (users.length === 0) {
        return NextResponse.json({ message: "El usuario no existe en la base de datos" }, { status: 404 });
      } else {
        return NextResponse.json(users);
      }
    } else {
      const allUsers = await prisma.user.findMany({
        include: {
          posts: true,
        },
      });

      return NextResponse.json(allUsers);
    }
  }
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

