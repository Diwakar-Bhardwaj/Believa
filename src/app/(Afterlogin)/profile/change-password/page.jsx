"use client";

import React, { useState } from "react";
import { 
  ChevronLeft, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck 
} from "lucide-react";

export default function ChangePasswordPage() {
  // States for hiding/showing password text
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Form field inputs state
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    // If using Next.js router custom implementation, you can swap this with router.back()
    window.history.back();
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { newPassword, confirmPassword } = formData;

  // 1. Check if passwords match
  if (newPassword !== confirmPassword) {
    alert("New passwords do not match!");
    return;
  }

  // 2. Check for at least 8 characters
  if (newPassword.length < 8) {
    alert("Password must be at least 8 characters long!");
    return;
  }

  // 3. Check for at least one uppercase letter
  if (!/[A-Z]/.test(newPassword)) {
    alert("Password must include at least one uppercase letter!");
    return;
  }

  // 4. Check for at least one lowercase letter
  if (!/[a-z]/.test(newPassword)) {
    alert("Password must include at least one lowercase letter!");
    return;
  }

  // 5. Check for at least one number
  if (!/[0-9]/.test(newPassword)) {
    alert("Password must include at least one number!");
    return;
  }

  // 6. Check for at least one special character (e.g., @, $, !, %, *, #, ?, &)
  if (!/[@$!%*#?&]/.test(newPassword)) {
    alert("Password must include at least one special character (@, $, !, etc.)!");
    return;
  }

  // If all conditions pass
  alert("Password updated successfully!");
  // Add your API call here to save it to the backend database
};
  return (
    <div className="min-h-screen bg-[#F7F1F3] text-slate-800 font-sans pb-12">
      
      {/* Sticky App Header */}
      <div className="bg-[#F7F1F3] pt-12 pb-4 px-4 flex items-center max-w-md mx-auto relative">
        <button 
          onClick={handleBack}
          className="p-2 hover:bg-slate-200/60 rounded-full transition absolute left-2"
        >
          <ChevronLeft className="w-6 h-6 text-slate-800" />
        </button>
        <h1 className="text-xl font-bold text-center w-full text-slate-900 tracking-tight">
          Change Password
        </h1>
      </div>

      <div className="max-w-md mx-auto px-5 mt-4">
        
        {/* Decorative Secure Shield Graphic banner */}
        <div className="flex flex-col items-center text-center my-6">
          <div className="w-32 h-32 bg-[#F1EFFC] rounded-full flex items-center justify-center relative mb-4 shadow-inner">
            {/* Embedded illustrative Shield icon stack */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#A391FF] to-[#7B61FF] rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
              <div className="transform -rotate-6 text-white">
                <Lock className="w-9 h-9" fill="currentColor" />
              </div>
            </div>
            {/* Sparkle decorative indicators */}
            <span className="absolute top-4 left-6 text-purple-400 text-lg">✦</span>
            <span className="absolute bottom-6 right-6 text-purple-400 text-sm">✦</span>
          </div>
          
          <h2 className="text-lg font-bold text-slate-900">Keep your account secure</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-[260px]">
            Choose a strong password and keep it private
          </p>
        </div>

        {/* Password input fields submission structure wrapper */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Current Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 tracking-wide block">
              Current Password
            </label>
            <div className="relative flex items-center bg-white border border-slate-100 rounded-2xl p-1 shadow-sm focus-within:border-[#7B61FF] transition">
              <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-xl ml-1">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showCurrent ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                placeholder="Enter your current password"
                className="w-full bg-transparent py-4 px-3 text-sm focus:outline-none placeholder-slate-400 font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="p-3 text-slate-400 hover:text-slate-600 transition absolute right-2"
              >
                {showCurrent ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* New Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 tracking-wide block">
              New Password
            </label>
            <div className="relative flex items-center bg-white border border-slate-100 rounded-2xl p-1 shadow-sm focus-within:border-[#7B61FF] transition">
              <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-xl ml-1">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showNew ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="Enter your new password"
                className="w-full bg-transparent py-4 px-3 text-sm focus:outline-none placeholder-slate-400 font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="p-3 text-slate-400 hover:text-slate-600 transition absolute right-2"
              >
                {showNew ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Live Visual Password Strength Bar */}
            <div className="pt-1 flex items-center gap-2">
              <span className="text-[11px] font-medium text-slate-400">
                Password strength : <span className="text-red-500 font-semibold">Weak</span>
              </span>
              <div className="flex-1 flex gap-1 h-[6px]">
                <div className="flex-1 bg-red-500 rounded-full" />
                <div className="flex-1 bg-slate-200 rounded-full" />
                <div className="flex-1 bg-slate-200 rounded-full" />
              </div>
            </div>
          </div>

          {/* Confirm New Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 tracking-wide block">
              Confirm New Password
            </label>
            <div className="relative flex items-center bg-white border border-slate-100 rounded-2xl p-1 shadow-sm focus-within:border-[#7B61FF] transition">
              <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-xl ml-1">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your new password"
                className="w-full bg-transparent py-4 px-3 text-sm focus:outline-none placeholder-slate-400 font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="p-3 text-slate-400 hover:text-slate-600 transition absolute right-2"
              >
                {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Security Information Notification Box */}
          <div className="bg-[#F0EDFF]/60 rounded-3xl p-5 flex items-start gap-4 border border-[#F0EDFF]">
            <div className="p-2 bg-white text-[#7B61FF] rounded-xl shadow-sm mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 tracking-tight">Password tips</h4>
              <ul className="mt-2 space-y-1 text-slate-500 text-xs font-medium list-disc list-inside">
                <li>Use at least 8 characters</li>
                <li>Include both uppercase and lowercase letters</li>
                <li>Add numbers and special characters</li>
                <li>Avoid using personal information</li>
              </ul>
            </div>
          </div>

          {/* Dynamic Interactive Actions Toolbar Footer */}
          <div className="space-y-3 pt-4">
            <button
              type="submit"
              className="w-full bg-[#0A1D87] text-white py-4 rounded-full font-semibold text-sm shadow-md hover:bg-[#071563] active:scale-[0.99] transition"
            >
              Update Password
            </button>
            
            <button
              type="button"
              onClick={handleBack}
              className="w-full bg-white text-[#0A1D87] border border-[#0A1D87] py-4 rounded-full font-semibold text-sm hover:bg-slate-50 active:scale-[0.99] transition"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}