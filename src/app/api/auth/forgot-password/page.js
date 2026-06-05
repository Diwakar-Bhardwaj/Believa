import { NextResponse } from "next/server";
import db from "@/lib/db";
import transporter from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email } = body;

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const expire = Date.now() + 5 * 60 * 1000;

    await db.query(
      "UPDATE users SET otp=?, otp_expire=? WHERE email=?",
      [otp, expire, email]
    );

    await transporter.sendMail({
      from: "YOUR_EMAIL@gmail.com",
      to: email,
      subject: "OTP Verification",
      html: `<h1>Your OTP: ${otp}</h1>`,
    });

    return NextResponse.json({
      message: "OTP sent",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error" },
      { status: 500 }
    );
  }
}
