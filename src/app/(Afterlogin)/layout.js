'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Flame, Compass, User } from 'lucide-react';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/aiguide', label: 'Home', icon: Home },
    { href: '/library', label: 'Library', icon: BookOpen },
    { href: '/namjap', label: 'Naam Jap', icon: Flame },
    { href: '/aiguide/short-explanation', label: 'Explore', icon: Compass },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  return (
    /* md:h-[calc(100vh-64px)] constraints the viewport size on desktop so only the content container scrolls */
    <div className="min-h-screen md:min-h-0 md:h-[calc(100vh-64px)] bg-slate-100 font-sans flex flex-col md:flex-row overflow-hidden">
      
      {/* DESKTOP SIDEBAR NAVIGATION (Completely locked & unmovable) */}
      <aside className="hidden md:flex flex-col justify-between w-64 bg-white border-r border-slate-200 p-6 shadow-sm h-full sticky top-0 z-30">
        <div className="space-y-8">
          <div className="flex items-center gap-3 px-2">
            <span className="text-2xl">🪷</span>
            <span className="font-serif font-bold text-xl text-amber-800 tracking-wide">Believa</span>
          </div>

          <nav className="space-y-1" >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-blue-900 text-white shadow-md shadow-blue-900/10' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* CORE CANVAS: ONLY this container will scroll on desktop */}
      <main className="flex-1 flex flex-col min-h-0 bg-slate-50 relative w-full h-full">
        {/* overflow-y-auto on this container isolated scroll chains perfectly */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-24 md:pb-6">
          {children}
        </div>

        {/* MOBILE BOTTOM NAVIGATION */}
        <nav className="md:hidden bg-white border-t border-slate-200 py-3 px-4 flex justify-around fixed bottom-0 left-0 right-0 z-50 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className={`flex flex-col items-center gap-1 min-w-[50px] ${
                  isActive ? 'text-blue-900 font-bold' : 'text-gray-400'
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </main>

    </div>
  );
}