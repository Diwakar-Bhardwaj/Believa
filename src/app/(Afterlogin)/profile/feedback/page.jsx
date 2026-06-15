"use client";

import React, { useState } from "react";
import { 
  ChevronLeft, 
  MessageCircle, 
  Edit2, 
  Send,
  Frown,
  Meh,
  Smile,
  Laugh
} from "lucide-react";

export default function FeedbackPage() {
  const [selectedRating, setSelectedRating] = useState("");
  const [comment, setComment] = useState("");
  const [agreed, setAgreed] = useState(true);

  // Ratings mapped cleanly to Lucide components with proper color values matching Frame 1618870204.png
  const ratings = [
    { 
      label: "Very Bad", 
      value: "very_bad", 
      icon: <Frown size={32} className="text-[#C10230]" strokeWidth={2.5} /> 
    },
    { 
      label: "Bad", 
      value: "bad", 
      icon: <Frown size={32} className="text-[#FFA12F]" strokeWidth={2.5} /> 
    },
    { 
      label: "Okay", 
      value: "okay", 
      icon: <Meh size={32} className="text-[#FFDE00]" strokeWidth={2.5} /> 
    },
    { 
      label: "Good", 
      value: "good", 
      icon: <Smile size={32} className="text-[#27A753]" strokeWidth={2.5} /> 
    },
    { 
      label: "Excellent", 
      value: "excellent", 
      icon: <Laugh size={32} className="text-[#23C45E]" strokeWidth={2.5} /> 
    },
  ];

  const handleCommentChange = (e) => {
    if (e.target.value.length <= 500) {
      setComment(e.target.value);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRating) {
      alert("Please select a rating option before submitting!");
      return;
    }
    if (!agreed) {
      alert("Please check the agreement box to share your feedback.");
      return;
    }
    alert(`Thank you for your feedback!\nRating: ${selectedRating}`);
    setSelectedRating("");
    setComment("");
  };

  return (
    <div className="min-h-screen bg-[#F7F1F3] text-slate-800 font-sans pb-12">
      
      {/* Sticky App Header */}
      <div className="bg-[#F7F1F3] pt-12 pb-4 px-4 flex items-center max-w-md mx-auto relative">
        <button 
          type="button"
          onClick={handleBack}
          className="p-2 hover:bg-slate-200/60 rounded-full transition absolute left-2"
        >
          <ChevronLeft className="w-6 h-6 text-slate-800" />
        </button>
        <h1 className="text-xl font-bold text-center w-full text-slate-900 tracking-tight">
          Feedback
        </h1>
      </div>

      <div className="max-w-md mx-auto px-5 mt-2">
        
        {/* Central Illustrative Header Feature */}
        <div className="flex flex-col items-center text-center my-6">
          <div className="w-32 h-32 bg-[#F1EFFC] rounded-full flex items-center justify-center relative mb-4">
            {/* Updated to use MessageCircle component */}
            <MessageCircle className="w-14 h-14 text-[#60399A]" fill="currentColor" />
            <div className="absolute bottom-4 right-4 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-100 text-slate-400">
              <Edit2 size={12} strokeWidth={2.5} />
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-slate-900">Share your thoughts</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-[270px] leading-relaxed">
            Your feedback helps us improve Believa and serve you better
          </p>
        </div>

        {/* Input Interactive Form Elements */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Rating Choice Grid */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              How was your experience?
            </h3>
            
            <div className="grid grid-cols-5 gap-2">
              {ratings.map((rating) => {
                const isSelected = selectedRating === rating.value;
                return (
                  <button
                    key={rating.value}
                    type="button"
                    onClick={() => setSelectedRating(rating.value)}
                    className={`flex flex-col items-center justify-center py-3 px-1 rounded-2xl bg-white border transition duration-200 shadow-sm ${
                      isSelected 
                        ? "border-[#7B61FF] bg-[#F1EFFC]/40 ring-1 ring-[#7B61FF]" 
                        : "border-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <div className="mb-2 hover:scale-105 transition-transform">
                      {rating.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 tracking-tight whitespace-nowrap">
                      {rating.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Text Field Input */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              Tell us more (optional)
            </h3>
            
            <div className="bg-white border border-slate-200/60 rounded-2xl p-3 shadow-sm focus-within:border-[#7B61FF] transition relative">
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="What did you like or what we can improve?"
                rows={5}
                className="w-full bg-transparent text-sm focus:outline-none placeholder-slate-300 text-slate-800 font-medium resize-none pb-4"
              />
              <span className="absolute bottom-3 right-4 text-[10px] font-bold text-slate-400 select-none">
                {comment.length}/500
              </span>
            </div>
          </div>

          {/* Legal Acknowledgement Toggle Checkbox Row */}
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <div className="relative flex items-center mt-0.5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-5 h-5 rounded-full border border-slate-300 bg-white peer-checked:bg-[#0A1D87] peer-checked:border-[#0A1D87] flex items-center justify-center transition-all shadow-sm">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${agreed ? "scale-100" : "scale-0"}`}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-700 leading-normal">
              I agree to share my feedback with Believa team
            </span>
          </label>

          {/* Bottom Action Submitting Block */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#0A1D87] text-white py-4 rounded-full font-semibold text-sm shadow-md hover:bg-[#071563] active:scale-[0.99] transition flex items-center justify-center gap-2"
            >
              <Send size={16} fill="currentColor" className="transform rotate-[-12deg]" />
              <span>Submit Feedback</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}