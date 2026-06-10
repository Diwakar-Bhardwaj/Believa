// app/new-password/page.jsx

"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NewPassword() {

  const searchParams = useSearchParams();
  const router = useRouter();

  const email =
    searchParams.get("email");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleResetPassword =
    async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "/api/auth/reset-password",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        const data = await res.json();

        alert(data.message);
        
        if(res.ok) {
            router.push("/login");
        }

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 text-black">

      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create New Password
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Your new password must be secure
        </p>

        <div className="mb-5">
          <label className="block mb-2 font-medium">
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
          />
        </div>

        <button
          onClick={handleResetPassword}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          {loading
            ? "Updating..."
            : "Update Password"}
        </button>
      </div>
    </div>
  );
}