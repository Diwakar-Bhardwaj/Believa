"use client";

import React, { useState, useRef } from "react";
import { 
  ChevronLeft, 
  User, 
  Mail, 
  AtSign, 
  Camera 
} from "lucide-react";

export default function EditProfilePage() {
  const fileInputRef = useRef(null);

  // Form profile management state
  const [formData, setFormData] = useState({
    fullName: "Arjun Sharma",
    email: "arjun@example.com",
    username: "arjun_108",
  });

  // State to hold and swap profile image URI preview dynamically
  const [profileImage, setProfileImage] = useState("/profile.png");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile changes saved successfully!");
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
          Edit Profile
        </h1>
      </div>

      <div className="max-w-md mx-auto px-5 mt-2">
        
        {/* Dynamic Image Avatar Uploader Section */}
        <div className="flex flex-col items-center text-center my-6">
          <div className="relative w-36 h-36">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-200">
              <img
                src={profileImage}
                alt="Profile Avatar Preview"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
              />
            </div>
            
            {/* Hidden Input field utility to capture file system arrays */}
            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />

            {/* Clickable Blue Camera Action Badge overlay */}
            <button
              type="button"
              onClick={triggerImageUpload}
              className="absolute bottom-1 right-1 p-2.5 bg-[#0A1D87] text-white rounded-full border-4 border-[#F9F8FA] shadow-md hover:bg-[#071563] active:scale-95 transition"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <button
            type="button"
            onClick={triggerImageUpload}
            className="mt-3 text-xs font-bold text-[#0A1D87] hover:underline"
          >
            Change Photo
          </button>
        </div>

        {/* Edit profile metadata input fields */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-3">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              {/* Full Name Input Field Card */}
              <div className="flex items-center bg-white border border-slate-50 rounded-2xl p-2 shadow-sm focus-within:border-[#7B61FF] transition">
                <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-xl ml-1">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 px-3 py-1">
                  <label className="block text-[11px] font-semibold text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none pt-0.5"
                    required
                  />
                </div>
              </div>

              {/* Email Input Field Card */}
              <div className="flex items-center bg-white border border-slate-50 rounded-2xl p-2 shadow-sm focus-within:border-[#7B61FF] transition">
                <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-xl ml-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 px-3 py-1">
                  <label className="block text-[11px] font-semibold text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none pt-0.5"
                    required
                  />
                </div>
              </div>

              {/* Username Optional Input Field Card */}
              <div className="flex items-center bg-white border border-slate-50 rounded-2xl p-2 shadow-sm focus-within:border-[#7B61FF] transition">
                <div className="p-3 bg-[#F0EDFF] text-[#7B61FF] rounded-xl ml-1">
                  <AtSign className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 px-3 py-1">
                  <label className="block text-[11px] font-semibold text-slate-400">
                    Username (Optional)
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none pt-0.5"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions CTA Deck */}
          <div className="space-y-3 pt-6">
            <button
              type="submit"
              className="w-full bg-[#0A1D87] text-white py-4 rounded-full font-semibold text-sm shadow-md hover:bg-[#071563] active:scale-[0.99] transition"
            >
              Save Changes
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