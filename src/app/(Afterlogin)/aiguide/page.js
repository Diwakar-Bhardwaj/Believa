import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="p-4 sm:p-6 md:p-10 pb-24 md:pb-10 space-y-6 max-w-5xl mx-auto">
      {/* ... keeping header layout identical to previous code ... */}

      {/* Verse of the Day Card */}
      <div className="relative rounded-2xl overflow-hidden min-h-[260px] md:h-[380px] bg-gradient-to-b from-amber-950 via-stone-900 to-black text-white p-6 flex flex-col justify-between shadow-md">
        {/* Contents here */}
        
        {/* CHANGED TO LINK ELEMENT */}
        <Link 
          href="/dashboard/verse-detail"
          className="w-full md:w-max bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs md:text-sm py-2.5 px-6 rounded-xl flex justify-between items-center gap-4 transition-all z-10 border border-white/10"
        >
          <span>Reflect on this verse</span>
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}