import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db"

export default async function handler (req: NextRequest, res:NextResponse ) {
       return db.sync()
}