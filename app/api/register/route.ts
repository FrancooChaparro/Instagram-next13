import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    image,
    username,
  } = body;

  console.log("llego???");

  const user = await prisma.user.create({
    data: {
      email,
      name,
      username,
      image
    }
  });

  return NextResponse.json(user);
}
