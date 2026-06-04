"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path) =>
    `transition px-4 py-2 rounded-lg text-sm font-medium block md:inline-block ${
      pathname === path
        ? "bg-blue-600 text-white shadow-sm"
        : "text-slate-200 hover:text-blue-400 hover:bg-slate-800 md:hover:bg-transparent"
    }`;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/login", label: "Sign In" },
    { href: "/register", label: "Register" },
    { href: "/profile", label: "Profile" },
    { href: "/aiguide", label: "Ai Guide" },
  ];

  return (
    /* FIXED: Enforced strict h-16 box height constraints onto the element base container */
    <nav className="sticky top-0 left-0 right-0 z-50 bg-slate-900 text-white shadow-md border-b border-slate-800 h-16 w-full select-none">
      <div className="mx-auto flex max-w-7xl h-full items-center justify-between px-6">
        
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400 tracking-tight">
          Believa
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      {isOpen && (
        /* top-16 ensures the drawer perfectly meets the bottom edge of the parent header bar */
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-3 space-y-2 absolute top-16 left-0 right-0 shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}