"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaUser } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f4f4] p-4">
      <div className="w-full max-w-md bg-white rounded-[40px] p-8 shadow-lg">

        <div className="flex justify-center mb-6">
          <img
            src="/logo.png"
            alt="logo"
            className="w-24"
          />
        </div>

        <h1 className="text-5xl font-serif text-[#09005c] font-bold mb-4">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-2xl mb-8">
          Sign in to continue your spiritual journey
        </p>

        <button className="w-full bg-white border rounded-2xl py-4 flex items-center justify-center gap-3 text-lg font-semibold mb-4 hover:bg-gray-50">
          <FcGoogle size={28} />
          Continue with Google
        </button>

        <button className="w-full bg-white border rounded-2xl py-4 flex items-center justify-center gap-3 text-lg font-semibold mb-8 hover:bg-gray-50">
          <FaApple size={28} />
          Continue with Apple
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <span className="text-gray-400">
            or Continue With
          </span>

          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <button className="w-full bg-white border rounded-2xl py-4 flex items-center justify-center gap-3 text-lg font-semibold">
          <FaUser />
          Continue as Guest
        </button>

        <p className="text-center text-gray-400 mt-10">
          By continuing, you agree to our
        </p>

        <div className="text-center mt-2">
          <Link href="#" className="text-[#09005c] font-semibold">
            Terms of Service
          </Link>

          {" & "}

          <Link href="#" className="text-[#09005c] font-semibold">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}