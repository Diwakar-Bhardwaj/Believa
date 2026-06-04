import bcrypt from "bcryptjs";

import pool from "@/lib/db";

export async function POST(req) {

  try {

    const body = await req.json();

    const {
      email,
      password,
    } = body;

    // FIND USER
    const [users] =
      await pool.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

    if (users.length === 0) {

      return Response.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const user = users[0];

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return Response.json(
        {
          message: "Invalid password",
        },
        {
          status: 400,
        }
      );
    }

    return Response.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

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