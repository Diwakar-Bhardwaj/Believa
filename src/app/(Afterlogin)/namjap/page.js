'use client';

import React, { useState } from 'react';
import { Bell, Edit2, Flame } from 'lucide-react';

export default function NaamJaapPage() {
  const [count, setCount] = useState(108);
  const [malaCount, setMalaCount] = useState(1);

  // Handle tap increment logic
  const handleIncrement = () => {
    if (count >= 108) {
      // Reset loop on completion & increment mala counter
      setCount(1);
      setMalaCount(prev => prev + 1);
    } else {
      setCount(prev => prev + 1);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6 pb-24 md:pb-6 font-sans antialiased text-slate-800">
      
      {/* 1. TOP HEADER BRAND PANEL */}
      <div className="flex justify-between items-center pt-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl text-amber-500">🪷</span>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Naam Jaap</h1>
        </div>
        <button className="p-2 hover:bg-slate-200/60 rounded-full transition-colors text-slate-700 relative">
          <Bell size={20} />
        </button>
      </div>

      {/* 2. CHANT HEADER BANNER */}
      <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-100 rounded-xl text-purple-900">
            <Edit2 size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-800">My Naam Jaap</h4>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">
              Set your own mantra and chant with focus
            </p>
          </div>
        </div>
        <button className="bg-purple-900 text-white font-semibold text-[11px] px-3 py-1.5 rounded-lg shadow-sm hover:bg-purple-950 transition-colors">
          Change
        </button>
      </div>

      {/* 3. CENTRAL SACRED JAAP MALA WHEEL */}
      <div className="relative bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center overflow-hidden min-h-[380px]">
        
        {/* Decorative inner background aura */}
        <div className="absolute w-64 h-64 bg-purple-50 rounded-full opacity-40 filter blur-xl pointer-events-none"></div>

        {/* Dynamic Circular Mala Bead Strand Simulator */}
        <div className="relative w-64 h-64 rounded-full border-4 border-dashed border-purple-200/40 flex items-center justify-center animate-[spin_120s_linear_infinite]">
          {/* Mapping dots sequentially around the perimeter to recreate the 108 Mala asset vibe */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3.5 h-3.5 bg-gradient-to-br from-purple-600 to-indigo-900 rounded-full shadow-sm"
              style={{
                transform: `rotate(${i * (360 / 40)}deg) translateY(-120px)`,
              }}
            />
          ))}
        </div>

        {/* Absolute Floating Center Display Readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-2 pointer-events-none">
          <span className="text-xs text-purple-700 font-serif tracking-wide font-bold">My Naam Jaap</span>
          <span className="text-xl text-slate-300 my-1">🪷</span>
          
          {/* Targeted Mantra Script heading */}
          <h2 className="text-4xl font-black text-slate-900 tracking-widest font-serif">राम</h2>
          
          <div className="mt-2">
            <p className="text-4xl font-extrabold tracking-tighter text-slate-900">{count}</p>
            <p className="text-xs font-bold text-slate-400 tracking-wider">/108</p>
          </div>

          <p className="text-[11px] font-bold text-slate-600 mt-3 flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            {malaCount} Mala complete! 🙏
          </p>
        </div>

        {/* Tap Counter Increment Button Anchor */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <button 
            onClick={handleIncrement}
            className="bg-black hover:bg-slate-900 active:scale-95 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-lg transition-all tracking-wider flex items-center gap-1 border border-white/10"
          >
            +1 Jap
          </button>
        </div>

        {/* Bottom Tassel Ornament Simulator */}
        <div className="absolute bottom-12 text-2xl pointer-events-none z-10 animate-bounce">
          📿
        </div>
      </div>

      {/* 4. ANALYTICS STATS METRIC BOXES */}
      <div className="bg-white border border-slate-200/60 rounded-2xl grid grid-cols-3 divide-x divide-slate-100 text-center p-3 shadow-sm">
        <div>
          <p className="text-[10px] font-semibold text-slate-400">Today</p>
          <p className="text-sm font-black text-slate-800 mt-1">1,296</p>
          <p className="text-[9px] font-medium text-slate-400 mt-0.5">Japs</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-slate-400">This Week</p>
          <p className="text-sm font-black text-slate-800 mt-1">8,745</p>
          <p className="text-[9px] font-medium text-slate-400 mt-0.5">Japs</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-slate-400">This Month</p>
          <p className="text-sm font-black text-slate-800 mt-1">34,287</p>
          <p className="text-[9px] font-medium text-slate-400 mt-0.5">Japs</p>
        </div>
      </div>

      {/* 5. STREAK PROGRESS SECTION */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-bold text-slate-800 flex items-center gap-1.5 pl-1">
          Daily Streak <span className="text-orange-500">🔥</span>
        </h3>

        <div className="bg-white border border-slate-200/60 p-4 rounded-2xl space-y-3 shadow-sm">
          <div className="flex justify-between items-center text-xs">
            <span className="text-2xl font-black text-slate-900 tracking-tight">12 <span className="text-xs font-normal text-slate-400">Days</span></span>
            
            {/* Week Matrix Dot Row */}
            <div className="flex items-center gap-3.5">
              {[
                { day: 'M', active: true },
                { day: 'T', active: true },
                { day: 'W', active: true },
                { day: 'T', active: true },
                { day: 'F', active: true },
                { day: 'S', active: true },
                { day: 'S', active: false },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${item.active ? 'bg-blue-900 shadow-sm shadow-blue-900/30' : 'bg-slate-200'}`}></span>
                  <span className="text-[9px] font-bold text-slate-400">{item.day}</span>
                </div>
              ))}
            </div>

            {/* End Target Flag Indicator */}
            <div className="flex flex-col items-center border-l border-slate-100 pl-3">
              <div className="bg-orange-50 p-1.5 rounded-full text-orange-600">
                <Flame size={16} strokeWidth={2.5} />
              </div>
              <span className="text-[8px] font-bold text-slate-400 mt-0.5">12 Days</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}