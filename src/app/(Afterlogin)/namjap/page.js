'use client';

import React, { useState } from 'react';
import { Edit2, Flame, Trophy } from 'lucide-react';

export default function NaamJaapPage() {
  const [count, setCount] = useState(0);
  const [malaCount, setMalaCount] = useState(0);

  // Core tap tracking logic
  const handleIncrement = () => {
    if (count >= 107) {
      setCount(108);
      setTimeout(() => {
        setCount(0);
        setMalaCount(prev => prev + 1);
      }, 200); 
    } else {
      setCount(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1F3] pt-6 pb-12 text-slate-800 font-sans antialiased">
      <div className="max-w-md mx-auto px-4 space-y-5">
        
        {/* TOP HEADER NAVIGATION PANEL */}
        <div className="flex justify-between items-center bg-[#F7F1F3]">
          
          {/* Left Side: Logo Asset and Brand Text */}
          <div className="flex items-center gap-1">
            <div className="relative w-25 h-20 flex items-center justify-center">
              <img 
                src="/lotus.png" 
                alt="Naam Jaap Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
            </div>
            <h1 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
              Naam Jaap
            </h1>
          </div>

          {/* Right Side: Trophy Icon from Lucide-React */}
          <div className="flex items-center">
            <button 
              type="button"
              onClick={() => alert("Leaderboard clicked!")}
              className="p-1.5 hover:bg-slate-200/60 rounded-full transition-colors group text-[#0A1D87]"
              aria-label="View Leaderboard"
            >
              <Trophy size={26} className="group-hover:scale-105 transition-transform" />
            </button>
          </div>

        </div>
        
        {/* 1. CHANT ACTIONS PANEL BANNER */}
        <div className="bg-[#F7F1F3] rounded-2xl pb-2 flex items-center justify-between border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white text-slate-800 rounded-full shadow-sm">
              <Edit2 size={18} />
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-slate-900">My Naam Jaap</h4>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                Set your own mantra and chant with focus
              </p>
            </div>
          </div>
          <button className="bg-[#60399A] text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-[#4C2D7B] transition-colors shadow-sm">
            Change
          </button>
        </div>

        {/* 2. CENTRAL MALA CONTAINER SECTION */}
        <div className="bg-[#F7F1F3] rounded-[32px] p-6 shadow-sm border border-slate-100/60 flex flex-col items-center justify-center relative min-h-[480px]">
          
          {/* Main Mala Background Frame - Adjusted to fit the vertical oval aspect ratio of naam-jap.png */}
          <div 
            className="w-full max-w-[340px] h-[460px] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center relative"
            style={{ backgroundImage: "url('/naam-jap.png')" }}
          >
            
            {/* Absolute Center Text Layer - Confined strictly to avoid hitting the surrounding beads */}
            <div className="text-center flex flex-col items-center max-w-[180px] -mt-16 select-none">
              <span className="text-[11px] text-[#60399A] font-bold tracking-wide uppercase">
                My Naam Jaap
              </span>
              
              {/* Floral Decorative Divider Line */}
              <div className="flex items-center gap-2 my-1 text-slate-300 w-24 justify-center">
                <div className="h-[1px] bg-slate-200 w-full" />
                <span className="text-[10px]">
                  
                </span>
                <div className="h-[1px] bg-slate-200 w-full" />
              </div>

              {/* Devotional Character Heading */}
              <h2 className="text-4xl font-extrabold text-slate-900 font-serif tracking-normal my-1">
                राम
              </h2>

              {/* Dynamic Counters Display */}
              <div className="mt-1">
                <p className="text-4xl font-black tracking-tight text-slate-950">{count}</p>
                <p className="text-xs font-bold text-slate-400 tracking-wider">/108</p>
              </div>

              {/* Mala Tracker Badge */}
              <p className="text-[11px] font-bold text-slate-500 mt-2 flex items-center gap-1 bg-[#F4F6F8] px-3 py-1 rounded-full border border-slate-100 whitespace-nowrap">
                {malaCount === 1 ? '1 Mala complete! 🙏' : `${malaCount} Malas complete! 🙏`}
              </p>
            </div>

            {/* Clickable Tap Trigger Button - Positioned safe and low below the gold tassel */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center z-20">
              <button 
                onClick={handleIncrement}
                className="bg-black hover:bg-slate-900 active:scale-95 text-white font-bold text-xs px-10 py-3.5 rounded-full shadow-lg transition-all tracking-wide border border-white/10"
              >
                +1 Jap
              </button>
            </div>
          </div>

        </div>

        {/* 3. METRICS ANALYTICS PANEL */}
        <div className="bg-white border border-slate-100 rounded-2xl grid grid-cols-3 divide-x divide-slate-100 text-center p-4 shadow-sm">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Today</p>
            <p className="text-base font-black text-slate-900 mt-1">1,296</p>
            <p className="text-[11px] font-semibold text-slate-400 mt-0.5">Japs</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">This Week</p>
            <p className="text-base font-black text-slate-900 mt-1">8,745</p>
            <p className="text-[11px] font-semibold text-slate-400 mt-0.5">Japs</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">This Month</p>
            <p className="text-base font-black text-slate-900 mt-1">34,287</p>
            <p className="text-[11px] font-semibold text-slate-400 mt-0.5">Japs</p>
          </div>
        </div>

        {/* 4. STREAK MATRIX BOARD */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-1.5 pl-1">
            Daily Streak <span className="text-orange-500">🔥</span>
          </h3>

          <div className="bg-white border border-slate-100 p-5 rounded-[28px] shadow-sm flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-950 tracking-tight">12</span>
              <span className="text-xs font-bold text-slate-400">Days</span>
            </div>
            
            {/* Week Tracking Dot Sequence */}
            <div className="flex items-center gap-3">
              {[
                { day: 'M', active: true },
                { day: 'T', active: true },
                { day: 'W', active: true },
                { day: 'T', active: true },
                { day: 'F', active: true },
                { day: 'S', active: true },
                { day: 'S', active: false },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.active ? 'bg-[#0A1D87]' : 'bg-slate-200'}`} />
                  <span className="text-[11px] font-bold text-slate-400">{item.day}</span>
                </div>
              ))}
            </div>

            {/* Streak Target Indicator Badge */}
            <div className="flex flex-col items-center pl-2">
              <div className="w-10 h-10 bg-[#FFF5EF] rounded-full flex items-center justify-center shadow-sm">
                <Flame size={20} className="text-orange-500" fill="currentColor" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1 whitespace-nowrap">12 Days</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}