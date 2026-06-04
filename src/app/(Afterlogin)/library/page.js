'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data accurately matching the image specifications
  const scriptures = [
    { id: 'gita', name: 'Bhagavada Gita', details: '700 Verses', progress: 'w-[20%]', icon: '🕉️', bgColor: 'from-amber-500 to-orange-600' },
    { id: 'ramayan', name: 'Ramayan', details: '500+ Verses', progress: 'w-[35%]', icon: '🏹', bgColor: 'from-orange-600 to-amber-800' },
    { id: 'mahabharat', name: 'Mahabharat', details: '18 Parvas', progress: 'w-[15%]', icon: '🛡️', bgColor: 'from-stone-700 to-stone-900' },
    { id: 'shiv', name: 'Shiv Purana', details: '24,000 Verses', progress: 'w-[75%]', icon: '🔱', bgColor: 'from-indigo-600 to-purple-900' },
    { id: 'garuda', name: 'Garuda Purana', details: '19,000 Verses', progress: 'w-[10%]', icon: '🦅', bgColor: 'from-emerald-600 to-teal-900' },
    { id: 'vishnu', name: 'Vishnu Purana', details: '23,000 Verses', progress: 'w-[12%]', icon: '🐚', bgColor: 'from-cyan-600 to-blue-900' },
    { id: 'bhagavata', name: 'Bhagavata Purana', details: '18,000 Verses', progress: 'w-[40%]', icon: '☀️', bgColor: 'from-red-600 to-amber-700' },
  ];

  // Filtering based on search box input
  const filteredScriptures = scriptures.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-24 md:pb-6">
      
      {/* 1. TOP HEADER PANEL */}
      <div className="flex justify-between items-center bg-transparent pt-2">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Library</h1>
        <button className="p-2 hover:bg-slate-200/60 rounded-full transition-colors text-slate-700">
          <Search size={20} />
        </button>
      </div>

      {/* 2. SEARCH UTILITY BAR */}
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search for books, chapters, topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-100 border border-transparent focus:border-blue-500 focus:bg-white text-xs sm:text-sm pl-11 pr-4 py-3 rounded-full outline-none transition-all shadow-inner text-slate-800 placeholder-slate-400"
        />
      </div>

      {/* 3. CATEGORY CHIP */}
      <div className="flex items-center gap-2">
        <button className="bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm shadow-blue-900/20 active:scale-95 transition-transform">
          <span>🕉️</span>
          <span>Hinduism</span>
        </button>
      </div>

      {/* 4. SCRIPTURES GRID / LIST CONTAINER */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
          Hindu Scriptures
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {filteredScriptures.map((book) => (
            /* Next.js Link pushes layout target window directly down into our dynamic reading layout views */
            <Link
              key={book.id}
              href="/aiguide/verse-detail"
              className="bg-white border border-slate-200/50 hover:border-slate-300 p-4 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-all group active:scale-[0.99]"
            >
              <div className="flex items-center gap-4">
                {/* Book Thumbnail Graphic mimicking image layouts */}
                <div className={`w-14 h-14 bg-gradient-to-br ${book.bgColor} text-white text-xl font-bold rounded-xl flex items-center justify-center shadow-md shadow-inner shrink-0 group-hover:scale-105 transition-transform`}>
                  {book.icon}
                </div>
                
                {/* Meta Descriptions */}
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                    {book.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                    {book.details}
                  </p>
                  
                  {/* Embedded Custom Progress Loading Track Bar */}
                  <div className="w-32 bg-slate-100 h-1 rounded-full overflow-hidden mt-1.5">
                    <div className={`bg-blue-900 h-full ${book.progress} rounded-full`}></div>
                  </div>
                </div>
              </div>

              {/* Navigation Action Arrow indicators */}
              <div className="p-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-blue-900 group-hover:bg-blue-50 transition-all">
                <ChevronRight size={16} />
              </div>
            </Link>
          ))}
          
          {/* Fallback empty search viewport */}
          {filteredScriptures.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-xs">
              No matching scriptures found. Try another search query.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}