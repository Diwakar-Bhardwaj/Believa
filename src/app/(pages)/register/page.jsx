

"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { RiLockPasswordLine } from "react-icons/ri";
import toast from "react-hot-toast";

export default function RegisterPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [checked, setChecked] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // alert("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    // checkbox validation
    if (!checked) {
      // alert("Please agree to Terms & Conditions");
      toast.error("Please agree to Terms & Conditions");
      return;
    }

    try {

      const res = await fetch("/api/auth/register", {
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

      let data = { message: "Unexpected server response" };
      try {
        data = await res.json();
      } catch (err) {
        console.error("Failed to parse JSON response", err);
      }
      toast.success(data.message);
      // alert(data.message);

      if (res.ok) {
        window.location.href = "/login";
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#f3f3f3] p-4 text-black">

      <div className="relative w-full max-w-md overflow-hidden rounded-[40px] bg-[#f8f5f7] shadow-2xl">

        {/* TOP BAR */}
        <div className="h-14 bg-[#08189B]" />

        {/* TEMPLE IMAGE */}
        <img
          src="/temple.png"
          alt="temple"
          className="absolute right-0 top-20 w-40 opacity-10"
        />

        <div className="px-8 pb-10 pt-8">

          {/* LOGO */}
          <div className="flex justify-center">

            <img
              src="/logo.png"
              alt="logo"
              className="w-28"
            />

          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-center text-6xl font-serif text-black">
            Believa
          </h1>

          <p className="mt-2 text-center text-xl text-gray-400">
            AI Powered Spiritual Wisdom
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5"
          >

            {/* NAME */}
            <div className="flex items-center rounded-xl border bg-white px-3">

              <div className="rounded-lg bg-[#EEE8F7] p-3 text-[#08189B]">

                <FaUser size={20} />

              </div>

              <input
                type="text"
                value={formData.name}
                placeholder="Full Name"
                className="w-full bg-transparent p-4 outline-none"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

            </div>

            {/* EMAIL */}
            <div className="flex items-center rounded-xl border bg-white px-3">

              <div className="rounded-lg bg-[#EEE8F7] p-3 text-[#08189B]">

                <MdEmail size={20} />

              </div>

              <input
                type="email"
                value={formData.email}
                placeholder="Email Address"
                className="w-full bg-transparent p-4 outline-none"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />

            </div>

            {/* PASSWORD */}
            <div className="flex items-center rounded-xl border bg-white px-3">

              <div className="rounded-lg bg-[#EEE8F7] p-3 text-[#08189B]">

                <RiLockPasswordLine size={20} />

              </div>

              <input
                type="password"
                value={formData.password}
                placeholder="Password"
                className="w-full bg-transparent p-4 outline-none"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="flex items-center rounded-xl border bg-white px-3">

              <div className="rounded-lg bg-[#EEE8F7] p-3 text-[#08189B]">

                <RiLockPasswordLine size={20} />

              </div>

              <input
                type="password"
                value={formData.confirmPassword}
                placeholder="Confirm Password"
                className="w-full bg-transparent p-4 outline-none"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
              />

            </div>

            {/* CHECKBOX */}
            <div className="flex items-start gap-3">

              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-1 h-5 w-5 accent-[#08189B]"
              />

              <p className="text-sm text-gray-700">

                I agree to accept our{" "}

                <span className="text-[#08189B]">
                  Terms & Conditions
                </span>

                {" "}and{" "}

                <span className="text-[#08189B]">
                  privacy policy
                </span>

              </p>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#08189B] py-4 text-lg font-semibold text-white"
            >
              Create Account
            </button>

          </form>

          {/* DIVIDER */}
          <div className="my-8 flex items-center gap-3">

            <div className="h-[1px] flex-1 bg-gray-300" />

            <p className="text-gray-500">
              or Continue With
            </p>

            <div className="h-[1px] flex-1 bg-gray-300" />

          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex justify-center gap-6">

            {/* GOOGLE */}
            {/* <button
              onClick={() => signIn("google")}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >

              <FaGoogle size={35} />

            </button> */}

            <button
              type="button"
              onClick={() => signIn("google")}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <FaGoogle size={35} />
            </button>

            {/* APPLE */}
            <button
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >

              <FaApple size={35} />

            </button>

          </div>

          {/* LOGIN */}
          <p className="mt-8 text-center font-medium">

            Do you have an account?{" "}

            <Link
              href="/login"
              className="text-[#08189B]"
            >
              Login
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}