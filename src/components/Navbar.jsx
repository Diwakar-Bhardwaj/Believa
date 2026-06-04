"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `transition px-3 py-2 rounded-lg ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-white hover:text-blue-400"
    }`;

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          MyApp
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/login" className={linkClass("/login")}>
            Sign In
          </Link>

          <Link href="/register" className={linkClass("/register")}>
            Register
          </Link>

          <Link href="/profile" className={linkClass("/profile")}>
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}