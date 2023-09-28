import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function DELETE(request: Request) {
  const { pathname } = parse(request.url || "", true);
  const [, id] = (pathname || "").split("api/delete_post/");

  try {
    if (isNaN(parseInt(id, 10))) {
      return NextResponse.json(
        { status: false, msg: "Invalid post ID provided" },
        { status: 400 }
      );
    }
    const postID = await prisma.post.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!postID) {
      return NextResponse.json(
        { status: false, msg: "Post does exist" },
        { status: 404 }
      );
    }

    await prisma.post.delete({
      where: {
        id: parseInt(id, 10),
      },
    });

    return NextResponse.json({ status: true, user: postID }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
