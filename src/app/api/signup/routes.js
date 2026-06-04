import bcrypt from "bcryptjs";

import pool from "@/lib/db";

export async function POST(req) {

  try {

    const body = await req.json();

    const {
      name,
      email,
      password,
    } = body;

    // CHECK USER
    const [existingUsers] =
      await pool.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

    if (existingUsers.length > 0) {

      return Response.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // INSERT USER
    await pool.query(
      `
      INSERT INTO users
      (name, email, password)
      VALUES (?, ?, ?)
      `,
      [
        name,
        email,
        hashedPassword,
      ]
    );

    return Response.json({
      message: "Signup successful",
    });

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}