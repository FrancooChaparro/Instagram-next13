import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
) {
    
    const posts = await prisma.post.findMany();
    console.log("route", posts);
    
    
  return NextResponse.json(posts);
}