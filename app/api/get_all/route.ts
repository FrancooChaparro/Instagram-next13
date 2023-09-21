import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
) {
    
    const posts = await prisma.post.findMany({
     include: {
       author: true
     },
});

    return NextResponse.json(posts);
  }


  // TRAIGO TODOS LOS USER Y INCLUYO LOS POSTS
  // const getAuthor = await prisma.user.findUnique({
  //   where: { 
  //     id: 1
  //   },
  //   include: {
  //     posts: true, // All posts where authorId == 20
  //   },
  // });
  

// TRAIGO TODOS LOS POSTS Y INCLUYO EL MODELO DE USER EN CADA POSTS PARA VER QUE LO POSTEO
//   const posts = await prisma.post.findMany({
//     include: {
//       author: true
//     },
// });