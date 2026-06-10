
"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await signIn("credentials", {
        email: formData.email,

        password: formData.password,

        redirect: false,
        callbackUrl: "/",

      });

      // if error 
      if(res.error) {
        toast.error(res.error);
        return;
      }

      //success
      router.push("/");
      router.refresh();


    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    };

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#f3f3f3] p-4 text-black">

      <div className="relative w-full max-w-md overflow-hidden rounded-[40px] bg-[#f8f5f7] shadow-2xl">

        {/* TOP BLUE BAR */}
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
          <h1 className="mt-6 text-center font-serif text-5xl text-[#08189B]">
            Welcome Back
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-center text-xl leading-9 text-gray-400">
            Sign in to continue
            <br />
            your spiritual journey
          </p>

          {/* GOOGLE BUTTON */}
          <button
            onClick={() => signIn("google", {
              callbackUrl: "/",
            })}
            className="mt-8 flex w-full items-center justify-center gap-4 rounded-2xl border bg-white py-4 text-lg font-semibold shadow-sm transition hover:scale-[1.01]"
          >

            <FaGoogle size={24} />

            Continue with Google

          </button>

          {/* APPLE BUTTON */}
          <button
            className="mt-4 flex w-full items-center justify-center gap-4 rounded-2xl border bg-white py-4 text-lg font-semibold shadow-sm transition hover:scale-[1.01]"
          >

            <FaApple size={24} />

            Continue with Apple

          </button>

          {/* DIVIDER */}
          <div className="my-8 flex items-center gap-3">

            <div className="h-[1px] flex-1 bg-gray-300" />

            <p className="text-sm text-gray-500">
              or Continue With
            </p>

            <div className="h-[1px] flex-1 bg-gray-300" />

          </div>

          {/* LOGIN FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* EMAIL */}
            <div className="flex items-center rounded-xl border bg-white px-3">

              <div className="rounded-lg bg-[#EEE8F7] p-3 text-[#08189B]">

                <MdEmail size={20} />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent p-4 outline-none"
                value={formData.email}
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
                placeholder="Password"
                className="w-full bg-transparent p-4 outline-none"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />

            </div>

            {/* FORGOT PASSWORD */}
            <div className="flex justify-end">

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-[#08189B]"
              >
                Forgot Password?
              </Link>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#08189B] py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              Login
            </button>

          </form>

          {/* REGISTER */}
          <p className="mt-8 text-center font-medium">

            Don’t have an account?{" "}

            <Link
              href="/register"
              className="text-[#08189B]"
            >
              Register
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}