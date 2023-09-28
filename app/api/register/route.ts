import prisma from "@/app/lib/prismadb";
import { User } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const regexName = /^([a-zA-Z ]+)$/i;
  const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,12}$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  try {
    const body = await request.json();
    const infoUser = {
      email: "",
      name: "",
      username: "",
      password: "",
    };
    const { email, name, image, username, password } = body;

    if (!name || !password || !email || !username)
      return NextResponse.json({ msg: "Missing required fields" });

    if (email && email.length > 0 && email != "") {
      if (regexEmail.test(email)) {
        const userBD = await prisma.user.findUnique({
          where: { email: `${email}` },
        });
        if (userBD) {
          return NextResponse.json({ msg: "The email already exists" });
        } else {
          infoUser.email = `${email}`;
        }
      }
    }

    if (name && name.length > 0 && name != "") {
      if (regexName.test(name)) {
        infoUser.name = `${name}`;
      } else {
        return NextResponse.json({ msg: "The name is invalid" });
      }
    }

    if (username && username.length > 0 && username != "") {
      if (regexName.test(username)) {
        infoUser.username = `${username}`;
      } else {
        return NextResponse.json({ msg: "The name is invalid" });
      }
    }

    if (password && password.length > 0 && password != "") {
      if (regexPassword.test(password)) {
        infoUser.password = password;
      } else {
        return NextResponse.json({ msg: "The password is invalid" });
      }
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
        image,
        password,
      },
    });
    return NextResponse.json({status: true, user: user});
  } catch (error) {
    return NextResponse.json({ msg: `Error 404 - ${error}` });
  }
}
