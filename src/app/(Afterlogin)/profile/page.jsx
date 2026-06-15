"use client";
import Link from "next/link";
import React, { useState } from "react";
import { 
  User, 
  Lock, 
  Globe, 
  Moon, 
  Headset, 
  MessageSquare, 
  Star, 
  ShieldCheck, 
  FileText, 
  LogOut, 
  Trash2, 
  ChevronDown, 
  ChevronUp,
  Bell
} from "lucide-react";

export default function ProfilePage() {
  // Collapsible sections states
  const [openSections, setOpenSections] = useState({
    account: false,
    preferences: false,
    support: false,
  });

  // Dark Mode toggle switch state
  const [darkMode, setDarkMode] = useState(false);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-[#F7F1F3] pb-10 text-slate-800 font-sans">
      {/* Top Header Navigation */}
      <div className="bg-[#1D3557] text-white pt-12 pb-6 px-6 rounded-b-[40px] shadow-md">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div className="flex items-center gap-2">
            {/* Lotus SVG Icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-amber-400" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22C12 22 17 18 19 14C21 10 20 6 17 6C15 6 13 8 12 10C11 8 9 6 7 6C4 6 3 10 5 14C7 18 12 22 12 22Z" />
              <path d="M12 22C12 22 19 19 21 15C23 11 21 8 19 8C17 8 14 11 12 13C10 11 7 8 5 8C3 8 1 11 3 15C5 19 12 22 12 22Z" />
            </svg>
            <h1 className="text-xl font-serif font-semibold tracking-wide">User Profile</h1>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition" onClick={() => alert("Notifications clicked")}>
            <Bell className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 mt-6 space-y-6">
        
        {/* User Snapshot Card */}
        <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-sm">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-100">
            <img
              src="/profile.png" 
              alt="Arjun"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Arjun</h2>
            <p className="text-sm text-slate-400">Arjun@example.com</p>
          </div>
        </div>

        {/* ACCOUNT SECTION */}
        <div>
          <button 
            className="w-full flex justify-between items-center px-2 py-1 text-xs font-bold text-[#7B61FF] uppercase tracking-wider mb-2"
            onClick={() => toggleSection('account')}
          >
            <span>Account</span>
            {openSections.account ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          {openSections.account && (
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm space-y-1 p-2">
              
                 <Link 
  href="/profile/edit-profile" 
  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left block"
>
  <div className="flex items-center gap-4">
    <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
      <Lock className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 text-sm">Edit Profile</h4>
      <p className="text-xs text-slate-400">Update your personal information</p>
    </div>
  </div>
  <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">
    &gt;
  </span>
</Link>
              <Link 
  href="/profile/change-password" 
  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left block"
>
  <div className="flex items-center gap-4">
    <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
      <Lock className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 text-sm">Change Password</h4>
      <p className="text-xs text-slate-400">Update your account password</p>
    </div>
  </div>
  <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">
    &gt;
  </span>
</Link>
            </div>
          )}
        </div>

        {/* APP PREFERENCES SECTION */}
        <div>
          <button 
            className="w-full flex justify-between items-center px-2 py-1 text-xs font-bold text-[#7B61FF] uppercase tracking-wider mb-2"
            onClick={() => toggleSection('preferences')}
          >
            <span>App Preferences</span>
            {openSections.preferences ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {openSections.preferences && (
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm space-y-1 p-2">
              <button onClick={() => alert("Language Selection")} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Language</h4>
                    <p className="text-xs text-slate-400">Choose your preferred language</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-[#7B61FF]">
                  <span>English</span>
                  <span>&gt;</span>
                </div>
              </button>

              <div className="flex items-center justify-between p-4 rounded-2xl text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
                    <Moon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Dark Mode</h4>
                    <p className="text-xs text-slate-400">Switch between light and dark theme</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={darkMode} 
                    onChange={() => setDarkMode(!darkMode)} 
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7B61FF]"></div>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* SUPPORT SECTION */}
        <div>
          <button 
            className="w-full flex justify-between items-center px-2 py-1 text-xs font-bold text-[#7B61FF] uppercase tracking-wider mb-2"
            onClick={() => toggleSection('support')}
          >
            <span>Support</span>
            {openSections.support ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {openSections.support && (
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm space-y-1 p-2">
  
                 <Link 
  href="/profile/contact-us" 
  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left block"
>
  <div className="flex items-center gap-4">
    <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
      <Lock className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 text-sm">Contact Us</h4>
      <p className="text-xs text-slate-400">We're here to help you</p>
    </div>
  </div>
  <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">
    &gt;
  </span>
</Link>

 <Link 
  href="/profile/feedback" 
  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left block"
>
  <div className="flex items-center gap-4">
    <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
      <Lock className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 text-sm">Feedback</h4>
      <p className="text-xs text-slate-400">Share your thoughts with us</p>
    </div>
  </div>
  <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">
    &gt;
  </span>
</Link>
              

             <Link 
  href="/profile/rate-app" 
  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left block"
>
  <div className="flex items-center gap-4">
    <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
      <Lock className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 text-sm">Rate Believa</h4>
      <p className="text-xs text-slate-400">Support us by rating the app</p>
    </div>
  </div>
  <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">
    &gt;
  </span>
</Link>
            </div>
          )}
        </div>

        {/* LEGAL SECTION */}
        <div>
          <h3 className="px-2 py-1 text-xs font-bold text-[#7B61FF] uppercase tracking-wider mb-2">Legal</h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm space-y-1 p-2">
            <button onClick={() => alert("Privacy Policy")} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Privacy Policy</h4>
                  <p className="text-xs text-slate-400">Read our privacy policy</p>
                </div>
              </div>
              <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
            </button>

            <button onClick={() => alert("Terms & Conditions")} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Terms &amp; Conditions</h4>
                  <p className="text-xs text-slate-400">Read our terms and conditions</p>
                </div>
              </div>
              <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
            </button>
          </div>
        </div>

        {/* ACCOUNT ACTIONS SECTION */}
        <div>
          <h3 className="px-2 py-1 text-xs font-bold text-[#7B61FF] uppercase tracking-wider mb-2">Account Actions</h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm space-y-1 p-2">
           
             <Link 
  href="/profile/logout" 
  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left block"
>
  <div className="flex items-center gap-4">
    <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
      <Lock className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 text-sm">Logout</h4>
      <p className="text-xs text-slate-400">Sign out from your account</p>
    </div>
  </div>
  <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">
    &gt;
  </span>
</Link>

 <Link 
  href="/profile/delete-account" 
  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group text-left block"
>
  <div className="flex items-center gap-4">
    <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-2xl">
      <Lock className="w-6 h-6" />
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 text-sm">Delete Account</h4>
      <p className="text-xs text-slate-400">Permanently delete your account</p>
    </div>
  </div>
  <span className="text-slate-400 font-bold group-hover:translate-x-1 transition-transform">
    &gt;
  </span>
</Link>

          </div>
        </div>

        {/* App Version Tag */}
        <div className="text-center text-[11px] text-slate-400 font-medium pt-2">
          App Version 1.0.0
        </div>
      </div>
    </div>
  );
}