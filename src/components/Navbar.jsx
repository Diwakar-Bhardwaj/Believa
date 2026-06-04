"use client";

import Link from "next/link";

export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-400"
        >
          MyApp
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-4 py-2 transition hover:bg-blue-700"
          >
            sign in
          </Link>

          <Link
            href="/register"
            className="transition hover:text-blue-400"
          >
            Register
          </Link>
            <Link
            href="/profile"
            className="transition hover:text-blue-400"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}