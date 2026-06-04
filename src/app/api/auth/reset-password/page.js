import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "UPDATE users SET password=? WHERE email=?",
      [hashedPassword, email]
    );

    return NextResponse.json({
      message: "Password updated",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error" },
      { status: 500 }
    );
  }
}
