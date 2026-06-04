"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaUser,
  FaLock,
  FaApple,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { FcGoogle } from "react-icons/fc";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("/api/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

    alert(data.message || "Signup successful");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f4f4] p-4">
      <div className="w-full max-w-md bg-white rounded-[40px] p-8 shadow-lg">

        <div className="flex justify-center mb-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-24"
          />
        </div>

        <h1 className="text-5xl font-serif font-bold text-center mb-2">
          Believa
        </h1>

        <p className="text-center text-gray-400 text-xl mb-8">
          AI Powered Spiritual Wisdom
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-4 relative">
            <FaUser className="absolute left-4 top-4 text-[#09005c]" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border rounded-xl py-4 pl-12 outline-none"
            />
          </div>

          <div className="mb-4 relative">
            <MdEmail className="absolute left-4 top-4 text-[#09005c]" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full border rounded-xl py-4 pl-12 outline-none"
            />
          </div>

          <div className="mb-4 relative">
            <FaLock className="absolute left-4 top-4 text-[#09005c]" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border rounded-xl py-4 pl-12 outline-none"
            />
          </div>

          <div className="mb-6 relative">
            <FaLock className="absolute left-4 top-4 text-[#09005c]" />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full border rounded-xl py-4 pl-12 outline-none"
            />
          </div>

          <button className="w-full bg-[#09005c] text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90">
            Create Account
          </button>
        </form>

        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <span className="text-gray-400">
            or Continue With
          </span>

          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="border rounded-2xl p-4">
            <FcGoogle size={30} />
          </button>

          <button className="border rounded-2xl p-4">
            <FaApple size={30} />
          </button>
        </div>

        <p className="text-center mt-8">
          Do you have an account?{" "}

          <Link
            href="/login"
            className="text-[#09005c] font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}