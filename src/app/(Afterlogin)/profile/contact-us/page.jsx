"use client";

import React, { useState } from "react";
import { 
  ChevronLeft, 
  User, 
  Mail, 
  Tag, 
  PenTool, 
  Clock,
  Headset
} from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Enforce max character limit of 500 for the message field
    if (name === "message" && value.length > 500) return;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent Successfully!\nSubject: ${formData.subject}`);
    // Clear form after successful submit mock action
    setFormData({ fullName: "", email: "", subject: "", message: "" });
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
          Contact Us
        </h1>
      </div>

      <div className="max-w-md mx-auto px-5 mt-2">
        
        {/* Decorative Customer Support Header Banner */}
        <div className="flex flex-col items-center text-center my-6">
          <div className="w-32 h-32 bg-[#F1EFFC] rounded-full flex items-center justify-center relative mb-4">
            {/* Custom Support Graphics Layout */}
            <Headset className="w-16 h-16 text-[#7B61FF]" strokeWidth={1.5} />
            <div className="absolute bottom-6 right-4 w-6 h-6 bg-[#7B61FF] rounded-lg flex items-center justify-center text-white shadow-md transform rotate-12">
              <span className="text-[10px] transform -rotate-12">💬</span>
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-slate-900">We’re here to help</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-[260px] leading-relaxed">
            Have a question or need assistance? Feel free to reach out to us.
          </p>
        </div>

        {/* Input Fields Submission Container Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-1">
            Send us a message
          </h3>

          {/* Full Name Input Box */}
          <div className="flex items-center bg-[#F8F9FA] border border-slate-200/50 rounded-2xl p-1 shadow-sm focus-within:bg-white focus-within:border-[#7B61FF] transition">
            <div className="p-3 bg-[#EFEAFA] text-[#7B61FF] rounded-xl ml-1">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full bg-transparent py-4 px-3 text-sm focus:outline-none placeholder-slate-400 font-medium text-slate-800"
              required
            />
          </div>

          {/* Email Address Input Box */}
          <div className="flex items-center bg-[#F8F9FA] border border-slate-200/50 rounded-2xl p-1 shadow-sm focus-within:bg-white focus-within:border-[#7B61FF] transition">
            <div className="p-3 bg-[#EFEAFA] text-[#7B61FF] rounded-xl ml-1">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full bg-transparent py-4 px-3 text-sm focus:outline-none placeholder-slate-400 font-medium text-slate-800"
              required
            />
          </div>

          {/* Subject Tag Input Box */}
          <div className="flex items-center bg-[#F8F9FA] border border-slate-200/50 rounded-2xl p-1 shadow-sm focus-within:bg-white focus-within:border-[#7B61FF] transition">
            <div className="p-3 bg-[#EFEAFA] text-[#7B61FF] rounded-xl ml-1">
              <Tag className="w-5 h-5" />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className="w-full bg-transparent py-4 px-3 text-sm focus:outline-none placeholder-slate-400 font-medium text-slate-800"
              required
            />
          </div>

          {/* Detailed Message Text Area Container Box */}
          <div className="bg-[#F8F9FA] border border-slate-200/50 rounded-2xl p-2 shadow-sm focus-within:bg-white focus-within:border-[#7B61FF] transition relative">
            <div className="flex items-start">
              <div className="p-3 bg-[#EFEAFA] text-[#7B61FF] rounded-xl ml-1 mt-1">
                <PenTool className="w-5 h-5" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={4}
                className="w-full bg-transparent pt-3 pb-8 px-3 text-sm focus:outline-none placeholder-slate-400 font-medium text-slate-800 resize-none"
                required
              />
            </div>
            
            {/* Live Counter Display string array matching snapshot design placement */}
            <span className="absolute bottom-3 right-4 text-[10px] font-semibold text-slate-400">
              {formData.message.length}/500
            </span>
          </div>

          {/* Submit Action Block CTA */}
          <div className="pt-4 space-y-4">
            <button
              type="submit"
              className="w-full bg-[#0A1D87] text-white py-4 rounded-full font-semibold text-sm shadow-md hover:bg-[#071563] active:scale-[0.99] transition"
            >
              Send Message
            </button>

            {/* Estimated Processing Response Speed Tagline */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
              <Clock className="w-4 h-4" />
              <span>We usually reply within 24-48 hours</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}