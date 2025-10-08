"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, formData);
      if (data.status) {
        localStorage.setItem("token", data.data.token); 
        localStorage.setItem("userName", data.data.name || "User"); 
        router.push("/products");
      } else {
        alert("Login failed: " + (data.message || "Unknown error"));
        console.log("Login failed:", data);
      }
    } catch (error) {
      console.log("Error: 29");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition duration-300 hover:shadow-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-[#BE968E] text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-[#BE968E] transition"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-[#BE968E] text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-[#BE968E] transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#BE968E] text-white py-2 rounded-lg hover:bg-[#A8766E] transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#BE968E] hover:underline">
            Register here
          </Link>
        </p>
        
        <p className="mt-2 text-center text-gray-600">
          <Link href="/verify" className="text-[#BE968E] hover:underline">
            Verify Account (if needed)
          </Link>
        </p>
      </div>
    </div>
  );
}
