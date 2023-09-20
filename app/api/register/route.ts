
import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    password,
    username
  } = body;



  const user = await prisma.user.create({
    data: {
      email,
      name,
    }
  });

  return NextResponse.json(user);
}