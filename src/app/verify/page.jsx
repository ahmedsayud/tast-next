"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Verify() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please login first.");
      return;
    }

    try {
      const { data } = await axios.post(
        `${BASE_URL}/auth/verify-email`,
        { code },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("API Response:", data);
      if (data.status || data.success) {
        localStorage.setItem("token", data.data?.token || token);
        router.push("/products");
      } else if (data.message === "هذا الحساب مفعل") {
        // لو الحساب مفعل، روح لـ products
        router.push("/products");
      } else {
        alert(
          "Verification failed: " + (data.message || "Invalid code. Try 123456")
        );
      }
    } catch (error) {
      alert(
        "Verification error: " +
          (error.response?.data?.message ||
            "Bad request. Status: " + error.response?.status)
      );
    }
  };
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition duration-300 hover:shadow-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Verify Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter verification code (e.g., 123456)"
            required
            className="w-full px-4 py-2 border border-[#BE968E] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE968E] transition"
          />
          <button
            type="submit"
            className="w-full bg-[#BE968E] text-white py-2 rounded-lg hover:bg-[#A8766E] transition duration-300 transform hover:scale-105"
          >
            Verify
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Code sent to your email. For testing: 123456
        </p>
      </div>
    </div>
  );
}
